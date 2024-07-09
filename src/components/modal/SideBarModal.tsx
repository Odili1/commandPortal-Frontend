import NavList from "../dashboard/NavList"
import logo from "../../assets/images/CommandSchoolLogo.jpg"
import { useAppDispatch } from "../../features/store/hooks"
import { setShowSideBarModal } from "../../features/store/slices/uiSlice"


// type SideBarModalProp = {
//     showSideBar: boolean,
//     setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>
// }

const SideBarModal = () => {
    const dispatch = useAppDispatch()

    const nameClass = ({isActive}: {isActive: boolean}): string => {
        return isActive ? 'text-standardBlue text-fontDarkColor py-3 pl-3 mb-5 bg-blue-100 self -center font-medium rounded-md' : 'text-fontDarkColor py-3 pl-3 mb-5 self-c enter font-medium rounded-md'
    }

  return (
    <>
        <div className="absolute top-0 left-0 h-full bg-darkTrans w-full z-20 md:hidden">
          <div id="menu" className="w-[90%] h-full bg-backgroundColor drop-shadow-sm pt-6 px-4">
            <header className="flex items-center">
              {/* Ham Button */}
              <div className="close-menu-btn mr-5 flex flex-col space-y-1" onClick={() => dispatch(setShowSideBarModal())}>
                <span className="close-hamburger-top h-[3px] w-5 bg-black transition-all rotate-45 translate-x-[2px] translate-y-1"></span>
                <span className="close-hamburger-buttom h-[3px] w-5 bg-black transition-all -rotate-45 translate-x-[2px] -translate-y-1"></span>
              </div>

              {/* Logo */}
              <div className="flex items-center ">
                <img src={logo} alt="Logo" className='w-auto h-8 mr-2 rounded-md' />
                <span className='font-bold md:block text-standardBlue text-[14px] ml-2'>
                  Command Children School,<br className=''/> Calabar
                </span>
              </div> 
            </header>

            {/* NavLinks */}
            <div className="flex flex-col px-4 mt-12">
              <p className="font-semibold text-fontDarkColor">MODULES</p>
              <nav className="flex flex-col px-4 mt-6 justify-between text-[16px] font-medium">
                {/* <NavLink to={''} className={nameClass}>Dashboard</NavLink>
                <NavLink to={''} className={nameClass}>Subjects</NavLink>
                <NavLink to={''} className={nameClass}>Bursary</NavLink>
                <NavLink to={''} className={nameClass}>Results</NavLink>
                <NavLink to={''} className={nameClass}>Analytics</NavLink>
                <NavLink to={''} className={nameClass}>Logout</NavLink> */}
                <NavList nameClass={nameClass}/>
              </nav>
            </div>
          </div>
        </div>
    </>
  )
}

export default SideBarModal