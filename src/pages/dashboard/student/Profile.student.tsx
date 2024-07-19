import { useRef } from "react";
import UserProfileDetails from "../../../components/dashboard/UserProfileDetails";
import { useAppSelector } from "../../../features/store/hooks";
import { selectStudentData } from "../../../features/store/slices/studentSlice";
import Spinner from "../../../components/Spinner";



const StudentProfile = () => {
    const studentData = useAppSelector(selectStudentData)
    const isLoading = useRef(true)
    
    console.log(`Avatar: ${studentData?.user?.avatar}`);
    
    if (studentData){
        isLoading.current = false
    }

    return (
        <div className="container bg- slate-200 min -h-[100vh] w-[90%] md:w-[85%] mx-auto">
            {/* Details */}
            {isLoading.current ? <Spinner loading={isLoading.current}/> : <UserProfileDetails userData={studentData}/>}
        </div>
    )
}


export default StudentProfile