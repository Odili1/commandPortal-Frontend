import { idToRole } from "../../features/helpers/idToRole.helper";
import { userDataType } from "../../features/helpers/typeGuard.helper";
import UserDetails from "./UserDetails";
import { FaEllipsis, FaUser } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import ProfileOptionsModal from "../modals/ProfileOptionsModal";
import EditProfileModal from "../modals/EditProfileModal";
import ChangePasswordModal from "../modals/ChangePasswordModal";
// import Spinner from "../Spinner";

const UserProfileDetails = ({
  userData,
}: {
  userData: userDataType,
}) => {
  const [openOptionsModal, setOpenOptionsModal] = useState<boolean>(false);
  const [openEditProfileModal, setOpenEditProfileModal] = useState<boolean>(false);
  const [openChangePasswordModal, setOpenChangePasswordModal] = useState<boolean>(false);
  const optionRef = useRef<HTMLDivElement>(null);

  console.log(`openEditProfileModal: ${openEditProfileModal}`);
  console.log(`openOptionsModal: ${openOptionsModal}`);
  
  // let loading: boolean

  useEffect(() => {
    // loading = true
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionRef.current &&
        !optionRef.current.contains(event.target as Node)
      ) {
        setOpenOptionsModal((prev) => !prev);
      }
    };

    if (openOptionsModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openOptionsModal]);

  const handleOptionsButton = () => {
    setOpenOptionsModal((prev) => !prev);
  };

  return (
    <div className="w-[100%] py-14 md:px-16 bg-white rounded-md">
      {/* Edit Profile Modal */}
      {openEditProfileModal && <EditProfileModal userData={userData} openEditProfileModal={openEditProfileModal} setOpenEditProfileModal={setOpenEditProfileModal}/>}

      {/* Change Password Modal */}
      {openChangePasswordModal && <ChangePasswordModal userData={userData} setOpenChangePasswordModal={setOpenChangePasswordModal} openChangePasswordModal={openChangePasswordModal}/>}

      {/* Profile */}
      {
      // loading ? <Spinner loading={loading}/> :
        userData ? (
        <>
          <div className="relative">
            {!userData?.user?.avatar ? (
              <div className="flex justify-center items-center h-40 w-40 mx-auto bg-slate-200 rounded-full mb-5">
                <FaUser color="gray" fontSize={"86px"} className="" />
              </div>
            ) : (
              <img
                src={userData?.user?.avatar}
                className="h-32 w-32 md:h-40 md:w-40 mx-auto rounded-full mb-5"
              />
            )}

            <div className="absolute top-[0%] right-[10%] md:top-[5%] md:right-[5%]" ref={optionRef}>
              <button
                className="text-darkerTrans"
                onClick={handleOptionsButton}
                // ref={optionRef}
              >
                <FaEllipsis fontSize={"30px"} />
              </button>
              <ProfileOptionsModal setOpenEditProfileModal={setOpenEditProfileModal} openOptionsModal={openOptionsModal} setOpenOptionsModal={setOpenOptionsModal} setOpenChangePasswordModal={setOpenChangePasswordModal}/>
            </div>
          </div>

          <div className="Name_and_class px-10">
            <h1 className="text-3xl text-center mb-4 md:mb-4 md:text-4xl ">{`${userData?.lastName} ${userData?.firstName}`}</h1>
            <p className="text-center text-xl">{`${idToRole(
              userData?.userId || ""
            )
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
      ) : (
        <div className="pl-6 text-md md:text-xl ">
          <p className="text-xl mb-3">:( </p>
          <p>Error Occured:</p>
          <p>Ensure you connected to the Internet</p>
        </div>
      )}
    </div>
  );
};

export default UserProfileDetails;
