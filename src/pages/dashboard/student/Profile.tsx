import UserProfileDetails from "../../../components/dashboard/UserProfileDetails";
import { useAppSelector } from "../../../features/store/hooks";
import { selectStudentData } from "../../../features/store/slices/studentSlice";



const StudentProfile = () => {
    const studentData = useAppSelector(selectStudentData)
    
    console.log(`Avatar: ${studentData?.user?.avatar}`);
    

    return (
        <div className="container bg- slate-200 min -h-[100vh] w-[90%] md:w-[85%] mx-auto">
            <>
                {/* Details */}
                <UserProfileDetails userData={studentData}/>

            </>
        </div>
    )
}


export default StudentProfile