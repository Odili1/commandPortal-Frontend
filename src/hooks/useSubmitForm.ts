import { useCallback } from "react";
import { UpdateProfileFormDataType, PasswordFormDataType } from "../features/helpers/typeGuards.helper";
import { useUpdateAdminMutation } from "../features/store/api/adminAPiSlice";
import { useAppDispatch } from "../features/store/hooks";
import { IError } from "../features/interfaces/userInfo";
import { idToRole } from "../features/helpers/idToRole.helper";
import { setAdminData } from "../features/store/slices/adminSlice";

const useSubmitForm = (userFormData: UpdateProfileFormDataType | PasswordFormDataType) => {
    console.log(`useSubmitForm => UserFormData ${userFormData}`);
    
  // HOOKS
  const dispatch = useAppDispatch();

  // HOOK MUTATIONS
  const [updateUser, { isLoading, isSuccess, isError }] =
    useUpdateAdminMutation();

  const submitForm = useCallback(async () => {
    try {
      if (userFormData) {
        if (idToRole(userFormData.userId) === "admin") {
          const response = await updateUser({
            id: userFormData.userId,
            credentials: userFormData,
          }).unwrap();
          console.log(`Admin Update Response: ${JSON.stringify(response)}`);
          dispatch(setAdminData({ ...response }));
        }
      }
    } catch (error: unknown) {
      console.log(`useSubmitFormHook error: ${JSON.stringify(error)}`);
      const err = error as IError;
      if (err.status === 500) {
        window.location.href = "/error";
      }
    }
  }, [dispatch, updateUser, userFormData]);

  return { submitForm, isLoading, isSuccess, isError };
};

export default useSubmitForm;
