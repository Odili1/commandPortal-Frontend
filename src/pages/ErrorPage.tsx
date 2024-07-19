import { FaExclamationTriangle } from "react-icons/fa"
import { Link, useLocation, useNavigate } from "react-router-dom"
import useLogOut from "../hooks/useLogout"
import Spinner from "../components/Spinner"


const ErrorPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const {logOut, isLoading} = useLogOut()
    const from = location.state?.from?.pathname
    const errMsgs: Array<[]> = location.state?.errorMsg || []


  const handleClickBack = () => {
    navigate(from || -1)
  }
  const handleClick = () => {
    logOut()
    navigate('/')
  }

  return (
    <>
      {
        isLoading ? <Spinner loading={isLoading}/> :
        <section className="text-center flex flex-col justify-center items-center mt-20 h-full">
          <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
          <h1 className="text-6xl font-bold mb-4">Error</h1>
          <p className="text-xl mb-5">An error has occured</p>
          <ul className="mb-5 text-left">
            {
              errMsgs.length !== 0 && errMsgs.map((msg, i) => (
                <li key={i}>{msg}</li>
              ))
            }
          </ul>
          <button onClick={handleClickBack} className="text-white rounded-xl px-3 py-2 mt-4 bg-indigo-700 hover:bg-indigo-900">Go Back</button>
          <p className="mt-14 text-lg">If the Error Persists, </p>
          <button onClick={handleClick} className="text-white rounded-xl px-3 py-2 mt-4 bg-blue-700 hover:bg-blue-900">Go Home</button>
        </section>
      }
    </>
  )
}

export default ErrorPage