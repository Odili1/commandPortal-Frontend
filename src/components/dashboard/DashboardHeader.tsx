import { Link} from "react-router-dom"
import {FaBell, FaUser} from 'react-icons/fa6'
// import { IoMdNotificationsOutline } from "react-icons/io"
import logo from "../../assets/images/CommandSchoolLogo.jpg"
// import { useState } from "react"
import SideBarModal from "../modal/SideBarModal"
import { useAppDispatch, useAppSelector } from "../../features/store/hooks"
import { setShowSideBarModal, selectShowSideBarModal } from "../../features/store/slices/uiSlice"

const DashboardHeader = () => {
  // const [showSideBarModal, setShowSideBarModal] = useState<boolean>(false)
  const showMenuModal = useAppSelector(selectShowSideBarModal)

  const dispatch = useAppDispatch()

  // const [newNotification, setNewNotification] = useState<boolean>(false)

  return (
    <>
      <header className="shadow-md bg-backgroundColor fixed w-[100vw] z-10">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-6 mx-4 md:mx-2">
            <div className="flex items-center">
              {/* Hamburger Button */}
              <div id="menu-btn" className="hamburger mr-5 flex flex-col space-y-1 md:hidden" onClick={() => dispatch(setShowSideBarModal())}>
                <span className="hamburger-top h-[3px] w-6 bg-black"></span>
                <span className="hamburger-middle h-[3px] w-6 bg-black"></span>
                <span className="hamburger-buttom h-[3px] w-6 bg-black"></span>
              </div>

              {/* Logo */}
              <Link to={'/st/dashboard'} className="flex items-center mr-2">
                <img src={logo} alt="Logo" className='w-auto h-7 md:h-9 rounded-md md:rounded-xl' />
                <span className='font-bold md:block text-standardBlue text-xs ml-3 md:text-2xl'>
                  Command Children<br className='md:hidden'/> School, Calabar
                </span>
              </Link>
            </div>

            {/* Notification and Profile */}
            <div className="">
              <div className="flex items-center">
                <button className="mr-5 md:mr-10">
                  {/* {newNotification 
                  ? <FaBell className="md:h-9" color="blue" size={'24px'}/>
                  : <IoMdNotificationsOutline className="h-7 md:h-9" size={'36px'}/>} */}
                  <FaBell className="md:h-9" color="blue" size={'24px'}/>
                </button>
                <button>         
                  {!logo ? <FaUser className=""/>
                  : <img src={logo} className='w-auto h-7 md:h-9 rounded-xl'/>}
                </button>
              </div>
            </div>
          </div>

        </div>
      </header>

        {/* Ham Menu - Mobile */}
        {/* {showSideBarModal && (<SideBarModal showSideBar={showSideBarModal} setShowSideBar={setShowSideBarModal}/>)} */}
        {showMenuModal && (<SideBarModal />)}
    </>
  )
}

export default DashboardHeader