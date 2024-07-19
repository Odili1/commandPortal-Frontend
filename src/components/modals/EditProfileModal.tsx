import { FaX } from "react-icons/fa6";
import { CheckRole, FormDataType, userDataType } from "../../features/helpers/typeGuard.helper";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { idPrefix, idToRole } from "../../features/helpers/idToRole.helper";
import useSubmitForm from "../../hooks/useSubmitForm";
import Spinner from "../Spinner";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

type EditProfileModalProp = {
    userData: userDataType,
    openEditProfile: boolean
    setOpenEditProfile: React.Dispatch<React.SetStateAction<boolean>>
}

const EditProfileModal = ({userData, setOpenEditProfile, openEditProfile}: EditProfileModalProp) => {
    const modalRef = useRef<HTMLDivElement>(null)

    // UseState Object for Form Inputs
    const [formData, setFormData] = useState<Partial<FormDataType>>({})
    useEffect(() => {
        // if (userData){
            if (CheckRole.isAdmin(userData)) {
                setFormData({
                    userId: userData.userId,
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    email: userData.user.email,
                    phoneNumber: userData.user.phoneNumber
                })
            }else if (CheckRole.isStudent(userData)){
                setFormData({
                    userId: userData.userId,
                    firstName: userData.firstName,
                    middleName: userData.middleName,
                    lastName: userData.lastName,
                    gender: userData.gender,
                    dateOfBirth: userData.dateOfBirth,
                    email: userData.user.email,
                    phoneNumber: userData.user.phoneNumber,
                    address: userData.address,
                    stateOfOrigin: userData.stateOfOrigin
                })
            }else if(CheckRole.isTeacher(userData)){
                setFormData({
                    userId: userData.userId,
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    gender: userData.gender,
                    email: userData.user.email,
                    phoneNumber: userData.user.phoneNumber,
                    formClass: userData.formClass
                })
            }else{
                setFormData({
                    userId: '',
                    firstName: '',
                    lastName: '',
                    gender: '',
                    formClass: '',
                    middleName: '',
                    dateOfBirth: '',
                    email: '',
                    phoneNumber: '',
                    address: '',
                    stateOfOrigin: ''
                });
            }
        // }
    }, [userData])

    // Get useSubmit Hook
    const {submitForm, isLoading, isSuccess, isError} = useSubmitForm(formData as FormDataType)

    // Check user Role
    const role = userData ? idToRole(userData.userId) : null

    // Handle Click Outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)){
                setOpenEditProfile(false)
            }
        }

        if (openEditProfile){
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [openEditProfile, setOpenEditProfile])

    console.log(`Edit Profile`);

    const handleSubmit = useCallback(() => {
        submitForm()
        setOpenEditProfile((prev) => !prev)
    }, [submitForm, setOpenEditProfile])
    
  return (
    <>
        {
            isLoading ? <Spinner loading={isLoading}/> :
            isSuccess ? <Navigate to={`/${idPrefix(userData ? userData.userId : '')}/profile`}/> :
            <div className="fixed top-0 left-0 h-[100%] w-full z-30 bg-black bg-opacity-50 flex justify-center items-center">
                <div className={`container relative mx-auto w-[95%] px-2 h-[80%] bg-backgroundColor rounded-md md:px-8 py-10 md:w-[50%] md:h-[90%] overflow-y-auto animate-showModal`} ref={modalRef}>
                    <div>
                        <h2 className="mb-5 ml-4 font-bold text-xl md:text-2xl">Edit Profile</h2>
                        <FaX fontSize={'22px'} className="absolute right-[8%] top-[5%] cursor-pointer" onClick={() => setOpenEditProfile((prev) => !prev)}/>
                    </div>

                    <div className="w-[85%] mx-auto text-xl text-fontDarkColor mt-10">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="id">UserId:</label>
                                <input type="text" value={formData.userId} className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg w-full" disabled/>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="firstName">First Name:</label>
                                <input type="text" value={formData.firstName} className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg" onChange={(e) => setFormData({...formData, firstName: e.target.value})}/>
                            </div>
                            <div className={`${role === 'student' ? 'flex' : 'hidden'} flex-col gap-y-2`}>
                                <label htmlFor="firstName">Middle Name:</label>
                                <input type="text" value={formData.middleName || ''} className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg" onChange={(e) => setFormData({...formData, middleName: e.target.value})}/>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="lastName">Last Name:</label>
                                <input type="text" value={formData.lastName} className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg" onChange={(e) => setFormData({...formData, lastName: e.target.value})}/>
                            </div>
                            <div className={`${role === 'student' ? 'flex' : 'hidden'} flex-col gap-y-2`}>
                                <label htmlFor="age">Age</label>
                                <input type="text" value={CheckRole.isStudent(userData) ? userData.age : ''} className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg" disabled/>
                            </div>
                            <div className={`${role === 'student' ? 'flex' : 'hidden'} flex-col gap-y-2`}>
                                <label htmlFor="lastName">Gender</label>
                                <input type="text" value={formData.gender || ''} className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg" onChange={(e) => setFormData({...formData, gender: e.target.value})}/>
                            </div>
                            <div className={`${role === 'student' ? 'flex' : 'hidden'} flex-col gap-y-2`}>
                                <label htmlFor="lastName">Date of Birth</label>
                                <input type='date' value={formData.dateOfBirth || ''} className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg" onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}/>
                            </div>
                            <div className={`${role === 'student' ? 'flex' : 'hidden'} flex-col gap-y-2`}>
                                <label htmlFor="lastName">State of Origin</label>
                                <input type="text" value={formData.stateOfOrigin || ''} className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg" onChange={(e) => setFormData({...formData, stateOfOrigin: e.target.value})}/>
                            </div>
                            <div className={`${role === 'student' ? 'flex' : 'hidden'} flex-col gap-y-2`}>
                                <label htmlFor="lastName">Address</label>
                                <input type="text" value={formData.address || ''} className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg" onChange={(e) => setFormData({...formData, address: e.target.value})}/>
                            </div>
                            <div className={`${role === 'student' ? 'flex' : 'hidden'} flex-col gap-y-2`}>
                                <label htmlFor="lastName">Form Class</label>
                                <input type="text" value={formData.formClass || ''} className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg" onChange={(e) => setFormData({...formData, formClass: e.target.value})}/>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="email">Email:</label>
                                <input type="text" value={formData.email || ''} className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg" onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="phoneNumber">Phone Number:</label>
                                <input type="text" value={formData.phoneNumber || ''} className="py-2 px-3 border text-xl bg-white text-gray-500 rounded-lg" onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}/>
                            </div>

                            <div className="mt-8 flex justify-between">
                                <button type="submit" className="py-2 px-3 bg-green-700 text-slate-100 rounded-xl hover:bg-green-900 transition-all delay-75 ease-in-out duration-300">Save</button>
                                <button className="py-2 px-3 bg-slate-400 text-fontDarkColor rounded-lg transition-all delay-75 ease-in-out duration-300 hover:bg-slate-500" onClick={() => setOpenEditProfile((prev) => !prev)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        }
        {isSuccess && toast.success('Profile Updated')}
        {isError && toast.error('Profile Update Failed. Try again')}
    </>
  )
}

export default EditProfileModal

