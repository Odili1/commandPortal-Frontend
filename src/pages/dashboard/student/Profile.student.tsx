import { useRef } from "react";
import UserProfileDetails from "../../../components/dashboard/UserProfileDetails";
import { useAppSelector } from "../../../features/store/hooks";
import Spinner from "../../../components/Spinner";
import MainTitleHeader from "../../../components/dashboard/titleHeaders/MainTitleHeader";
import { selectloggedInUserData } from "../../../features/store/slices/userSlice";

const StudentProfile = () => {
  const studentData = useAppSelector(selectloggedInUserData);
  const isLoading = useRef(true);

  console.log(`Avatar: ${studentData?.user?.avatar}`);

  if (studentData) {
    isLoading.current = false;
  }

  return (
    <>
      {/* Title Header */}
      <MainTitleHeader pageName="Profile" />
      <div className="container bg- slate-200 min -h-[100vh] w-[90%] md:w-[85%] mx-auto">
        {/* Details */}
        {isLoading.current ? (
          <Spinner loading={isLoading.current} />
        ) : (
          <UserProfileDetails userData={studentData} />
        )}
      </div>
    </>
  );
};

export default StudentProfile;
