import { FaX } from "react-icons/fa6";
import {
  CheckRole,
  UpdateProfileFormDataType,
  userDataType,
} from "../../features/helpers/typeGuards.helper";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { idToRole } from "../../features/helpers/idToRole.helper";
import useSubmitForm from "../../hooks/useSubmitForm";
import Spinner from "../Spinner";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IError } from "../../features/interfaces/userInfo";

type EditProfileModalProp = {
  userData: userDataType;
  openEditProfileModal: boolean;
  setOpenEditProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditProfileModal = ({
  userData,
  setOpenEditProfileModal,
  openEditProfileModal,
}: EditProfileModalProp) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // UseState Object for Form Inputs
  const [formData, setFormData] = useState<Partial<UpdateProfileFormDataType>>(
    {
      userId: "",
      firstName: "",
      lastName: "",
      gender: "",
      formClass: "",
      middleName: "",
      dateOfBirth: "",
      address: "",
      stateOfOrigin: "",
      user: {
        email: "",
        phoneNumber: "",
      },
    }
  );
  useEffect(() => {
    // if (userData){
    if (CheckRole.isAdmin(userData)) {
      setFormData({
        userId: userData.userId || '',
        firstName: userData.firstName || '',
        lastName: userData.lastName || '',
        user: {
          email: userData.user.email || '',
          phoneNumber: userData.user.phoneNumber || '',
        },
      });
    } else if (CheckRole.isStudent(userData)) {
      setFormData({
        userId: userData.userId || '',
        firstName: userData.firstName || '',
        middleName: userData.middleName || '',
        lastName: userData.lastName || '',
        gender: userData.gender || '',
        dateOfBirth: userData.dateOfBirth || '',
        address: userData.address || '',
        stateOfOrigin: userData.stateOfOrigin || '',
        user: {
          email: userData.user.email || '',
          phoneNumber: userData.user.phoneNumber || '',
        },
      });
    } else if (CheckRole.isTeacher(userData)) {
      setFormData({
        userId: userData.userId || '',
        firstName: userData.firstName || '',
        lastName: userData.lastName || '',
        gender: userData.gender || '',
        formClass: userData.formClass || '',
        user: {
          email: userData.user.email || '',
          phoneNumber: userData.user.phoneNumber || '',
        },
      });
    } else {
      setFormData({
        userId: "",
        firstName: "",
        lastName: "",
        gender: "",
        formClass: "",
        middleName: "",
        dateOfBirth: "",
        address: "",
        stateOfOrigin: "",
        user: {
          email: "",
          phoneNumber: "",
        },
      });
    }
    // }
  }, [userData]);

  // HOOKS
  const navigate = useNavigate();
  const location = useLocation()

  // Get useSubmit Hook
  const { submitForm, isLoading } = useSubmitForm(
    formData as UpdateProfileFormDataType
  );

  // Check user Role
  const role = userData ? idToRole(userData.userId) : null;

  // Handle Click Outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpenEditProfileModal(false);
      }
    };

    if (openEditProfileModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openEditProfileModal, setOpenEditProfileModal]);

  console.log(`Edit Profile`);
  const handleSubmit = useCallback(async () => {
    try {
      await submitForm();

      setOpenEditProfileModal(false);
      toast.success("Profile Updated");
    } catch (error: unknown) {
      console.log(`Edit Profile Catch Error: ${JSON.stringify(error)}`);
      const err = error as IError;

      setOpenEditProfileModal(false);

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
        navigate("/error", {
          state: {
            from: location,
            errorMsg: [
              "Error occured while trying to update",
              "Go back and try again",
            ],
          },
        });
      }
    }
  }, [navigate, submitForm, setOpenEditProfileModal, location]);

  console.log(`Edit Profile isLoading: ${isLoading}`);
  console.log(`Edit Profile data: ${JSON.stringify(formData)}`);

  return (
    <>
      {
        <div className="fixed top-0 left-0 h-[100%] w-full z-30 bg-black bg-opacity-50 flex justify-center items-center">
          {isLoading ? (
            <Spinner loading={isLoading} />
          ) : (
            <div
              className={`container relative mx-auto w-[95%] px-2 h-[80%] bg-backgroundColor rounded-md md:px-8 py-10 md:w-[50%] md:h-[90%] overflow-y-auto animate-showModal`}
              ref={modalRef}
            >
              <div>
                <h2 className="mb-5 ml-4 font-bold text-2xl md:text-2xl">
                  Edit Profile
                </h2>
                <FaX
                  fontSize={"22px"}
                  className="absolute right-[9%] top-[6%] cursor-pointer"
                  onClick={() => setOpenEditProfileModal(false)}
                />
              </div>
              <div className="w-[85%] mx-auto text-xl text-fontDarkColor mt-10">
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
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
                    <label htmlFor="firstName">First Name:</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg"
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                  </div>
                  <div
                    className={`${
                      role === "student" ? "flex" : "hidden"
                    } flex-col gap-y-2`}
                  >
                    <label htmlFor="middleName">Middle Name:</label>
                    <input
                      type="text"
                      value={formData.middleName}
                      className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg"
                      onChange={(e) =>
                        setFormData({ ...formData, middleName: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg"
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                  </div>
                  <div
                    className={`${
                      role === "student" ? "flex" : "hidden"
                    } flex-col gap-y-2`}
                  >
                    <label htmlFor="age">Age</label>
                    <input
                      type="text"
                      value={CheckRole.isStudent(userData) ? userData.age : ""}
                      className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg"
                      disabled
                    />
                  </div>
                  <div
                    className={`${
                      role === "student" ? "flex" : "hidden"
                    } flex-col gap-y-2`}
                  >
                    <label htmlFor="lastName">Gender</label>
                    <input
                      type="text"
                      value={formData.gender || ""}
                      className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg"
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                    />
                  </div>
                  <div
                    className={`${
                      role === "student" ? "flex" : "hidden"
                    } flex-col gap-y-2`}
                  >
                    <label htmlFor="lastName">Date of Birth</label>
                    <input
                      type="date"
                      value={formData.dateOfBirth || ""}
                      className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dateOfBirth: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div
                    className={`${
                      role === "student" ? "flex" : "hidden"
                    } flex-col gap-y-2`}
                  >
                    <label htmlFor="lastName">State of Origin</label>
                    <input
                      type="text"
                      value={formData.stateOfOrigin || ""}
                      className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          stateOfOrigin: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div
                    className={`${
                      role === "student" ? "flex" : "hidden"
                    } flex-col gap-y-2`}
                  >
                    <label htmlFor="lastName">Address</label>
                    <input
                      type="text"
                      value={formData.address || ""}
                      className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg"
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                    />
                  </div>
                  <div
                    className={`${
                      role === "student" ? "flex" : "hidden"
                    } flex-col gap-y-2`}
                  >
                    <label htmlFor="lastName">Form Class</label>
                    <input
                      type="text"
                      value={formData.formClass || ""}
                      className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg"
                      onChange={(e) =>
                        setFormData({ ...formData, formClass: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="text"
                      value={formData.user?.email || ""}
                      className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          user: { ...formData.user, email: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                      type="text"
                      value={formData.user?.phoneNumber || ""}
                      className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          user: {
                            ...formData.user,
                            phoneNumber: e.target.value,
                          },
                        })
                      }
                    />
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button
                      type="submit"
                      className="py-2 px-3 bg-green-700 text-slate-100 rounded-xl hover:bg-green-900 transition-all delay-75 ease-in-out duration-300"
                    >
                      Save
                    </button>
                    <button
                      className="py-2 px-3 bg-slate-400 text-fontDarkColor rounded-lg transition-all delay-75 ease-in-out duration-300 hover:bg-slate-500"
                      onClick={() => setOpenEditProfileModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      }
    </>
  );
};

export default EditProfileModal;
