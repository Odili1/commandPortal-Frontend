import { FaX } from "react-icons/fa6";
import {
  PasswordFormDataType,
  userDataType,
} from "../../features/helpers/typeGuards.helper";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../Spinner";
import { useLocation, useNavigate } from "react-router-dom";
import { IError } from "../../features/interfaces/userInfo";
import { useChangeUserPasswordMutation } from "../../features/store/api/usersApiSlice";

type ChangePasswordModalProp = {
  userData: userDataType;
  openChangePasswordModal: boolean;
  setOpenChangePasswordModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChangePasswordModal = ({
  userData,
  openChangePasswordModal,
  setOpenChangePasswordModal,
}: ChangePasswordModalProp) => {
  const navigate = useNavigate();
  const location = useLocation()
  const modalRef = useRef<HTMLDivElement>(null);

  // UseState Object for Form Inputs
  const [formData, setFormData] = useState<Partial<PasswordFormDataType>>({
    userId: userData?.userId || '',
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    setFormData({
      userId: userData?.userId,
      newPassword: "",
      confirmPassword: "",
    });
  }, [userData]);

  // Get useSubmit Hook
  const [updatePassword, { isLoading }] = useChangeUserPasswordMutation();

  // Handle Click Outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpenChangePasswordModal(false);
      }
    };

    if (openChangePasswordModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openChangePasswordModal, setOpenChangePasswordModal]);

  // Handle Submit Form
  const handleSubmit = useCallback(async () => {
    try {
        console.log(`Response: ${JSON.stringify(formData)}`);
        if (
            formData.newPassword &&
            formData.newPassword === formData.confirmPassword
        ) {
          console.log(`Response In: ${JSON.stringify(formData)}`);
        const response = await updatePassword(formData).unwrap();
        console.log(`Response: ${response}`);
        
        response && toast.success("Password Update Successful!");
        setOpenChangePasswordModal((prev) => !prev);
      } else if (
        formData.newPassword &&
        formData.newPassword !== formData.confirmPassword
      ) {
        toast.error("Passwords do not match");
        console.log("Passwords do not match");
        // setOpenChangePasswordModal((prev) => !prev);
      }else if (!formData.newPassword || !formData.confirmPassword){
        toast.error('Fill in new password')
      } else {
        console.log("Passwords Update Failed");
        toast.error("Password Update Failed!");
      }
    } catch (error: unknown) {
      console.log(`Edit Profile Catch Error: ${JSON.stringify(error)}`);
      const err = error as IError;

      setOpenChangePasswordModal(false);

      if (err.status !== 500) {
        toast.error("Profile Update Failed");
        navigate("/error", {
          state: {
            from: location,
            errorMsg: ["Ensure Internet connection", "Go back and try again"],
          },
        });
      } else {
        toast.error("Profile Update Failed");
      }
    }
  }, [
    setOpenChangePasswordModal,
    formData,
    updatePassword,
    navigate,
    location
  ]);

  return (
    <div className="fixed top-0 left-0 h-[100%] w-full z-30 bg-black bg-opacity-50 flex justify-center items-center">
      {isLoading ? (
        <Spinner loading={isLoading} />
      ) : (
        <div
          className={`container relative mx-auto w-[95%] px-2 h-[60%] bg-backgroundColor rounded-md md:px-8 py-10 md:w-[50%] md:h-[80%] overflow-y-auto animate-showModal`}
          ref={modalRef}
        >
          <div>
            <h2 className="mb-5 ml-4 font-bold text-2xl md:text-2xl">
              Change Password
            </h2>
            <FaX
              fontSize={"22px"}
              className="absolute right-[9%] top-[8%] cursor-pointer"
              onClick={() => setOpenChangePasswordModal((prev) => !prev)}
            />
          </div>

          <div className="w-[85%] mx-auto text-xl text-fontDarkColor mt-10">
            <form className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-2">
                <label htmlFor="id">UserId:</label>
                <input
                  type="text"
                  value={formData.userId}
                  className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg w-full cursor-not-allowed"
                  disabled
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label htmlFor="firstName">New Password:</label>
                <input
                  type="text"
                  value={formData.newPassword}
                  className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg"
                  onChange={(e) =>
                    setFormData({ ...formData, newPassword: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label htmlFor="firstName">Confirm Password:</label>
                <input
                  type="text"
                  value={formData.confirmPassword}
                  className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>

              {/* Buttons */}
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  className="py-2 px-3 bg-green-700 text-slate-100 rounded-xl hover:bg-green-900 transition-all delay-75 ease-in-out duration-300"
                  onClick={handleSubmit}
                >
                  Save
                </button>
                <button
                  className="py-2 px-3 bg-slate-400 text-fontDarkColor rounded-lg transition-all delay-75 ease-in-out duration-300 hover:bg-slate-500"
                  onClick={() => setOpenChangePasswordModal((prev) => !prev)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangePasswordModal;
