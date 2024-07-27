import { useAppSelector } from "../../../features/store/hooks";
import UserProfileDetails from "../../../components/dashboard/UserProfileDetails";
import { selectAdminData } from "../../../features/store/slices/adminSlice";
import { useRef } from "react";
import Spinner from "../../../components/Spinner";
import MainTitleHeader from "../../../components/dashboard/titleHeaders/MainTitleHeader";

// type adminResponseType ={
//     id: number,
//     userId: string,
//     firstName: string,
//     lastName: string,
//     user: {
//         avatar?: string,
//         email?: string,
//         phoneNumber?: string,
//         lastLogin:"2024-07-13T11:01:59.032Z",
//         updatedAt:"2024-07-13T12:01:56.061Z",
//         createdAt:"2024-07-12T13:30:22.918Z"
//     }
// }

const AdminProfile = () => {
  const adminData = useAppSelector(selectAdminData);
  const isLoading = useRef(true);

  console.log(`Avatar: ${adminData?.user?.avatar}`);
  // console.log(`isLoading: ${loading}`);
  if (adminData) {
    isLoading.current = false;
  }

  return (
    <>
      {/* Title Header */}
      <MainTitleHeader pageName="Profile" />
      <div className="container bg- slate-200 min -h-[100vh] w-[90%] md:w-[85%] mx-auto">
        {isLoading.current ? (
          <Spinner loading={isLoading.current} />
        ) : (
          <UserProfileDetails userData={adminData} />
        )}
      </div>
    </>
  );
};

export default AdminProfile;
