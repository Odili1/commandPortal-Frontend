import { Outlet } from "react-router-dom"
import DashboardHeader from "../components/dashboard/DashboardHeader"
import Sidebar from "../components/dashboard/Sidebar"

const DashboardLayout = () => {
  return (
    <>
      <DashboardHeader/>
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