import image from '../assets/images/landing_image.png'
// import bounce1 from '../assets/images/bounce1.svg'
import bookIcon from '../assets/images/bookIcon.svg'


const Hero = () => {
  return (
    <div className="bg-blue-600 max-h-[105vh] w-[100]">
        <div className="conatiner max-w-7xl mx-auto flex flex-col py-40 md:flex-row md:justify-between md:items-center">
            <div className='text-left flex flex-col mb-24 justify-between items-left px-5 md:w-[55%] md:text-left'>
                <h1 className="text-white text-2xl font-bold md:text-6xl leading-tight">Welcome to Command <br/> School Portal</h1>
                <p className='text-white text-xl md:text-2xl mt-5 leading-normal'>Step through the virtual doors - Your Gateway of Knowledge, Excellence, and Possibilities!</p>
                <div className='mt-16'>
                    <a href="" className='rounded-md inline border-none text-xl bg-white text-blue-600 px-5 py-3 transition-colors ease-in-out delay-75 duration-300 hover:bg-black hover:text-white'>Learn More</a>
                </div>
            </div>
            <div className='relative'>
                <img src={image} alt="" className='md:h-[450px] md:w-[500px]'/>
                <div className=''>
                    <svg className='absolute hidden right-0 bottom-12 animate-bubble md:block' xmlns="http://www.w3.org/2000/svg" width="29" height="46" viewBox="0 0 29 46" fill="none"><circle cx="14.4573" cy="8.15851" r="7.42425" stroke="white" stroke-width="1.46853"></circle><rect x="1.00287" y="31.7756" width="22.6301" height="14.8695" transform="rotate(-28.7902 1.00287 31.7756)" stroke="white" stroke-width="1.46853" stroke-linejoin="round"></rect></svg>

                    <svg className='absolute hidden left-2 top-2 animate-bubble md:block' xmlns="http://www.w3.org/2000/svg" width="35" height="39" viewBox="0 0 35 39" fill="none"><circle cx="8.0489" cy="8.0489" r="7.07328" stroke="white" stroke-width="1.95125"></circle><circle cx="26.585" cy="15.8543" r="7.07328" stroke="white" stroke-width="1.95125"></circle><circle cx="29.5127" cy="33.4152" r="4.1464" stroke="white" stroke-width="1.95125"></circle></svg>
                    
                    <img className='absolute hidden right-0 top-2 animate-bubble md:block' src={bookIcon} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero