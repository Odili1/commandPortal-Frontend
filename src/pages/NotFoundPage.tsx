import { useNavigate } from "react-router-dom"
import { FaExclamationTriangle } from "react-icons/fa"

const NotFoundPage = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <section className="text-center flex flex-col justify-center items-center mt-20 h-96">
        <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
        <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
        <p className="text-xl mb-5">This Page does not exist</p>
        <button onClick={handleClick} className="text-white rounded-xl px-3 py-2 mt-4 bg-indigo-700 hover:bg-indigo-900">Go Back</button>
    </section>
  )
}

export default NotFoundPage