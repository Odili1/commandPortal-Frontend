import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react"
// import Hero from "./components/Hero"
// import NavBar from "./components/NavBar"
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import RequireAuth from "./components/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StudentDashboard from "./pages/dashboard/student/Dashboard.student";
import DashboardLayout from "./layouts/DashboardLayout";
import Subjects from "./pages/dashboard/student/Subjects";
import Results from "./pages/dashboard/student/Results";
import StudentAnalysis from "./pages/dashboard/student/Analysis.student";
import AdminDashboard from "./pages/dashboard/admin/Dashboard.admin";
import AdminAnalysis from "./pages/dashboard/admin/Analysis.admin";
import AdminProfile from "./pages/dashboard/admin/Profile.admin";
import ErrorPage from "./pages/ErrorPage";
import StudentProfile from "./pages/dashboard/student/Profile.student";
import Unauthorized from "./pages/UnauthorizedPage";
import AllUsersPage from "./pages/dashboard/users/AllUsersPage";
import AllStudentsPage from "./pages/dashboard/users/AllStudentsPage";
import AllAdminsPage from "./pages/dashboard/users/AllAdminsPage";
import AllTeachersPage from "./pages/dashboard/users/AllTeachersPage";
import ViewPofilePage from "./pages/ViewProfilePage";
import NewAdminPage from "./pages/dashboard/admin/NewAdminPage";
import SuccessPage from "./pages/SuccessPage";

// type Data = {
//   data: string
// }

function App() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<MainLayout/>}>
  //       <Route index element={<HomePage/>} />
  //       <Route path="/login" element={<LoginPage/>} />

  //       {/* Authenticated-Protected Routes */}
  //       <Route element={<RequireAuth/>}>
  //         <Route path="/dashboard" element={<DashboardPage/>}/>
  //       </Route>

  //     </Route>
  //       {/* Not Found Pages */}
  //       <Route path="*" element={<NotFoundPage/>}/>
  //   )
  // )

  const roles = {
    ADMIN: "admin",
    STUDENT: "student",
    TEACHER: "teacher",
  };

  const RouterContainer = (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Authenticated-Protected Routes */}
        <Route path="" element={<DashboardLayout />}>
          {/* Admin Routes */}
          <Route element={<RequireAuth allowedRoles={[roles.ADMIN]} />}>
            <Route path="ad/dashboard" element={<AdminDashboard />} />
            <Route path="/ad/profile" element={<AdminProfile />} />
            <Route path="/ad/analysis" element={<AdminAnalysis />} />

            {/* All Users Pages */}
            <Route path="/user/all" element={<AllUsersPage />} />
            <Route path="/student/all" element={<AllStudentsPage />} />
            <Route path="/admin/all" element={<AllAdminsPage />} />
            <Route path="/teacher/all" element={<AllTeachersPage />} />
            <Route path="/user/:userId" element={<ViewPofilePage />} />

            {/* New Users Pages */}
            <Route path="/admin/create-new-admin" element={<NewAdminPage/>}/>
          </Route>

          {/* Student Routes */}
          <Route element={<RequireAuth allowedRoles={[roles.STUDENT]} />}>
            {/* <Route path="st"> */}
            <Route path="st/dashboard" element={<StudentDashboard />} />
            <Route path="st/profile" element={<StudentProfile />} />
            <Route path="/st/subjects" element={<Subjects />} />
            <Route path="/st/results" element={<Results />} />
            <Route path="/st/analysis" element={<StudentAnalysis />} />
            {/* </Route> */}
          </Route>
        </Route>

        {/* Success Page */}
        <Route path="/success" element={<SuccessPage/>} />

        {/* Internal Server Error Page */}
        <Route path="/error" element={<ErrorPage />} />

        {/* Not Found Pages */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );

  // const [fetchData, setFetchData] = useState<Data | null>(null)

  // useEffect(() => {
  //   const fetchData = async() => {
  //     try {
  //       const res = await fetch('/api/hey')
  //       const data = await res.json()

  //       console.log(`Data fetch: ${JSON.stringify(data)}`);

  //       setFetchData(data)
  //     } catch (error) {
  //       console.log('Error fetching data');
  //     }
  //   }

  //   fetchData()
  // }, [])

  return (
    <>
      {RouterContainer}
      <ToastContainer
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        draggable
        autoClose={2000}
      />
    </>
  );
}

export default App;
