import { Link, } from 'react-router-dom'
// import logo from '../assets/images/logo.png'
import logo from '../assets/images/CommandSchoolLogo.jpg'
import { useAppSelector } from '../features/store/hooks'
import { selectUserId } from '../features/store/slices/authSlice'

const Header = () => {
  const user = useAppSelector(selectUserId)

  return (
    <nav className="shadow-md bg-backgroundColor fixed w-[100vw] z-10">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between mx-6 md:justify-between py-4 h-20 md:mx-0">
          <Link to={'/'} className="flex items-center mr-2">
            <img src={logo} alt="Logo" className='w-auto h-9 md:h-9 rounded-xl' />
            <span className='font-bold md:block text-standardBlue text-xs ml-3 md:text-3xl'>
              Command Children<br className='md:hidden'/> School, Calabar
            </span>
          </Link>

          <div className='md:ml-auto'>
            <div className='flex items-center'>
              {!user && <Link to={'/login'} className='px-2 py-1 text-lg rounded md:px-4 md:py-2 text-white bg-standardBlue border-none hover:bg-lightBlue'>Login</Link>}
            </div>
            {/* Testing Logout */}
            {/* {user && <button onClick={handleLogout} className='px-2 py-1 text-lg rounded md:px-4 md:py-2 text-white bg-red-700 border-none hover:bg-red-600'>Logout</button>} */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header