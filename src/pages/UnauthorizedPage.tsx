import {Link, useNavigate} from 'react-router-dom'
import useLogOut from '../hooks/useLogout'

const Unauthorized = () => {

  const navigate = useNavigate()

  const {logOut} = useLogOut()

  const goBack = () => navigate(-1)
  const handleLogout = () => {
    logOut()
  }

  return (
    <section>
        <h1>Unauthorized</h1>
        <br />
        <p>You do not have access to the requested page.</p>
        <div className='flexGrow'>
          <Link to={'/'} onClick={handleLogout} className="px-3 py-3 font-semibold bg-standardBlue border-none hover:bg-lightBlue rounded-md text-white">Logout</Link>
          <button onClick={goBack}>Go back</button>
        </div>
    </section>
  )
}

export default Unauthorized