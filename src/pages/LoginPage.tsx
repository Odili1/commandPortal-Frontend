// import logo from '../assets/react.svg'
import React, { useEffect, useRef, useState } from 'react'
import logo from '../assets/images/CommandSchoolLogo.jpg'
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../features/store/api/authApiSlice'
import { useAppDispatch } from '../features/store/hooks'
import { toast } from 'react-toastify'
import { setCredentials } from '../features/store/slices/authSlice'
import { IError } from '../features/interfaces/userInfo'
// import Spinner from '../components/Spinner'
// isLoading ? <Spinner loading={isLoading}/> : 


const LoginPage = () => {
    const navigate: NavigateFunction = useNavigate()
    const location = useLocation()
    
    
    const userRef = useRef<HTMLInputElement>(null!)
    
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    
    // Dynamic Navigation
    const prefix = username.toLowerCase().slice(0, 2)
    const from = location?.state?.from?.pathname || `/${prefix}/dashboard`
    const navigateTo = from == ('/') ? `/${prefix}/dashboard` : from
    console.log(location?.state?.from?.pathname);

    const [login, {isLoading}] = useLoginMutation()

    const dispatch = useAppDispatch()

    useEffect(() => {
        userRef.current.focus()
    },[])


    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            console.log({username, password});
            
            const userData = await login({userId: username, password}).unwrap()
            
            console.log(`LoginUserData: ${JSON.stringify(userData)}`);
            dispatch(setCredentials({...userData}))
            
            setUsername('')
            setPassword('')
            
            // Dynamic navigation
            toast.success('Login successful')
            console.log(isLoading);
            
            navigate(navigateTo, {replace: true})
        } catch (error: unknown) {
            console.log(`Login Catch Error: ${JSON.stringify(error)}`);
            console.log(isLoading);
            const err = error as IError

            if (err.status !== 500){
                toast.error(err.data?.message)
            }
            
            navigate('/error', {state: {from: location, errorMsg: ['Ensure Internet connection', 'Go back and try again']}})
            // console.log(err.data.message)
            // console.log(err.data.statusCode)
            // console.log(err.data.error)
        }
    }

  return (
    <section className="bg-indigo-50 min-h-[100vh]">
        <div className="container max-w-screen-md m-auto py-5">
            {<div className="bg-white rounded-xl shadow-md px-8 py-8 m-4">
                <form onSubmit={handleSubmit}>
                    <img className='mx-auto mt-8 mb-14 h-32 rounded-xl' src={logo} alt="" />
                    <h2 className='text-center font-bold text-2xl mb-6'>Welcome to Command Children School, Calabar</h2>
                    <p className='text-center text-xl mb-16'>Login to access portal</p>

                    <div className='mb-2'>
                        <label htmlFor="username" className='block font-bold text-gray-700 mb-2'>Username</label>
                        <input 
                        type="text" 
                        id='username'
                        name='userId'
                        className='border rounded w-full py-2 px-3 mb-2'
                        placeholder='Username'
                        required
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                        ref={userRef}
                        value={username}
                        />
                    </div>
                    {/* {isLoading && <Spinner loading={isLoading}/>} */}
                    <div className='mb-2'>
                        <label htmlFor="username" className='block font-bold text-gray-700 mb-2'>Password</label>
                        <input 
                        type="text" 
                        id='password'
                        name='password'
                        className='border rounded w-full py-2 px-3 mb-2'
                        placeholder='Password'
                        required
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        value={password}
                        />
                    </div>
                    <a href="" className='block text-right hover:text-indigo-600 mb-4'>Forgot Password?</a>

                    <hr className='mb-4'/>

                    <div className='flex justify-between items-center'>
                        <p>New Student? <span><a href="" className='hover:text-indigo-600'>Verify Account</a></span></p>

                        <button type='submit' disabled={isLoading} className={isLoading ? 'flex bg-blue- 700 w-20 py-3 rounded-lg text-white text-center font-bold transition-colors ease-in-out delay-75 duration-300 bg-black hover:text-white cursor-not-allowed' : 'flex bg-blue-700 w-20 py-3 rounded-lg text-white text-center font-bold transition-colors ease-in-out delay-75 duration-300 hover:bg-black hover:text-white'}>
                            {isLoading 
                            ? <span className='mx-auto'>
                                <svg className="animate-spin -ml-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            </span>
                            : <p className='mx-auto'>Sign in</p>
                            }
                        </button>
                    </div>
                </form>
            </div>}

        </div>
    </section>
  )
}

export default LoginPage