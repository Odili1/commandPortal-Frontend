import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAppSelector } from "../features/store/hooks"
import { toast } from "react-toastify"
import { selectUserId } from "../features/store/slices/authSlice"

const RequireAuth = () => {
    const location = useLocation()

    const userId = useAppSelector(selectUserId)

    console.log(`RequireAuth: ${userId}`);
    
    if (!userId ){
      toast.error('Login to continue RA')
    }

  return (
    userId
      ? <Outlet/>
      : <Navigate to={'/login'} state={{from: location}} replace/>
  )
}

export default RequireAuth