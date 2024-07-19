import { FaX } from "react-icons/fa6"
import { FormDataType, userDataType } from "../../features/helpers/typeGuard.helper"
import { useCallback, useEffect, useRef, useState } from "react"
import { idToRole } from "../../features/helpers/idToRole.helper"
import useSubmitForm from "../../hooks/useSubmitForm"

type ChangePasswordModalProp ={
    userData: userDataType,
    openChangePasswordModal: boolean
    setOpenChangePasswordModal: React.Dispatch<React.SetStateAction<boolean>>,
}

const ChangePasswordModal = ({userData, openChangePasswordModal, setOpenChangePasswordModal}: ChangePasswordModalProp) => {
    const modalRef = useRef<HTMLDivElement>(null)

    // UseState Object for Form Inputs
    const [formData, setFormData] = useState<Partial<FormDataType>>({})

    // Get useSubmit Hook
    const {submitForm, isLoading} = useSubmitForm(formData as FormDataType)

    // Handle Click Outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)){
                setOpenChangePasswordModal(false)
            }
        }

        if (openChangePasswordModal){
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [openChangePasswordModal, setOpenChangePasswordModal])

    // Handle Submit Form
    const handleSubmit = useCallback(() => {
        submitForm()
        setOpenChangePasswordModal((prev) => !prev)
    }, [submitForm, setOpenChangePasswordModal])

    return (
        <div className="fixed top-0 left-0 h-[100%] w-full z-30 bg-black bg-opacity-50 flex justify-center items-center">
                <div className={`container relative mx-auto w-[95%] px-2 h-[80%] bg-backgroundColor rounded-md md:px-8 py-10 md:w-[50%] md:h-[90%] overflow-y-auto animate-showModal`} ref={modalRef}>
                    <div>
                        <h2 className="mb-5 ml-4 font-bold text-xl md:text-2xl">Change Password</h2>
                        <FaX fontSize={'22px'} className="absolute right-[8%] top-[5%] cursor-pointer" onClick={() => setOpenChangePasswordModal((prev) => !prev)}/>
                    </div>

                    <div className="w-[85%] mx-auto text-xl text-fontDarkColor mt-10">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="id">UserId:</label>
                                <input type="text" value={formData.userId} className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg w-full" disabled/>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="firstName">New Password:</label>
                                <input type="text" value={''} className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="firstName">Confirm Password:</label>
                                <input type="text" value={''} className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg" />
                            </div>

                            {/* Buttons */}
                            <div className="mt-8 flex justify-between">
                                <button type="submit" className="py-2 px-3 bg-green-700 text-slate-100 rounded-xl hover:bg-green-900 transition-all delay-75 ease-in-out duration-300" disabled>Save</button>
                                <button className="py-2 px-3 bg-slate-400 text-fontDarkColor rounded-lg transition-all delay-75 ease-in-out duration-300 hover:bg-slate-500" onClick={() => setOpenChangePasswordModal((prev) => !prev)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}


export default ChangePasswordModal
