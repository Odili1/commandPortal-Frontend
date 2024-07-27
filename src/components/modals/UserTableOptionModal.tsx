import {  useNavigate } from "react-router-dom";


type UserTableOptionModalPropType = {
    userId: string,
    openOptionsModal: boolean,
    setOpenOptionsModal: React.Dispatch<React.SetStateAction<boolean>>,
  }
  
  
  
const UserTableOptionModal = ({userId, openOptionsModal, setOpenOptionsModal}: UserTableOptionModalPropType) => {
  const navigate = useNavigate()
  // console.log(`Table Option Modal ${userData}`);
  
  // const options = [
  //   { to: "/profile/edit", optionName: "Edit Profile" },
  //   { to: "/profile/changePassword", optionName: "Change Password" },
  // ];
  console.log(`Table Option Modal`);

  const handleClickViewProfile = () => {
    navigate(`/user/${userId}`)
    console.log(`View Profile clicked`);
    
    setOpenOptionsModal(true)
  }

  const handleClickDelete = () => {
    console.log(`Delete Clicked`);
    
    setOpenOptionsModal(false)
  }
  
  return (
    <div
      className={`absolute top-[-190%] md:top-[-200%] right-[0%] p-1 w-32 md:text-sm text-slate-200 font-light bg-black bg-opacity-90 rounded-lg ${openOptionsModal ? 'flex flex-col animate-showTableOptionModal' : 'hidden animate-hideModal'}`}
    >
      <button className="p-2 hover:bg-gray-500 text-left hover:text-gray-900 hover:rounded-md hover:font-semibold transition-all ease-in-out delay-75 duration-150 cursor-pointer" onClick={handleClickViewProfile}>View Profile</button>
      <button className="p-2 hover:bg-gray-500 hover:text-gray-900 text-left hover:rounded-md hover:font-semibold transition-all ease-in-out delay-75 duration-150 cursor-pointer" onClick={handleClickDelete}>Delete</button>
    </div>
  );
};
  
  
export default UserTableOptionModal;
  