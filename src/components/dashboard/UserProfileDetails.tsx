import { idToRole } from "../../features/helpers/idToRole.helper";
import { userDataType } from "../../features/helpers/typeGuard.helper";
import UserDetails from "./UserDetails";
import { FaEllipsis, FaUser } from "react-icons/fa6";

const UserProfileDetails = ({
  userData,
}: {
  userData: userDataType | null;
}) => {



  return (
    <div className="relative w-[100%] py-14 md:px-16 bg-white rounded-md">
      {userData ?
        <>
          {!userData?.user?.avatar ? (
            <div className="flex justify-center items-center h-40 w-40 mx-auto bg-slate-200 rounded-full mb-5">
              <FaUser color="gray" fontSize={"86px"} className="" />
            </div>
          ) : (
            <img
              src={userData?.user?.avatar}
              className="h-40 w-40 mx-auto rounded-full mb-5"
            />
          )}

            <button className="absolute top-[2%] md:top-[5%] right-[7%] text-darkerTrans bg-sla te-800">
              <FaEllipsis fontSize={'46px'}/>
            </button>

            {/* Update Profile Modal */}
            <div className="absolute">

            </div>

          <div className="Name_and_class px-10">
            <h1 className="text-3xl text-center mb-4 md:mb-4 md:text-4xl ">{`${userData?.lastName} ${userData?.firstName}`}</h1>
            <p className="text-center text-xl">{`${idToRole(userData?.userId || "")
              ?.slice(0, 1)
              .toUpperCase()}${idToRole(userData?.userId || "")?.slice(1)}`}</p>
          </div>
          <div className="mt-6 md:mt-6 block  max-w-[85%] mx-auto overflow-x-auto whitespace-nowrap md:overflow-x-hidden">
            <table className="w-[100%] mx- auto table text-left text-md md:text-xl text-darkerTrans bord er border-spacing-x-5 border-spacing-y-4 border-separate">
              <tbody>
                <UserDetails userData={userData} />
              </tbody>
            </table>
          </div>  
        </> 

        : <div className='text-xl'>
            <p className='text-xl mb-3'>:( </p>
            <p>Error Occured:</p>
            <p>Ensure you connected to the Internet</p>
          </div>
        
      }
    </div>
  );
};

export default UserProfileDetails;
