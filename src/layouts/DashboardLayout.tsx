import { Outlet } from "react-router-dom"
import DashboardHeader from "../components/dashboard/DashboardHeader"
import Sidebar from "../components/dashboard/Sidebar"
import LogOutModal from "../components/modal/LogOutModal"
import { useAppSelector } from "../features/store/hooks"
import { selectShowLogoutModal } from "../features/store/slices/uiSlice"

const DashboardLayout = () => {
  const showLogoutModal = useAppSelector(selectShowLogoutModal)
  return (
    <>
      <DashboardHeader/>
      {showLogoutModal && <LogOutModal/>}
      <div className="pt-[86px] md:grid md:grid-cols-5">
        <div className="hidden md:block">
          <Sidebar/>
        </div>
        <div className="md:col-start-2 md:col-end-6">
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout