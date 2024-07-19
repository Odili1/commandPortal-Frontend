

type ProfileOptionsModalPropType = {
  openOptionsModal: boolean,
  setOpenEditProfileModal:  React.Dispatch<React.SetStateAction<boolean>>,
  setOpenOptionsModal: React.Dispatch<React.SetStateAction<boolean>>,
  setOpenChangePasswordModal: React.Dispatch<React.SetStateAction<boolean>>,
}


const ProfileOptionsModal = ({openOptionsModal, setOpenEditProfileModal, setOpenOptionsModal, setOpenChangePasswordModal}: ProfileOptionsModalPropType) => {
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

  return (
    <div
      className={`absolute  md:gap-y-3 right-[7%] p-3 w-36 md:text-lg text-slate-200 font-semibold bg-black bg-opacity-90 rounded-lg shadow-2xl ${openOptionsModal ? 'flex flex-col animate-showOptionModal' : 'hidden animate-hideModal'}`}
    >
      <button className="p-2 hover:bg-white text-left hover:text-gray-900 hover:rounded-md hover:font-semibold transition-all ease-in-out delay-75 duration-150 cursor-pointer" onClick={handleClickEditProfile}>Edit Profile</button>
      <button className="p-2 hover:bg-white hover:text-gray-900 text-left hover:rounded-md hover:font-semibold transition-all ease-in-out delay-75 duration-150 cursor-pointer" onClick={handleClickChangePassword}>Change Password</button>
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
