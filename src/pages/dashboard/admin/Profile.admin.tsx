import { useAppSelector } from "../../../features/store/hooks"
import UserProfileDetails from '../../../components/dashboard/UserProfileDetails'
import { selectAdminData } from '../../../features/store/slices/adminSlice'
import { useRef } from "react"
import Spinner from "../../../components/Spinner"


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
    // const [adminData, setAdminData] = useState<adminResponseType | null>(null)
    // const userId = useAppSelector(selectUserId) || ''
    const adminData = useAppSelector(selectAdminData)
    const isLoading = useRef(true)
    
    console.log(`Avatar: ${adminData?.user?.avatar}`);
    console.log(`isLoading: ${isLoading.current}`);
    if (adminData){
        isLoading.current = false
    }

    return (
        <div className="container bg- slate-200 min -h-[100vh] w-[90%] md:w-[85%] mx-auto">
            {isLoading.current ? <Spinner loading={isLoading.current}/> : <UserProfileDetails userData={adminData}/>}
            <>
                {/* Details */}
                {/* <div className='text-xl'>
                        <p className='text-xl mb-3'>:( </p>
                        <p>Error Occured:</p>
                        <p>Ensure you connected to the Internet</p>
                </div> */}
            </>
        </div>
    )
}



export default AdminProfile

