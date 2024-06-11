import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
// import { useEffect, useState } from "react"
// import Hero from "./components/Hero"
// import NavBar from "./components/NavBar"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"

// type Data = {
//   data: string
// }

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Route>
    )
  )
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
    <RouterProvider router={router}/>
  )
}

export default App
