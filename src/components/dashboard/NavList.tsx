import React from "react"
import { NavLink } from "react-router-dom"
import { useAppDispatch } from "../../features/store/hooks"
import { setShowLogoutModal, setShowSideBarModal } from "../../features/store/slices/uiSlice"
import { useNavList } from "../../hooks/useNavList"
// import useLogOut from "../../hooks/useLogout"

type NavListProp = {
    nameClass: ({ isActive }: {isActive: boolean}) => string,
    // setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>,
    // showSideBar: boolean
}

const NavList = ({nameClass}: NavListProp): React.JSX.Element => {
    const dispatch = useAppDispatch()
    const navLists = useNavList()

    const navObjects = navLists()

    const logOutStyle = (medium: boolean = false) => medium ? 'text-fontGrayColor text-xl md:border-b-2 md:hover:text-standardBlue md:font-semibold md:cursor-pointer' : 'text-fontDarkColor py-3 pl-3 mb-5 font-medium rounded-md'

    const handleLogout = () => {
        // Close the SideBar Modal
        dispatch(setShowSideBarModal())
        // Open the LogOut Modal
        dispatch(setShowLogoutModal())
    }

  return (
    <>
        {navObjects?.map((obj, i) => {
            if (obj.to === '/logout'){
                return (
                    <div onClick={handleLogout} className={`${logOutStyle()} md:${logOutStyle(true)}`} key={i}>{obj.name}</div>
                )
            }

            return (
                <NavLink onClick={() => dispatch(setShowSideBarModal())} className={nameClass} key={i} to={obj.to}>{obj.name}</NavLink>
            )
        })}
    </>
  )
}

export default NavList