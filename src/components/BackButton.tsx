import { FaCircleArrowLeft } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

type BackButtonPropType = {
  locationTo?: string
}

const BackButton = ({locationTo}: BackButtonPropType) => {
    const navigate = useNavigate()

    const handleCLick = () => {
      locationTo ? navigate(locationTo) : navigate(-1)
    }

  return (
    <div className="mt-9 md:mt-14">
        <FaCircleArrowLeft className="cursor-pointer" onClick={handleCLick} color="gray" fontSize={'34px'}/>
    </div>
  )
}

export default BackButton