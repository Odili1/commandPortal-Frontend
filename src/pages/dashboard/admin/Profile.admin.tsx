// import { useEffect, useState } from "react"
import logo from '../../../assets/images/CommandSchoolLogo.jpg'
import { useAppSelector } from "../../../features/store/hooks"
import { selectUserId } from "../../../features/store/slices/authSlice"
import { useGetAdminByIdMutation } from "../../../features/store/api/adminAPiSlice"
import Spinner from '../../../components/Spinner'
import { useEffect, useState } from 'react'

type adminResponseType ={
    id: number,
    userId: string,
    firstName?: string,
    lastName?: string,
    user: {
        avatar?: string,
        email?: string,
        phoneNumber?: string,
        lastLogin:"2024-07-13T11:01:59.032Z",
        updatedAt:"2024-07-13T12:01:56.061Z",
        createdAt:"2024-07-12T13:30:22.918Z"
    }
}

const AdminProfile = () => {
    const [adminData, setAdminData] = useState<adminResponseType | null>(null)
    const userId = useAppSelector(selectUserId)

    
    const [fetchAdmin, {isLoading, isSuccess}] = useGetAdminByIdMutation()

    // let repsonse: any
    console.log(`Admin Data ${isLoading}`);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetchAdmin(userId).unwrap()

                console.log(`AdminProfile Response: ${JSON.stringify(response)}`);
                setAdminData(response)
            } catch (error) {
                console.log(`AdminProfile error: ${JSON.stringify(error)}`);
                
            }
        }

        fetchData()
    }, [fetchAdmin, userId])
    
    console.log(`Avatar: ${adminData?.user?.avatar}`);
    

    return (
        <div className="container h-[100%] w-[90%] md:w-[85%] mx-auto">
            {isLoading 
                ? <Spinner loading={isLoading}/> 
                : isSuccess 
                    ? <>
                        {/* <h2 className="text-3xl text-darkerTrans font-bold">Profile</h2> */}

                        <div className="w-[100%]  py-16 md:px-16 bg-white mt-10 rounded-md">
                        <img src={adminData?.user?.avatar ? adminData?.user?.avatar : logo} alt="" className="h-40 w-40 mx-auto rounded-full mb-10"/>

                        <div className="Name_and_class px-10">
                            <h1 className="text-3xl text-center mb-4 text-black">EZEDIGWE ODILICHUKWU Gerald</h1>
                            <p className="text-center text-xl">JSS3</p>
                        </div>

                        {/* Details */}
                        <div className="mt-8 flex flex-col gap-y-4 max-w-[90%] mx-auto overflow-x-scroll md:overflow-hidden">
                            <div className="flex">
                                <p className="text-lg text-darkTrans font-semibold">Name:</p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 
                                <p className="text-lg text-darkerTrans font-medium">Ezedigwe Odilichukwu Gerald</p>
                            </div>
                            <div className="flex">
                                <p className="text-lg text-darkTrans font-semibold">Gender:</p>&emsp;&emsp;&emsp;&emsp;&emsp;
                                <p className="text-lg">Male</p>
                            </div>
                            <div className="flex">
                                <p className="text-lg text-darkTrans font-semibold">Date of Birth:</p>&emsp;&emsp;
                                <p>Male</p>
                            </div>
                            <div className="flex">
                                <p className="text-lg text-darkTrans font-semibold">Country:</p>&emsp;&emsp;&emsp;&emsp;
                                <p>Male</p>
                            </div>
                            <div className="flex">
                                <p className="text-lg text-darkTrans font-semibold">State of Origin:</p>&emsp;
                                <p>Male</p>
                            </div>
                            <div className="flex">
                                <p className="text-lg text-darkTrans font-semibold">LGA of Origin:</p>&emsp;
                                <p>Male</p>
                            </div>
                            <div className="flex">
                                <p className="text-lg text-darkTrans font-semibold">Home Town</p>&emsp;
                                <p>Male</p>
                            </div>
                            <div className="flex">
                                <p className="text-lg text-darkTrans font-semibold">Email:</p>&emsp;&emsp;&emsp;&emsp;&emsp;
                                <p>Male</p>
                            </div>
                            <div className="flex">
                                <p className="text-lg text-darkTrans font-semibold">Phone Number:</p>
                                <p>Male</p>
                            </div>
                            <div className="flex">
                                <p className="text-lg text-darkTrans font-semibold">Religion:</p>
                                <p>Male</p>
                            </div>
                        </div>
                        </div>
                    </>
                    : <div>
                        <p className='text-xl mb-2'>:( </p>
                        <p>Error Occured.</p>
                        <p>Ensure you connected to the Internet</p>
                    </div>
            }
        </div>
      )
}



export default AdminProfile

