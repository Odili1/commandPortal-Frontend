import { Link } from "react-router-dom";
import { FaBell, FaUser } from "react-icons/fa6";
// import { IoMdNotificationsOutline } from "react-icons/io"
import logo from "../../assets/images/CommandSchoolLogo.jpg";
import { useCallback, useState } from "react";
import SideBarModal from "../modals/SideBarModal";
import { useAppDispatch, useAppSelector } from "../../features/store/hooks";
import {
  setShowSideBarModal,
  selectShowSideBarModal,
} from "../../features/store/slices/uiSlice";
import { useLoadUser } from "../../hooks/useLoadUser";
import { useEffect } from "react";

const DashboardHeader = () => {
  // Hooks
  const showMenuModal = useAppSelector(selectShowSideBarModal);
  const dispatch = useAppDispatch();
  const loadUser = useLoadUser();

  const [userData, setUserData] = useState<{
    lastName?: string;
    avatar?: string;
  } | null>(null);

  const fetchUser = useCallback(async () => {
    const response = await loadUser();

    if (response === null) {
      setUserData(null);
      return;
    }

    setUserData((prevState) => ({ ...prevState, ...response }));
  }, [loadUser]);

  useEffect(() => {
    console.log(`DashBoard fetchUser`);

    fetchUser();
  }, [fetchUser]);

  return (
    <>
      <header className="shadow-md bg-white fixed w-[100vw] z-10">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-6 mx-4 md:mx-2">
            <div className="flex items-center">
              {/* Hamburger Button */}
              <div
                id="menu-btn"
                className="hamburger mr-5 flex flex-col space-y-1 md:hidden"
                onClick={() => dispatch(setShowSideBarModal())}
              >
                <span className="hamburger-top h-[3px] w-6 bg-black"></span>
                <span className="hamburger-middle h-[3px] w-6 bg-black"></span>
                <span className="hamburger-buttom h-[3px] w-6 bg-black"></span>
              </div>

              {/* Logo */}
              <Link to={"/st/dashboard"} className="flex items-center mr-2">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-auto h-9 md:h-9 rounded-md md:rounded-xl"
                />
                <span className="font-bold md:block text-standardBlue text-[13px] ml-3 md:text-2xl">
                  Command Children
                  <br className="md:hidden" /> School, Calabar
                </span>
              </Link>
            </div>

            {/* Notification and Profile */}
            <div className="">
              <div className="flex items-center md:justify-between">
                <p className="hidden text-darkerTrans text-xl font-medium mr-10 md:block">
                  Hi, {userData?.lastName}
                </p>
                <button className="mr-5 md:mr-10">
                  {/* {newNotification 
                  ? <FaBell className="md:h-9" color="blue" size={'24px'}/>
                  : <IoMdNotificationsOutline className="h-7 md:h-9" size={'36px'}/>} */}
                  <FaBell className="md:h-9" color="blue" size={"24px"} />
                </button>
                <button>
                  {!userData?.avatar ? (
                    <div className="flex justify-center items-center h-10 w-10 mx -auto bg-slate-200 rounded-full">
                      <FaUser color="gray" fontSize={"22px"} className="" />
                    </div>
                  ) : (
                    <img
                      src={userData?.avatar}
                      className="h-8 w-8 md:h-10 md:w-10 rounded-full"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Ham Menu - Mobile */}
      {/* {showSideBarModal && (<SideBarModal showSideBar={showSideBarModal} setShowSideBar={setShowSideBarModal}/>)} */}
      {showMenuModal && <SideBarModal />}
    </>
  );
};

export default DashboardHeader;
