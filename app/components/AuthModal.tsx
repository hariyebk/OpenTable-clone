"use client"
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'rounded',
  boxShadow: 24,
  p: 4,
};



export default function AuthModal({isSignIn}: {isSignIn: boolean}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    clearInputFields()
  };
  const [input, setInput] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    city: "",
    phonenumber: ""
  })

  interface FormField {
      label: string, 
      type: string
  }
  function renderContent(signIn: string, signUp: string) {
    return isSignIn ? signIn : signUp
  }
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
    setInput({...input, [e.target.name]: e.target.value})
  }
  function clearInputFields(){
    if(isSignIn){
      setInput({...input, email: "", password: ""})
    }
    else{
      setInput({email: "", password: "", firstname: "", lastname: "", city: "", phonenumber: ""})
    }
  }
  function handleFormSubmit(e: React.FormEvent){
    e.preventDefault()
    handleClose()
    if(isSignIn){
      clearInputFields()
      // Login user
      console.log(input.email, input.password)
    }
    else{
      clearInputFields()
      // create new user
      console.log(input.firstname, input.lastname)

    }
  }

  return (
        <div>
          <button className={`${isSignIn ? "bg-blue-400 text-white" : "bg-gray-800 text-white"}  text-lg border p-1 px-4 rounded mr-3 focus:outline-none`} onClick={handleOpen}> {renderContent("Sign in", "Sign up")} </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <form className='p-2' onSubmit={handleFormSubmit}>
                  <div className='uppercase font-bold text-center pb-2 border-b mb-2 text-gray-700'>
                    <p className='text-lg'>
                      {renderContent("sign in", "create account")}
                    </p>
                  </div>
                  <div className='mb-2'>
                    <h2 className="text-xl font-normal mb-8 text-center text-gray-700">
                        {renderContent("Log in to your account", "create your openTable account")}
                    </h2>
                  </div>
                    {isSignIn ? (
                      <div className='container'>
                            <div className='inner-container'>
                                <label className='w-20'> Email : </label>
                                <input type= "text" placeholder='joe@email.com' name = "email" className='input' required = {true} value={input.email} onChange={handleInputChange} />  
                            </div>
                            <div className='inner-container'>
                                <label className='w-20'> Password : </label>
                                <input type= "password" name='password' className='input'  required = {true} value={input.password} onChange={handleInputChange} />  
                            </div>
                            <div className='w-full flex justify-end'>
                                <button className='cta-button'> Log in </button>
                                <button className='close-button' onClick={handleClose}> Cancel </button>
                            </div>
                      </div>): 
                      (
                      <div className='container'>
                            <div className='inner-container'>
                                <label className='w-28'> First name : </label>
                                <input type="text" name='firstname' className='input' required = {true} onChange={handleInputChange}  />  
                            </div>
                            <div className='inner-container'>
                                <label className='w-28'> Last name : </label>
                                <input type="text" name='lastname' className='input' required = {true} onChange={handleInputChange} />  
                            </div>
                            <div className='inner-container'>
                                <label className='w-28'> City : </label>
                                <input type="text" className='input' name='city' required = {true} onChange={handleInputChange} />  
                            </div>
                            <div className='inner-container'>
                                <label className='w-28'> Email : </label>
                                <input type="email" name='email' className='input'  required = {true} onChange={handleInputChange} />  
                            </div>
                            <div className='inner-container'>
                                <label className='w-28'> Password : </label>
                                <input type="password" name='password' className='input'  required = {true} onChange={handleInputChange} />  
                            </div>
                            <div className='inner-container'>
                                <label className='w-28'> Phone number : </label>
                                <input type="text" inputMode='numeric' name='phonenumber' pattern='[0-9]' className='input'  required = {true} onChange={handleInputChange} />  
                            </div>
                            <div className='flex justify-end'>
                                <button className='cta-button'> Create account </button>   
                                <button className='close-button' onClick={handleClose}> Close </button>    
                            </div>
                    </div>
                    )
                  }
              </form>
            </Box>
          </Modal>
        </div>
  );
}
