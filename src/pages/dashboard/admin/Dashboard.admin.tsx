import {
  FaBookOpen,
  FaBookOpenReader,
  FaChild,
  FaClipboardUser,
  FaPersonChalkboard,
  FaUser,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import MainTitleHeader from "../../../components/dashboard/titleHeaders/MainTitleHeader";
import { useEffect, useState } from "react";
import { IAdmin } from "../../../features/interfaces/admin.interface";
import { useGetAllAdminQuery } from "../../../features/store/api/adminAPiSlice";
import { useGetAllTeachersQuery } from "../../../features/store/api/teacherApiSlice";
import { useGetAllStudentsQuery } from "../../../features/store/api/studentApiSlice";
import { useGetAllUsersQuery } from "../../../features/store/api/usersApiSlice";
import { useAppDispatch } from "../../../features/store/hooks";
import { setAdminDashboardData } from "../../../features/store/slices/adminSlice";
import Spinner from "../../../components/Spinner";
import { IUser } from "../../../features/interfaces/user.interface";
import { ITeacher } from "../../../features/interfaces/teacher.interface";
import { IStudent } from "../../../features/interfaces/student.interface";

const AdminDashboard = () => {
  const dispatch = useAppDispatch()

  const [users, setUsers] = useState<IUser[] | null>(null);
  const [admins, setAdmins] = useState<IAdmin[] | null>(null);
  const [teachers, setTeachers] = useState<ITeacher[] | null>(null);
  const [students, setStudents] = useState<IStudent[] | null>(null);

  const { data: usersData, isLoading: usersLoading } = useGetAllUsersQuery();
  const { data: adminsData, isLoading: adminsLoading } = useGetAllAdminQuery();
  const { data: teachersData, isLoading: teachersLoading } = useGetAllTeachersQuery();
  const { data: studentsData, isLoading: studentsLoading } = useGetAllStudentsQuery();

  useEffect(() => {
    setUsers(usersData || null)
    setAdmins(adminsData || null)
    setTeachers(teachersData || null)
    setStudents(studentsData || null)

    // Set the Redux state for Admin Dashboard
    dispatch(setAdminDashboardData({
      users,
      admins,
      teachers,
      students
    }))
  }, [adminsData, studentsData, usersData, teachersData, users, admins, teachers, students, dispatch])

  const isLoading = usersLoading || adminsLoading || teachersLoading || studentsLoading
  
  return (
    <>
      {/* Title Header */}
      <MainTitleHeader pageName="Dashboard" />
      {
        isLoading ? <Spinner loading={isLoading} /> :
        <div className="h -[100%] w -[100%] bg- slate-50 pb-10">
          <div className="container w-[85%] mx-auto pt-6 md:pt-8">
            <div className="flex flex-col justify-center gap-5 w-full flex-wrap md:flex-row md:gap-x-6 md:gap-y-8">
              <Link
                to={"/user/all"}
                className="bg-blue-200 text-left rounded-xl p-6 md:w-[31%] shadow-xl transition-shadow delay-75 duration-200 md:shadow-sm md:hover:shadow-2xl"
              >
                <div className="mb-10 md:mb-14">
                  {/* <img src={logo} alt="" className='h-8 w-8 rounded-lg mb-4' /> */}
                  <FaUser
                    color="blue"
                    fontSize={"36px"}
                    className="h-8 w-8 rounded-lg mb-4"
                  />
                  <h2 className="text-xl font-medium text-darkerTrans">
                    Registered Users
                  </h2>
                </div>
                <p className="text-lg font-medium text-darkerTrans">{users?.length || 0} users</p>
              </Link>
              <Link
                to={"/admin/all"}
                className="bg-green-200 text-left rounded-xl p-6 md:w-[31%] shadow-xl transition-shadow delay-75 duration-200 md:shadow-sm md:hover:shadow-2xl"
              >
                <div className="mb-10 md:mb-14">
                  {/* <img src={logo} alt="" className='h-8 w-8 rounded-lg mb-4' /> */}
                  <FaClipboardUser
                    color="green"
                    fontSize={"36px"}
                    className="h-8 w-8 rounded-lg mb-3"
                  />
                  <h2 className="text-xl font-medium text-darkerTrans">Admins</h2>
                </div>
                <p className="text-lg font-medium text-darkerTrans">{admins?.length || 0} admins</p>
              </Link>
              <Link
                to={"/teacher/all"}
                className="bg-red-200 text-left rounded-xl p-6 md:w-[31%] shadow-xl transition shadowl delay-75 duration-200 md:shadow-sm md:hover:shadow-2xl"
              >
                <div className="mb-10 md:mb-14">
                  {/* <img src={logo} alt="" className='h-8 w-8 rounded-lg mb-4' /> */}
                  <FaPersonChalkboard
                    color="red"
                    fontSize={"36px"}
                    className="h-8 w-8 rounded-lg mb-3"
                  />
                  <h2 className="text-xl font-medium text-darkerTrans">
                    Registered Teachers
                  </h2>
                </div>
                <p className="text-lg font-medium text-darkerTrans">
                  {teachers?.length || 0} teachers
                </p>
              </Link>
              <Link
                to={"/student/all"}
                className="bg-slate-300 text-left rounded-xl p-6 md:w-[31%] shadow-xl transition-shadow delay-75 duration-200 md:shadow-sm md:hover:shadow-2xl"
              >
                <div className="mb-10 md:mb-14">
                  {/* <img src={logo} alt="" className='h-8 w-8 rounded-lg mb-4' /> */}
                  <FaChild
                    color="gray"
                    fontSize={"36px"}
                    className="h-8 w-8 rounded-lg mb-3"
                  />
                  <h2 className="text-xl font-medium text-darkerTrans">
                    Registered Students
                  </h2>
                </div>
                <p className="text-lg font-medium text-darkerTrans">
                  {students?.length || 0} students
                </p>
              </Link>
              <Link
                to={"/class/all"}
                className="bg-orange-200 text-left rounded-xl p-6 md:w-[31%] shadow-xl transition-shadow delay-75 duration-200 md:shadow-sm md:hover:shadow-2xl"
              >
                <div className="mb-10 md:mb-14">
                  {/* <img src={logo} alt="" className='h-8 w-8 rounded-lg mb-4' /> */}
                  <FaBookOpenReader
                    color="orange"
                    fontSize={"36px"}
                    className="h-8 w-8 rounded-lg mb-3"
                  />
                  <h2 className="text-xl font-medium text-darkerTrans">
                    Classes
                  </h2>
                </div>
                <p className="text-lg font-medium text-darkerTrans">0 classes</p>
              </Link>
              <Link
                to={"/subject/all"}
                className="bg-indigo-200 text-left rounded-xl p-6 md:w-[31%] shadow-xl transition-shadow delay-75 duration-200 md:shadow-sm md:hover:shadow-2xl"
              >
                <div className="mb-10 md:mb-14">
                  {/* <img src={logo} alt="" className='h-8 w-8 rounded-lg mb-4' /> */}
                  <FaBookOpen
                    color="indigo"
                    fontSize={"36px"}
                    className="h-8 w-8 rounded-lg mb-3"
                  />
                  <h2 className="text-xl font-medium text-darkerTrans">
                    Subjects
                  </h2>
                </div>
                <p className="text-lg font-medium text-darkerTrans">
                  0 subjects
                </p>
              </Link>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default AdminDashboard;
