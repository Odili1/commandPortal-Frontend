import { useCallback } from "react";
import { idToRole } from "../features/helpers/idToRole.helper";
import { IError } from "../features/interfaces/userInfo";
import { useGetAdminByIdMutation } from "../features/store/api/adminAPiSlice";
// import { useAppDispatch } from "../features/store/hooks";
// import { setAdminData } from "../features/store/slices/adminSlice";
// import { selectUserId } from "../features/store/slices/authSlice";
import { useGetStudentByIdMutation } from "../features/store/api/studentApiSlice";
// import { setStudentData } from "../features/store/slices/studentSlice";
import { userDataType } from "../features/helpers/typeGuards.helper";


type useLoadUserReturnType = () => Promise<userDataType | null>

export const useLoadUser = (userId: string): useLoadUserReturnType => {
    // const userId = useAppSelector(selectUserId) || ''
    // const dispatch = useAppDispatch()

    const role = idToRole(userId)
    console.log(`useLoadUserHook: user ${userId} - role ${role}`);
    

    // For Admin User
    const [fetchAdmin] = useGetAdminByIdMutation()

    // For Student User
    const [fetchStudent] = useGetStudentByIdMutation()

    const loadUser = useCallback(async () => {
        try {
            // console.log(`Admin Data ${isLoading}`);
            // fetch Admin User
            if (role === 'admin'){
                const response = await fetchAdmin(userId).unwrap()
                console.log(`AdminProfile Response: ${JSON.stringify(response.user?.createdAt)}`);
                // dispatch(setAdminData({...response}))
                
                // Return the avatar and lastName
                // const {lastName, user: {avatar}} = response
                // return  {lastName, avatar}
                return  response
            }
            
            if (role === 'student'){
                console.log(`fetchStudent`);
                const response = await fetchStudent(userId).unwrap()
                console.log(`StudentProfile Response: ${JSON.stringify(response.user?.firstName)}`);
                // dispatch(setStudentData({...response}))
                
                // Return the lastname and avatar
                // const {lastName, user: {avatar}} = response
                // return  {lastName, avatar}
                return  response
            }

            // Fetch Teacher User
            // Fetch Student User
            return null
        } catch (error: unknown) {
            console.log(`useLoadUserHook error: ${JSON.stringify(error)}`);
            const err = error as IError
            if (err.status === 500){
                window.location.href = '/error'
            }

            return null
        }
    }, [role, fetchAdmin, userId, fetchStudent])

    return loadUser
}



