import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'


const NavBar = () => {
  return (
    <nav className="shadow-md bg-slate-100 fixed w-[100vw] z-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4 h-20">
          <a href="" className="flex items-center mr-2">
            <img src={logo} alt="Logo" className='w-auto h-9' />
            <span className='font-bold text-blue-700 text-3xl ml-3 md:text-2xl'>
              Command School
            </span>
          </a>

          <div className='md:ml-auto'>
            <div className='flex items-center'>
              <Link to={'/login'} className='rounded px-4 py-2 text-white bg-blue-700 border-none hover:bg-blue-600'>Login</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar