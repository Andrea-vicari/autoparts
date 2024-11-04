import { UseAuthContext } from "../hooks/UseAuthContext"

export const useLogout = () =>{

    const {dispatch} = UseAuthContext()

    const logout = () => {

        // Remove user from storage
        localStorage.removeItem('user')

        // Dispatch logout action
        dispatch({type: 'LOGOUT'})

    }
    return {logout}
}