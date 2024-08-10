import { useCallback } from "react";
import { UpdateProfileFormDataType, PasswordFormDataType } from "../features/helpers/typeGuards.helper";
import { useUpdateAdminMutation } from "../features/store/api/adminAPiSlice";
import { useAppDispatch, useAppSelector } from "../features/store/hooks";
import { IError } from "../features/interfaces/userInfo";
import { idToRole } from "../features/helpers/idToRole.helper";
// import { setAdminData } from "../features/store/slices/adminSlice";
import { useUpdateStudentMutation } from "../features/store/api/studentApiSlice";
import { selectUserId } from "../features/store/slices/authSlice";
import { setLoggedInUserData } from "../features/store/slices/userSlice";

const useSubmitForm = (userFormData: UpdateProfileFormDataType | PasswordFormDataType) => {
  console.log(`useSubmitForm => UserFormData ${JSON.stringify(userFormData)}`);
  // Logged In User ID
  const loggedInUserId = useAppSelector(selectUserId)
    
  // HOOKS
  const dispatch = useAppDispatch();

  // HOOK MUTATIONS
  const [updateAdmin, { isLoading: userLoading }] = useUpdateAdminMutation();
  const [updateStudent, {isLoading: studentLoading}] = useUpdateStudentMutation()

  const submitForm = useCallback(async () => {
    try {
      if (userFormData) {
        if (idToRole(userFormData.userId) === "admin") {
          // loadingRef.current = userLoading
          console.log(`Admin Update Response Block`);
          
          const response = await updateAdmin({
            id: userFormData.userId,
            credentials: userFormData,
          }).unwrap();
          
          console.log(`Admin Update Response: ${JSON.stringify(response)}`);

          // userFormData.userId === loggedInUserId &&  dispatch(setAdminData({ ...response }));
          userFormData.userId === loggedInUserId &&  dispatch(setLoggedInUserData({ ...response }));
        }else if (idToRole(userFormData.userId) === "student") {
          console.log(`Student Update Response Block`);

          const response = await updateStudent({
            id: userFormData.userId,
            credentials: userFormData,
          }).unwrap();

          console.log(`Student Update Response: ${JSON.stringify(response)}`);
        }
      }
    } catch (error: unknown) {
      console.log(`useSubmitFormHook error: ${JSON.stringify(error)}`);
      const err = error as IError;
      if (err.status === 500) {
        window.location.href = "/error";
      }
    }
  }, [dispatch, updateAdmin, userFormData, updateStudent, loggedInUserId]);

  const isLoading = userLoading || studentLoading

  return { submitForm, isLoading};
};

export default useSubmitForm;
