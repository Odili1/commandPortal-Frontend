import { useCallback } from "react"
import { FormDataType } from "../features/helpers/typeGuard.helper"
import { useUpdateAdminMutation } from "../features/store/api/adminAPiSlice"
import { useAppDispatch } from "../features/store/hooks"
import { IError } from "../features/interfaces/userInfo"
import { idToRole } from "../features/helpers/idToRole.helper"
import { setAdminData } from "../features/store/slices/adminSlice"


const useSubmitForm = (userFormData: FormDataType)  => {
    // const formData = useMemo(() => {
    //     // Admin
    //     if (idToRole(userFormData.userId)  === 'admin'){
    //         return {
    //             userId: userFormData.userId,
    //             firstName: userFormData.firstName,
    //             lastName: userFormData.lastName,
    //             email: userFormData.email,
    //             phoneNumber: userFormData.phoneNumber
    //         }
    //     }
    
    //     // Teacher
    //     if (idToRole(userFormData.userId)  === 'admin'){
    //         return {
    //             userId: userFormData.userId,
    //             firstName: userFormData.firstName,
    //             lastName: userFormData.lastName,
    //             email: userFormData.email,
    //             phoneNumber: userFormData.phoneNumber,
    //             formClass: userFormData.formClass
    //         }
    //     }
    
    //     // Student
    //     if (idToRole(userFormData.userId)  === 'admin'){
    //         return {
    //             userId: userFormData.userId,
    //             firstName: userFormData.firstName,
    //             middleName: userFormData.middleName,
    //             lastName: userFormData.lastName,
    //             gender: userFormData.gender,
    //             dateOfBirth: userFormData.dateOfBirth,
    //             address: userFormData.address,
    //             stateOfOrigin: userFormData.stateOfOrigin,
    //             email: userFormData.email,
    //             phoneNumber: userFormData.phoneNumber
    //         }
    //     }

    //     return {}
    // }, [userFormData])


    // Hooks
    const dispatch = useAppDispatch()

    // HOOK MUTATIONS
    const [updateUser, {isLoading, isSuccess, isError}] = useUpdateAdminMutation()

    const submitForm = useCallback(async () => {
        try {
            if (userFormData){
                if (idToRole(userFormData.userId)  === 'admin'){
                    const response = await updateUser({id: userFormData.userId, credentials: userFormData}).unwrap()
                    console.log(`Admin Update Response: ${JSON.stringify(response)}`);
                    dispatch(setAdminData({...response}))
                }
            }
        } catch (error: unknown) {
            console.log(`useSubmitFormHook error: ${JSON.stringify(error)}`);
            const err = error as IError
            if (err.status === 500){
                window.location.href = '/error'
            }
        }
    }, [dispatch, updateUser, userFormData])

    return {submitForm, isLoading, isSuccess, isError}
}


export default useSubmitForm
