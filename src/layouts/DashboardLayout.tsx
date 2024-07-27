import { Outlet, useLocation } from "react-router-dom";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Sidebar from "../components/dashboard/Sidebar";
import LogOutModal from "../components/modals/LogOutModal";
import { useAppSelector } from "../features/store/hooks";
import { selectShowLogoutModal } from "../features/store/slices/uiSlice";
import Footer from "../components/dashboard/Footer";
// import { useState } from "react";
// import { useEffect } from "react"
// import { useLoginMutation } from "../features/store/api/authApiSlice"
// import Spinner from "../components/Spinner"

const DashboardLayout = () => {
  const showLogoutModal = useAppSelector(selectShowLogoutModal);
  const location = useLocation();
  const pathName = location.pathname.split("/")[2];
  const pageName = pathName.slice(0, 1).toUpperCase() + pathName.slice(1);
  console.log(`Location: ${pageName}`);
  // const [pageName, setPageName] = useState('')

  return (
    <>
      <div className="">
        <DashboardHeader />
        {/* Global Modal */}
        {showLogoutModal && <LogOutModal />}

        <div className="pt-[80px] md:g rid md:gri d-cols-5 md:flex w-full h -[100vh]">
          <div className="hidden h -[100vh] overflow -y-scroll md:block md:w-[20%] md :relative">
            <Sidebar />
          </div>
          <div className="bg-slate-100 pt-8 pb-5 min-h-[100vh] md:pt-12 md:col -start-2 md:co l-end-6 md:w-[80%] overflow -y-scroll">
            {/* Main */}
            <Outlet/>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
