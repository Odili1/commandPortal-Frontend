import {  NavLink } from "react-router-dom";
import { idToRole } from "../../features/helpers/idToRole.helper";


type UserTableOptionModalPropType = {
    userId: string,
    openOptionsModal: boolean,
    setOpenOptionsModal: React.Dispatch<React.SetStateAction<boolean>>,
  }
  
  
  
const UserTableOptionModal = ({userId, openOptionsModal, setOpenOptionsModal}: UserTableOptionModalPropType) => {
  // const navigate = useNavigate()
  // console.log(`Table Option Modal ${userData}`);
  
  const tableOptions = (role: string) => {
    const adminOptions = [
      { to: `/user/${userId}`, optionName: "View Profile" },
      // { to: ``, optionName: "Delete User" },
    ];
  
    const teacherOptions = [
      {to: `/user/${userId}`, optionName: 'View Profile'},
      {to: '', optionName: 'Analytics'},
      // { to: ``, optionName: "Delete User" },
    ]
  
    const studenOptions = [
      {to: `/user/${userId}`, optionName: 'View Profile'},
      {to: '', optionName: 'Results'},
      {to: '', optionName: 'Fees'},
      {to: '', optionName: 'Analytics'},
      // { to: ``, optionName: "Delete User" },
    ]

    if (role === 'admin') {
      return adminOptions
    }else if (role === 'teacher'){
      return teacherOptions
    }else if (role === 'student'){
      return studenOptions
    }else {
      return null
    }
  }
  console.log(`Table Option Modal`);

  // const handleClickViewProfile = () => {
  //   navigate(`/user/${userId}`)
  //   console.log(`View Profile clicked`);
    
  //   setOpenOptionsModal(true)
  // }

  const options = tableOptions(idToRole(userId) || '')
  
  return (
    <div
      className={`absolute top-[60%] md:top-[50%] right-[10%] text-sm p-1 w-24 md:w-28 md:text-sm text-slate-200 font-light bg-black bg-opacity-90 rounded-lg z-10 ${openOptionsModal ? 'flex flex-col animate-showTableOptionModal' : 'hidden animate-hideModal'}`}
    >
      {
        options?.map((obj, i) => {
          // if (obj.optionName === 'Delete User'){
          //   return (
          //     <button key={i} className={"p-2 hover:bg-gray-500 text-left hover:text-gray-900 hover:rounded-md hover:font-semibold transition-all ease-in-out delay-75 duration-150 cursor-pointer"} onClick={() => setOpenOptionsModal(true)}>{obj.optionName}</button>
          //   )
          // }

          return (
            <NavLink key={i} to={obj.to} className={"p-2 hover:bg-gray-500 text-left hover:text-gray-900 hover:rounded-md hover:font-semibold transition-all ease-in-out delay-75 duration-150 cursor-pointer"} onClick={() => setOpenOptionsModal(true)}>{obj.optionName}</NavLink>
          )
        })
      }
      {/* <button className="p-2 hover:bg-gray-500 text-left hover:text-gray-900 hover:rounded-md hover:font-semibold transition-all ease-in-out delay-75 duration-150 cursor-pointer" onClick={handleClickViewProfile}>View Profile</button> */}
      {/* <button className="p-2 hover:bg-gray-500 hover:text-gray-900 text-left hover:rounded-md hover:font-semibold transition-all ease-in-out delay-75 duration-150 cursor-pointer" onClick={handleClickDelete}>Delete</button> */}
    </div>
  );
};
  
  
export default UserTableOptionModal;
  