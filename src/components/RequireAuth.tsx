import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAppSelector } from "../features/store/hooks"
// import { toast } from "react-toastify"
import { selectUserId } from "../features/store/slices/authSlice"
import { idToRole } from "../features/helpers/idToRole.helper"

type RequireAuthPropType = {
  allowedRoles: string[]
}

const RequireAuth = ({allowedRoles}: RequireAuthPropType) => {
    const location = useLocation()

    const userId = useAppSelector(selectUserId)

    console.log(`RequireAuth: ${userId}`);
    
    if (!userId ){
      // toast.error('Login to continue RA')
    }

    const userRole = idToRole(userId || '') || ''

    const allowAccess = allowedRoles.includes(userRole)

  return (
    allowAccess
    ? <Outlet/>
    : userId
      ? <Navigate to={'/unauthorized'} state={{from: location}} replace/>
      : <Navigate to={'/login'} state={{from: location}} replace/>

  )
}

export default RequireAuth