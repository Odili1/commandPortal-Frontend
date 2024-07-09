import { Link } from "react-router-dom"
import useLogOut from "../../hooks/useLogout"
import { useAppDispatch } from "../../features/store/hooks"
import { setShowLogoutModal } from "../../features/store/slices/uiSlice"




const LogOutModal = () => {
    const logout = useLogOut()

    const dispatch = useAppDispatch()

    const handleLogout = () => {
        dispatch(setShowLogoutModal())
        logout()
    }

  return (
    <div className="fixed h-[100%] w-full z-30 bg-darkTrans flex justify-center items-center">
        <div className="container mx-auto w-[95%] min-h-[30%] bg-backgroundColor rounded-md px-8 py-10 md:w-[50%] md:h-[40%]">
            <div>
                <h2 className="mb-5 ml-4 font-bold text-md">Log Out</h2>
                <div className="border-y-[1px] bg-slate-200"></div>
                <h2 className="my-6 ml-4 text-center md:text-left text-fontGrayColor">Are you sure you want to log out of the portal?</h2>
                <div className="border-y-[1px] bg-slate-200"></div>
            </div>
            <div className="flex justify-end mt-6">
                <Link to={'/'} onClick={handleLogout} className="px-3 py-3 font-semibold bg-lightBlue border-none hover:bg-standardBlue rounded-md text-white">Logout</Link>
                <button onClick={() => dispatch(setShowLogoutModal())} className="px-3 py-3 ml-2 font-semibold border-none bg-slate-200 hover:bg-slate-300 rounded-md">Cancel</button>
            </div>

        </div>
    </div>
  )
}

export default LogOutModal


