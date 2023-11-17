"use client"
import { useEffect, useState } from "react";

export function useDebounce(value: string, delay: number): string{
    const [debouncedVaue, setDebouncedValue] = useState('')
    useEffect(() => {
        const handleTimeout = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handleTimeout)
        }
    }, [value, delay])

    return debouncedVaue
}