import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAppSelector } from "../features/store/hooks"
import { selectCurrentToken } from "../features/store/slices/authSlice"


const RequireAuth = () => {
    const token = useAppSelector(selectCurrentToken)
    console.log(`RequireAuth: ${token}`);
    
    const location = useLocation()

  return (
    token
      ? <Outlet/>
      : <Navigate to={'/login'} state={{from: location}} replace/>
  )
}

export default RequireAuth