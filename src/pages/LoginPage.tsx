import logo from '../assets/react.svg'

const LoginPage = () => {
  return (
    <section className="bg-indigo-50 h-[100vh]">
        <div className="container max-w-7xl m-auto py-24">
            <div className="bg-white rounded-xl shadow-md px-8 py-8 m-4">
                <form>
                    <img className='mx-auto mb-14' src={logo} alt="" />
                    <h2 className='text-center font-bold text-2xl mb-6'>Welcome to Command School</h2>
                    <p className='text-center text-xl mb-16'>Login to access portal</p>

                    <div className='mb-2'>
                        <label htmlFor="username" className='block font-bold text-gray-700 mb-2'>Username</label>
                        <input 
                        type="text" 
                        id='username'
                        name='username'
                        className='border rounded w-full py-2 px-3 mb-2'
                        placeholder='Username'
                        required
                        value=''
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="username" className='block font-bold text-gray-700 mb-2'>Password</label>
                        <input 
                        type="text" 
                        id='password'
                        name='password'
                        className='border rounded w-full py-2 px-3 mb-2'
                        placeholder='Password'
                        required
                        value=''
                        />
                    </div>
                    <a href="" className='block text-right hover:text-indigo-600 mb-4'>Forgot Password?</a>

                    <hr className='mb-4'/>

                    <div className='flex justify-between items-center'>
                        <p>New Student? <span><a href="" className='hover:text-indigo-600'>Verify Account</a></span></p>

                        <a href="" className='bg-blue-600 px-3 py-3 rounded-lg text-white text-center font-bold transition-colors ease-in-out delay-75 duration-300 hover:bg-black hover:text-white'>Sign in</a>
                    </div>
                </form>
            </div>

        </div>
    </section>
  )
}

export default LoginPage