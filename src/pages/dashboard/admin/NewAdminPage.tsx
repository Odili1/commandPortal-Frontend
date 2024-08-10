import { useState } from "react";
import BackButton from "../../../components/BackButton";
import { useCreateAdminMutation } from "../../../features/store/api/adminAPiSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IError } from "../../../features/interfaces/userInfo";
import Spinner from "../../../components/Spinner";


type NewAdminType = {
    firstName: string,
    lastName: string,
    user: {
        email: string,
        phoneNumber: string
        password: string
        confirmPassword?: string
    }
}


const NewAdminPage = () => {
    const [formData, setFormData] = useState<NewAdminType>(
        {
          firstName: "",
          lastName: "",
          user: {
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: ""
          },
        }
    );

    const navigate = useNavigate()

    const [createAdmin, {isLoading}] = useCreateAdminMutation()

    const handleSubmit = (async () => {
        try {
            if (formData.firstName && formData.lastName && formData.user.password && formData.user.password === formData.user.confirmPassword){
                const response = await createAdmin({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    user: {
                        email: formData.user.email,
                        phoneNumber: formData.user.phoneNumber,
                        password: formData.user.password
                    }
                }).unwrap()

                response && navigate('/success', {state: {to: '/admin/all'}})
            }else if (formData && formData.user.password !== formData.user.confirmPassword){
                toast.error('Passwords do not match')
            }else if(!formData.firstName || !formData.lastName){
                toast.error('Fill in All Entries')
            }else if (!formData.user.password || !formData.user.confirmPassword){
                toast.error('Fill in the password and the confirm password field')
            }else{
                toast.error('Failed to create Admin')
            }
        } catch (error: unknown) {
            console.log(`Edit Profile Catch Error: ${JSON.stringify(error)}`);
            const err = error as IError;
      
            if (err.status !== 500) {
              toast.error("Failed to Create Admin");
              navigate("/error", {
                state: {
                  from: location,
                  errorMsg: ["Ensure Internet connection", "Go back and try again"],
                },
              });
            } else {
              toast.error("Failed to Create Admin");
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
    })

  return (
    <>
      <div className="w-[90%] md:w-[85%] mx-auto">
        <div className="contaier flex flex-wrap items -center justify-between gap-x-8 mb -8">
          <div className="w -[50%] flex items-center">
            <div className="h-8  w-2 bg-standardBlue mr-2 md:mr-3 md:h-19"></div>
            <h2 className="text-2xl  text-darkerTrans font-bold md:text-3xl">
              Create New Admin
            </h2>
          </div>
        </div>
        <BackButton />
      </div>
      {
        isLoading ? <Spinner loading={isLoading}/> :
        <div className="container min -h-[100vh] w-[90%] md:w-[80%] mx-auto mt-12">
            <div className="w-[100%] py-8 md:py-16 md:px-10 bg-white rounded-lg">
            <div className="w-[85%] md:w-[90%] mx-auto text-xl text-fontDarkColor">
                <h3 className="text-xl md:text2xl font-bold">Fill in the Form</h3>
                <form className="flex flex-col gap-y-6 mt-10 md:mt-16">
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
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="email">Email:</label>
                    <input
                    type="text"
                    value={formData.user?.email || ""}
                    className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg"
                    onChange={(e) =>
                        setFormData({
                        ...formData,
                        user: {...formData.user, email: e.target.value}
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
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="phoneNumber">Password:</label>
                    <input
                    type="password"
                    value={formData.user?.password || ""}
                    className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg"
                    onChange={(e) =>
                        setFormData({
                        ...formData,
                        user: {
                            ...formData.user,
                            password: e.target.value,
                        },
                        })
                    }
                    />
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="phoneNumber">Confirm Password:</label>
                    <input
                    type="password"
                    value={formData.user?.confirmPassword || ""}
                    className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg"
                    onChange={(e) =>
                        setFormData({
                        ...formData,
                        user: {
                            ...formData.user,
                            confirmPassword: e.target.value,
                        },
                        })
                    }
                    />
                </div>

                <div className="mt-8 flex justify-between">
                    <button
                    onClick={handleSubmit}
                    type="button"
                    className="py-2 px-3 bg-green-700 text-slate-100 rounded-xl hover:bg-green-900 transition-all delay-75 ease-in-out duration-300"
                    >
                    Create
                    </button>
                    {/* <button
                    className="py-2 px-3 bg-slate-400 text-fontDarkColor rounded-lg transition-all delay-75 ease-in-out duration-300 hover:bg-slate-500"
                    onClick={() => setOpenEditProfileModal(false)}
                    >
                    Cancel
                    </button> */}
                </div>
                </form>
            </div>
            </div>
        </div>
      }
    </>
  );
};

export default NewAdminPage;
