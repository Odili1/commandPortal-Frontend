

type ProfileOptionsModalPropType = {
  openOptionsModal: boolean,
  setOpenEditProfileModal:  React.Dispatch<React.SetStateAction<boolean>>,
  setOpenOptionsModal: React.Dispatch<React.SetStateAction<boolean>>,
  setOpenChangePasswordModal: React.Dispatch<React.SetStateAction<boolean>>,
  setOpenDeleteUserModal: React.Dispatch<React.SetStateAction<boolean>>,
}


const ProfileOptionsModal = ({openOptionsModal, setOpenEditProfileModal, setOpenOptionsModal, setOpenChangePasswordModal, setOpenDeleteUserModal}: ProfileOptionsModalPropType) => {
  // const options = [
  //   { to: "/profile/edit", optionName: "Edit Profile" },
  //   { to: "/profile/changePassword", optionName: "Change Password" },
  // ];
  console.log(`Profile Option Modal`);

  const handleClickChangePassword = () => {
    setOpenChangePasswordModal(true)
    setOpenOptionsModal(false)
  }

  const handleClickEditProfile = () => {
    setOpenEditProfileModal(true)
    setOpenOptionsModal(false)
  }

  const handleClickDelete = () => {
    console.log(`Delete Clicked`);
    setOpenDeleteUserModal(true)
    setOpenOptionsModal(false)
  }

  return (
    <div
      className={`absolute  md:gap-y-1 right-[7%] p-2 w-36 md:text-md text-slate-200 font-semibold bg-black bg-opacity-90 rounded-lg shadow-2xl ${openOptionsModal ? 'flex flex-col animate-showOptionModal' : 'hidden animate-hideModal'}`}
    >
      <button className="p-2 hover:bg-gray-500 text-left hover:text-gray-900 hover:rounded-md hover:font-semibold transition-all ease-in-out delay-75 duration-150 cursor-pointer" onClick={handleClickEditProfile}>Edit Profile</button>
      <button className="p-2 border-t-2 border-gray-700 hover:bg-gray-500 hover:text-gray-900 text-left hover:rounded-md hover:font-semibold transition-all ease-in-out delay-75 duration-150 cursor-pointer" onClick={handleClickChangePassword}>Change Password</button>
      <button className="p-2 border-t-2 border-gray-700 hover:bg-gray-500 hover:text-gray-900 text-left hover:rounded-md hover:font-semibold transition-all ease-in-out delay-75 duration-150 cursor-pointer" onClick={handleClickDelete}>Delete User</button>
      {/* {options.map((option, i) => (
        <Link
          to={option.to}
          key={i}
          className="p-2 hover:bg-white hover:text-gray-900 hover:rounded-md hover:font-semibold transition-all ease-in-out delay-75 duration-150"
        >
          {option.optionName}
        </Link>
      ))} */}
    </div>
  );
};


export default ProfileOptionsModal;
