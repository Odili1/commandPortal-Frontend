import NavList from "./NavList"


const Sidebar = () => {
    const nameClass =  ({isActive}: {isActive: boolean}) => {
        return isActive ? 'text-standardBlue py-3 pl-3 mb-5 bg-blue-100 font-bold rounded-md border-b-2' : 'text-fontGrayColor py-3 pl-3 mb-5 font-medium rounded-md border-b-2 hover:text-standardBlue font-semibold'
    }

  return (
    <div className="bg-backgroundColor shadow-md border-r-2">
        <div className="container mx-auto h-[100vh] overflow-y-scroll">
            <div className="flex flex-col px-4 pt-10 text-gray-700 justify-between text-lg font-medium">
                <NavList nameClass={nameClass} />
            </div>
        </div>
    </div>
  )
}

export default Sidebar