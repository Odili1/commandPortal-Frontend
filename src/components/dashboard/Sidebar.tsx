import NavList from "./NavList"


const Sidebar = () => {
    const nameClass =  ({isActive}: {isActive: boolean}) => {
        return isActive ? 'text-blue-800 py-3 pl-3 mb-5 bg-blue-200 font-bold rounded-md text-xl border-b-2 border-gray-400' : 'text-fontGrayColor py-3 pl-3 mb-5 font-medium rounded-md border- b-2 text-xl hover:text-blue-600 font-semibold border-gray-300'
    }

  return (
    <div className="fixed bg-slate-200 left-0 right-[80%] h-full shadow-md border-none border-r-2 overflow-auto">
        <div className="container mx-auto h -[100vh]">
            <div className="flex flex-col px-4 pt-10 text-gray-700 justify-between text-lg font-medium">
                <NavList nameClass={nameClass} />
            </div>
        </div>
    </div>
  )
}

export default Sidebar