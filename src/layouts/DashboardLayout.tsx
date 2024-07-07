import { Outlet } from "react-router-dom"
import DashboardHeader from "../components/dashboard/DashboardHeader"
import Sidebar from "../components/dashboard/Sidebar"

const DashboardLayout = () => {
  return (
    <>
      <DashboardHeader/>
      <Sidebar/>
      <Outlet/>
    </>
  )
}

export default DashboardLayout