import { Outlet, useLocation } from "react-router-dom"
import DashboardHeader from "../components/dashboard/DashboardHeader"
import Sidebar from "../components/dashboard/Sidebar"
import LogOutModal from "../components/modal/LogOutModal"
import { useAppSelector } from "../features/store/hooks"
import { selectShowLogoutModal } from "../features/store/slices/uiSlice"
// import { useEffect } from "react"
// import { useLoginMutation } from "../features/store/api/authApiSlice"
// import Spinner from "../components/Spinner"

const DashboardLayout = () => {
  const showLogoutModal = useAppSelector(selectShowLogoutModal)
  const location = useLocation()
  const pathName = location.pathname.split('/')[2]
  const pageName = pathName.slice(0, 1).toUpperCase() + pathName.slice(1)
  console.log(`Location: ${pageName}`);
  

  return (
    <>
      {/* <div className="overflow-y-hidden h-[100vh]"> */}
        <DashboardHeader/>
        {showLogoutModal && <LogOutModal/>}
        <div className="pt-[80px] md:g rid md:gri d-cols-5 md:flex w-full h- [100vh]">
          <div className="hidden bg-backgroundColor h -[100vh] overflow -y-scroll md:block md:w-[20%] md:relative">
            <Sidebar/>
          </div>
          <div className="bg-slate-50 py-14 min-h-[100vh] md:col -start-2 md:co l-end-6 md:w-[80%] overflow -y-scroll">
            <div className="contaier flex items-center w-[90%] md:w-[85%] mx-auto">
              <div className="h-11 w-2 bg-standardBlue mr-3"></div>
              <h2 className="text-3xl text-darkerTrans font-bold">{pageName}</h2>
            </div>
            <Outlet/>
          </div>
        </div>
      {/* </div> */}
    </>
  )
}

export default DashboardLayout