import { FaExclamationTriangle } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"


const ErrorPage = () => {
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const errMsgs: Array<[]> = location.state?.errorMsg || []
  return (
    <section className="text-center flex flex-col justify-center items-center mt-20 h-96">
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
        <Link to={from} className="text-white rounded-xl px-3 py-2 mt-4 bg-indigo-700 hover:bg-indigo-900">Go Back</Link>
    </section>
  )
}

export default ErrorPage