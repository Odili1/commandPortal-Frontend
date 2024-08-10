import { useCallback, useEffect, useRef, useState } from "react";
import { userDataType } from "../../features/helpers/typeGuards.helper"
import Spinner from "../Spinner"
import { useDeleteUserMutation } from "../../features/store/api/usersApiSlice";
import { useNavigate } from "react-router-dom";
import { IError } from "../../features/interfaces/userInfo";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { selectUserId } from "../../features/store/slices/authSlice";
import { idToRole } from "../../features/helpers/idToRole.helper";

type DeleteUserModalType={
  userData: userDataType,
  setOpenDeleteUserModal: React.Dispatch<React.SetStateAction<boolean>>;
  openDeleteUserModal: boolean
}

const DeleteUserModal = ({userData, setOpenDeleteUserModal, openDeleteUserModal}: DeleteUserModalType) => {
  const adminId = useSelector(selectUserId)
  const roleOfUserDeleted = idToRole(userData?.userId || '')

  const [adminInput, setAdminInput] = useState<string>('')
  const modalRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  
  const [deleteUser, {isLoading}] = useDeleteUserMutation()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpenDeleteUserModal(false)
      }
    }
    if (openDeleteUserModal){
        document.addEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [openDeleteUserModal, setOpenDeleteUserModal])


  const handleDeleteUser = useCallback(async () => {
    try {
      if (adminId !== adminInput){
        toast.error(`Incorrect ID. Please Input your correct ID`)
      }else{
        await deleteUser({id: userData?.userId || ''}).unwrap()

        setOpenDeleteUserModal(false)
        roleOfUserDeleted === 'admin' ? navigate('/admin/all') :
          roleOfUserDeleted === 'teacher' ? navigate('/teacher/all') :
            roleOfUserDeleted === 'student' ? navigate('/student/all') : navigate('/user/all')
        window.location.reload()
        toast.success(`User ${userData?.userId} have been deleted. Refresh Page`)
      }
    } catch (error: unknown) {
      console.log(`Delete User Error: ${JSON.stringify(error)}`);
      const err = error as IError;

      setOpenDeleteUserModal(false);

      if (err.status !== 500) {
        toast.error("Delete Operation Failed");
        navigate("/error", {
          state: {
            from: location,
            errorMsg: ["Ensure Internet connection", "Go back and try again"],
          },
        });
      } else {
        toast.error("Delete Operation Failed");
        navigate("/error", {
          state: {
            from: location,
            errorMsg: [
              "Error occured while trying to delete",
              "Go back and try again",
            ],
          },
        });
      }
    }
  }, [deleteUser, navigate, setOpenDeleteUserModal, userData, adminInput, adminId, roleOfUserDeleted])

  return (
    <>
      {
        isLoading ? <Spinner loading={isLoading}/> :
        <div className={`fixed top-0 left-0 min-h-[100%] w-full z-30 bg-black bg-opacity-50 flex justify-center items-center`}>
          <div className={`container mx-auto w-[95%] min-h-[30%] bg-backgroundColor rounded-md px-8 py-10 md:w-[50%] md:h-[40%] ${openDeleteUserModal ? 'animate-showModal' : 'animate-hideModal'}`} ref={modalRef}>
            <div>
                <h2 className="mb-5 ml-4 font-bold text-lg">Delete User</h2>
                <div className="border-y-[1px] bg-slate-200"></div>
                <h2 className="my-6 ml-4 text-center md:text-left text-fontGrayColor">Confirm to delete this User: <span className="font-bold">{userData?.firstName} {userData?.lastName}</span> with ID: <span className="font-bold">{userData?.userId}.</span></h2>
                <div className="border-y-[1px] bg-slate-200"></div>
            </div>
            <div className="flex flex-col gap-y-2 ml-4 mt-5 text-fontGrayColor">
              <label htmlFor="id">Type in Admin ID</label>
              <input
                    type="text"
                    value={adminInput}
                    className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg w-full"
                    onChange={(e) => setAdminInput(e.target.value)}
                  />
            </div>
            <div className="flex justify-end mt-6">
                <button onClick={handleDeleteUser} className="px-3 py-3 font-semibold bg-red-600 border-none hover:bg-red-800 rounded-md text-white">Delete</button>
                <button onClick={() => setOpenDeleteUserModal(false)} className="px-3 py-3 ml-2 font-semibold border-none bg-slate-200 hover:bg-slate-300 rounded-md">Cancel</button>
            </div>
          </div>
      </div>
      }
    </>
  )
}

export default DeleteUserModal