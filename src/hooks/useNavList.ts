import { idToRole } from "../features/helpers/idToRole.helper"
import { useAppSelector } from "../features/store/hooks"
import { selectUserId } from "../features/store/slices/authSlice"

type useNavListReturnType = () => {to: string, name: string}[] | undefined

export const useNavList = (): useNavListReturnType => {
    const userId = useAppSelector(selectUserId) || ''

    const role = idToRole(userId)

    // Define Nav Lists for Different Users
    const adminNavList = [
        {to: 'ad/dashboard', name: 'Dashboard'},
        {to: 'ad/profile', name: 'Profile'},
        {to: 'ad/analysis', name: 'Analysis'},
        // {to: 'ad/analysis', name: 'Analysis'},
        // {to: 'ad/analysis', name: 'Analysis'},
        // {to: 'ad/analysis', name: 'Analysis'},
        // {to: 'ad/analysis', name: 'Analysis'},
        // {to: 'ad/analysis', name: 'Analysis'},
        // {to: 'ad/analysis', name: 'Analysis'},
        // {to: 'ad/analysis', name: 'Analysis'},
        // {to: 'ad/analysis', name: 'Analysis'},
        // {to: 'ad/analysis', name: 'Analysis'},
        {to: '/logout', name: 'Logout'}   
    ]

    const teacherNavList = [
        {to: 'th/dashboard', name: 'Dashboard'},
        {to: '/logout', name: 'Logout'},     
    ]

    const studentNavList = [
        {to: 'st/dashboard', name: 'Dashboard'},
        {to: 'st/profile', name: 'Profile'},
        {to: 'st/subjects', name: 'Subjects'},
        {to: 'st/bursary', name: 'Bursary'},
        {to: 'st/results', name: 'Results'},
        {to: 'st/analysis', name: 'Student Analysis'},
        {to: '/logout', name: 'Logout'}   
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


