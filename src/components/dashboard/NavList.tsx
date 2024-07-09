import React from "react"
import { NavLink } from "react-router-dom"
import { useAppDispatch } from "../../features/store/hooks"
import { setShowSideBarModal } from "../../features/store/slices/uiSlice"
import useLogOut from "../../hooks/useLogout"

type NavListProp = {
    nameClass: ({ isActive }: {isActive: boolean}) => string,
    // setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>,
    // showSideBar: boolean
}

const NavList = ({nameClass}: NavListProp): React.JSX.Element => {
    const dispatch = useAppDispatch()

    const logout = useLogOut()

    const navObjects = [
        {to: 'st/dashboard', name: 'Dashboard'},
        {to: 'st/subjects', name: 'Subjects'},
        {to: 'st/bursary', name: 'Bursary'},
        {to: 'st/results', name: 'Results'},
        {to: 'st/analysis', name: 'Student Analysis'},
        {to: '/logout', name: 'Logout'}
    ]

    const handleLogout = () => {
        dispatch(setShowSideBarModal())
        logout()
    }
  return (
    <>
        {navObjects.map((obj, i) => {
            if (obj.to === '/logout'){
                return (
                    <NavLink onClick={handleLogout} className={nameClass} to={'/'} key={i}>{obj.name}</NavLink>
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