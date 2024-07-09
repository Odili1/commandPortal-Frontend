import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import { useEffect, useState } from "react"
// import Hero from "./components/Hero"
// import NavBar from "./components/NavBar"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import NotFoundPage from "./pages/NotFoundPage"
import RequireAuth from "./components/RequireAuth"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import StudentDashboard from "./pages/dashboard/student/StudentDashboard"
import DashboardLayout from "./layouts/DashboardLayout"
import Subjects from "./pages/dashboard/student/Subjects"
import Results from "./pages/dashboard/student/Results"
import StudentAnalysis from "./pages/dashboard/student/StudentAnalysis"


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

  const RouterContainer = 
    <Router>
      <Routes>

        <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage/>} />
        </Route>
        
        <Route path="/login" element={<LoginPage/>} />

        {/* Authenticated-Protected Routes */}
        <Route element={<RequireAuth/>}>
          <Route path="" element={<DashboardLayout/>}>
            {/* Student Routes */}
            {/* <Route path="st"> */}
              <Route path="st/dashboard" element={<StudentDashboard/>}/>
              <Route path="/st/subjects" element={<Subjects/>}/>
              <Route path="/st/results" element={<Results/>}/>
              <Route path="/st/analysis" element={<StudentAnalysis/>}/>
            {/* </Route> */}
          </Route>
        </Route>
        


        {/* Not Found Pages */}
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Router>

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
      <ToastContainer/>
    </>
  )
}

export default App
