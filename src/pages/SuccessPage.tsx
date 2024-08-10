import { useLocation, useNavigate } from "react-router-dom"


const SuccessPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const to = location.state?.to


    const handleClick = () => {
      to ? navigate(to) : navigate(-2)
      window.location.reload()
    }
  return (
    <>
        <div>SuccessPage</div>
        <button onClick={handleClick}>Continue</button>
    </>
  )
}

export default SuccessPage