import { useState } from "react";
import { UseAuthContext } from "../hooks/UseAuthContext";

export const useSignup = () =>{

    const [error, setError] = useState(null)
    const [isLoading, setisLoading] = useState(null)
    const { user, dispatch  } = UseAuthContext()

    const signup = async (email, password, username) => {
        setisLoading(true)
        setError(null)

        const response = await fetch('https://autoparts-flame.vercel.app/api/users/signup', {

            method: 'POST',
            body: JSON.stringify({email, password, username}),
            headers:{
                'Content-Type': 'application/json'
              }

        })

        const json = await response.json();

        if(!response.ok){
            setisLoading(false)
            setError(json.error)
            alert("NOT OK")
        }

        if(response.ok){
            // Save the user to the localStorage
            localStorage.setItem('user', JSON.stringify(json))

            // Update the auth context
            dispatch({type: 'LOGIN', payload: json})

            setisLoading(false)
        }

    }

    return {signup, isLoading, error}

}