import { IconType } from "react-icons";
import { idToRole } from "../features/helpers/idToRole.helper"
import { useAppSelector } from "../features/store/hooks"
import { selectUserId } from "../features/store/slices/authSlice"
import {FaAddressBook, FaAddressCard, FaBookOpen, FaChartSimple, FaFileLines, FaLandmark, FaRightFromBracket} from "react-icons/fa6";

type useNavListReturnType = () => {to: string, name: string, icon: IconType}[] | undefined

export const useNavList = (): useNavListReturnType => {
    const userId = useAppSelector(selectUserId) || ''

    const role = idToRole(userId)

    // Define Nav Lists for Different Users
    const adminNavList = [
        {to: 'ad/dashboard', "icon": FaAddressCard, name: 'Dashboard'},
        {to: 'ad/profile', "icon": FaAddressBook, name: 'Profile'},
        {to: 'ad/analysis', "icon": FaChartSimple, name: 'Analysis'},
        {to: '/logout', "icon": FaRightFromBracket, name: 'Logout'}   
    ]
    
    const teacherNavList = [
        {to: 'th/dashboard', "icon": FaAddressCard, name: 'Dashboard'},
        {to: 'th/profile', "icon": FaAddressBook, name: 'Profile'},
        {to: 'th/analysis', "icon": FaChartSimple, name: 'Analysis'},
        {to: '/logout', "icon": FaRightFromBracket, name: 'Logout'},     
    ]

    const studentNavList = [
        {to: 'st/dashboard', "icon": FaAddressCard, name: 'Dashboard'},
        {to: 'st/profile', "icon": FaAddressBook, name: 'Profile'},
        {to: 'st/subjects', "icon": FaBookOpen, name: 'Subjects'},
        {to: 'st/bursary', "icon": FaLandmark, name: 'Bursary'},
        {to: 'st/results', "icon": FaFileLines, name: 'Results'},
        {to: 'st/analysis', "icon": FaChartSimple, name: 'Student Analysis'},
        {to: '/logout', "icon": FaRightFromBracket, name: 'Logout'}   
    ]

    const navList = () => {
        if (role === 'admin'){
            return adminNavList
        }else if (role === 'teacher'){
            return teacherNavList
        }else if (role === 'student'){
            return studentNavList
        }else {
            return undefined
        }
    }

    return navList
}


