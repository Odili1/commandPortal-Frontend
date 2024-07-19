

type ProfileOptionsModalPropType = {
  openOptions: boolean,
  setOpenEditProfile:  React.Dispatch<React.SetStateAction<boolean>>,
  setOpenOptions: React.Dispatch<React.SetStateAction<boolean>>
}


const ProfileOptionsModal = ({openOptions, setOpenEditProfile, setOpenOptions}: ProfileOptionsModalPropType) => {
  // const options = [
  //   { to: "/profile/edit", optionName: "Edit Profile" },
  //   { to: "/profile/changePassword", optionName: "Change Password" },
  // ];
  console.log(`Profile Option Modal`);

  const handleClickEditProfile = () => {
    setOpenEditProfile(true)
    setOpenOptions(false)
  }

  return (
    <div
      className={`absolute  md:gap-y-3 right-[7%] p-3 w-36 md:text-lg text-slate-200 font-semibold bg-black bg-opacity-90 rounded-lg shadow-2xl ${openOptions ? 'flex flex-col animate-showOptionModal' : 'hidden'}`}
    >
      <button className="p-2 hover:bg-white text-left hover:text-gray-900 hover:rounded-md hover:font-semibold transition-all ease-in-out delay-75 duration-150 cursor-pointer" onClick={handleClickEditProfile}>Edit Profile</button>
      <button className="p-2 hover:bg-white hover:text-gray-900 text-left hover:rounded-md hover:font-semibold transition-all ease-in-out delay-75 duration-150 cursor-pointer">Change Password</button>
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
