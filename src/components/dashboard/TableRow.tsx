import { useEffect, useRef, useState } from "react";
import { FaEllipsis } from "react-icons/fa6";
import UserTableOptionModal from "../modals/UserTableOptionModal";
import { userDataType } from "../../features/helpers/typeGuards.helper";
import { IUser } from "../../features/interfaces/user.interface";

type TableRowPropTypes = {
    user: IUser | userDataType,
    index: number
}

const TableRow = ({user, index}: TableRowPropTypes) => {
    // Use Refs
    const optionRef = useRef<HTMLTableRowElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null)

    // useStates
    const [openOptionsModal, setOpenOptionsModal] = useState<boolean>(false);
    const [clickedRow, setClickedRow] = useState<number | null>(null);
    const [userNames, setUserNames] = useState<{firstName: string, lastName: string}>({
        firstName: '',
        lastName: ''
    })

    useEffect(() => {
        if (!user) {
            setUserNames({
                firstName: '',
                lastName: ''
            })
        }else if ('admin' in user && user.admin){
            setUserNames({
                firstName: user.admin?.firstName,
                lastName: user.admin?.lastName
            })
        }else if ('teacher' in user && user.teacher){
            setUserNames({
                firstName: user.teacher?.firstName,
                lastName: user.teacher?.lastName
            })
        }else if ('student' in user && user.student){
            setUserNames({
                firstName: user.student?.firstName,
                lastName: user.student?.lastName
            })
        }else if ('firstName' in user && 'lastName' in user) {
            setUserNames({
                firstName: user.firstName,
                lastName: user.lastName,
            });
        }else{
            setUserNames({
                firstName: '',
                lastName: ''
            })
        }
    }, [user])
    

    const handleOptionsButton = (index: number) => {
        setOpenOptionsModal((prev) => {
            console.log(`Prev: ${prev}`);
            return !prev
            
        });
        setClickedRow(index);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (optionRef.current && !optionRef.current.contains(e.target as Node) && buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
                console.log(`Outside Div`);
            
                setOpenOptionsModal(false);
                setClickedRow(null)
            }
        };

        if (openOptionsModal) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [openOptionsModal]);


    return (
        <tr key={index} className="">
            <td>{index + 1}</td>
            <td>{user?.userId}</td>
            <td>{userNames.firstName}</td>
            <td>{userNames.lastName}</td>
            <td>
            <div ref={optionRef} className="relative">
                <button ref={buttonRef} className="bg-gray-400 shadow-md rounded-md p-1" onClick={() => handleOptionsButton(index)}>
                <FaEllipsis color="black" fontSize={"26px"} />
                </button>
                {clickedRow === index && (
                <UserTableOptionModal userId={user && user.userId || ''}
                    openOptionsModal={openOptionsModal}
                    setOpenOptionsModal={setOpenOptionsModal}
                />
                )}  
            </div>
            </td>
        </tr>
    )
}

export default TableRow