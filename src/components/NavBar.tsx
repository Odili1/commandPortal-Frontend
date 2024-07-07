import { Link, useLocation, useNavigate } from 'react-router-dom'
// import logo from '../assets/images/logo.png'
import logo from '../assets/images/CommandSchoolLogo.jpg'
import { useAppDispatch, useAppSelector } from '../features/store/hooks'
import { selectUserId } from '../features/store/slices/authSlice'
import { useLogoutMutation } from '../features/store/api/authApiSlice'
import { logoutUser } from '../features/store/slices/authSlice'
import { toast } from 'react-toastify'
import { IError } from '../features/interfaces/userInfo'

const NavBar = () => {
  const user = useAppSelector(selectUserId)

  // ----- Testing logout -----
  const location = useLocation()
  const [logout] = useLogoutMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleLogout = async() => {
    try {
      console.log('Logout clicked:');
      const response = await logout('').unwrap()
      console.log('Logout response:', response);
      dispatch(logoutUser())
      // toast.success(response.data.message)
      navigate('/login', {state:{from: location}})
    } catch (error: unknown) {
      console.log(error);
      
      const err = error as IError
      toast.error(err.data?.message)
    }
  }

  return (
    <nav className="shadow-md bg-slate-100 fixed w-[100vw] z-10">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between mx-6 md:justify-between py-4 h-20 md:mx-0">
          <Link to={'/'} className="flex items-center mr-2">
            <img src={logo} alt="Logo" className='w-auto h-9 md:h-9 rounded-xl' />
            <span className='font-bold md:block text-blue-700 text-xs ml-3 md:text-3xl'>
              Command Children<br className='md:hidden'/> School, Calabar
            </span>
          </Link>

          <div className='md:ml-auto'>
            <div className='flex items-center'>
              {!user && <Link to={'/login'} className='px-2 py-1 text-lg rounded md:px-4 md:py-2 text-white bg-blue-700 border-none hover:bg-blue-600'>Login</Link>}
            </div>
            {/* Testing Logout */}
            {user && <button onClick={handleLogout} className='px-2 py-1 text-lg rounded md:px-4 md:py-2 text-white bg-red-700 border-none hover:bg-red-600'>Logout</button>}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar