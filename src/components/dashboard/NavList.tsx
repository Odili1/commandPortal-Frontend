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

    const logOutStyle = (medium: boolean = false) => medium ? 'text-xl md:border-b-2 md:hover:text-red-500 md:font-semibold md:cursor-pointer flex gap-x-2 items-center' : 'text-xl text-red-800 py-3 pl-3 mb-5 font-medium rounded-md flex gap-x-2 items-center'

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
                    <div onClick={handleLogout} className={`${logOutStyle()} md:${logOutStyle(true)}`} key={i}>
                        <obj.icon
                            fontSize={"20px"}
                            className="hidden h-5 w-9 rounded-lg md:block"
                        />
                        {obj.name}
                    </div>
                )
            }

            return (
                <NavLink onClick={() => dispatch(setShowSideBarModal())}  key={i} to={obj.to} className={nameClass}>
                    <obj.icon
                        fontSize={"20px"}
                        className="h-5 w-9 hidden rounded-lg md:block"
                    />
                    {obj.name}
                </NavLink>
            )
        })}
    </>
  )
}

export default NavList