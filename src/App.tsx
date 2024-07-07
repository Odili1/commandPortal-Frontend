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
        <Route path="/login" element={<LoginPage/>} />

        <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage/>} />
        </Route>
        
        {/* Authenticated-Protected Routes */}
        <Route element={<RequireAuth/>}>
          <Route element={<DashboardLayout/>}>
            {/* Student Routes */}
            <Route path="/st/dashboard">
              <Route index element={<StudentDashboard/>}/>
            </Route>
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
