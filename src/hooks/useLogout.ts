import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../features/store/hooks"
import { useLogoutMutation } from "../features/store/api/authApiSlice"
import { toast } from "react-toastify"
import { logoutUser } from "../features/store/slices/authSlice"
import { IError } from "../features/interfaces/userInfo"


type useLogOutReturnType = () => Promise<void>

const useLogOut = (): useLogOutReturnType => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const [logout] = useLogoutMutation()

    const logOut = async(): Promise<void> => {
        try {
            console.log('Logout clicked');
            
            const response = await logout('').unwrap()
            console.log('Logout Response:', response);
            
            dispatch(logoutUser())

            navigate('/')
        } catch (error: unknown) {
            const err = error as IError
            toast.error(err.data?.message)
        }
    }

    return logOut
}

export default useLogOut