import {  useCallback, useEffect, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { IAdmin } from "../../../features/interfaces/admin.interface";
import Spinner from "../../../components/Spinner";
import TableRow from "../../../components/dashboard/TableRow";
import BackButton from "../../../components/BackButton";
import { Link } from "react-router-dom";
// import { useAppSelector } from "../../../features/store/hooks";
// import { selectAdminDashboardDataForAdmins } from "../../../features/store/slices/adminSlice";
import { useGetAllAdminQuery } from "../../../features/store/api/adminAPiSlice";


const AllAdminsPage = () => {
  const [admins, setAdmins] = useState<IAdmin[] | null>(null);
  // const [isLoading, setIsLoading] = useState<boolean>(true)
  const [searchQuery, setSearchQuery] = useState<string>('')
  // const adminsData: IAdmin[] = useAppSelector(selectAdminDashboardDataForAdmins)
  const {data: adminsData, isLoading} = useGetAllAdminQuery() || null

  
  console.log(`AllAdminPage: ${JSON.stringify(admins)}`);
  console.log(`AllAdminPage: typeof: ${typeof admins}`);
  
  const filterAdmins = useCallback(() => {
    if (!searchQuery){
      setAdmins(adminsData || null)
      return 
    }

    const regex = new RegExp(searchQuery, 'i')
    const filteredData = adminsData?.filter((admin) => regex.test(admin.userId) || regex.test(admin.firstName) || regex.test(admin.lastName))

    setAdmins(filteredData || null)
  }, [adminsData, searchQuery])
  
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }
  
  useEffect(() => {
    if (adminsData && adminsData.length > 0){
      // setIsLoading(false)
      filterAdmins()
    }
  }, [adminsData, filterAdmins])

  return (
    <>
      {/* Title Header */}
      <div className="w-[90%] md:w-[85%] mx-auto">
        <div className="contaier flex flex-wrap items-center justify-between gap-x-8 mb -8">
          <div className="w -[50%] flex items-center">
            <div className="h-6  w-2 bg-standardBlue mr-2 md:mr-3 md:h-9"></div>
            <h2 className="text-xl  text-darkerTrans font-bold md:text-3xl">
              All Admins
            </h2>
          </div>
          <div className="flex justify-between gap-x-14 mt-7 md:mt-0">
            <div className="w -[100%]">
              <input onChange={handleSearchInput}
                className="py-3 px-7 w-full rounded-full bg-gray-200 shadow-inner text-sm md:text-xl outline-none md:w-[80%] text-gray-600"
                placeholder="Search"
              />
            </div>
            <div className="w-[50%] md:w-[30%]">
              <Link to={'/admin/create-new-admin'} className="p-3 bg-green-700 flex items-center gap-x-2 rounded-2xl text-xs md:text-lg font-semibold text-gray-200 transition-colors delay-75 duration-300 hover:bg-green-900">
                <FaCirclePlus fontSize={"18px"} />
                New Admin
              </Link>
            </div>
          </div>
        </div>
        <BackButton locationTo={'/ad/dashboard'}/>
      </div>
      <div className="w-full mt-6 md:mt-8">
        {isLoading ? (
          <Spinner loading={isLoading} />
        ) : (
          <div className="container relative w-[100%] pt-5">
            <div className="overflow-auto whitespace-nowrap max-w-[90%] md:max-w-[85%] mx-auto">
            {admins && admins.length > 0 ? 
            <table className="w-[100%] text-left text-md md:text-lg table border-spacing-x-3 md:border-spacing-x-14 border-spacing-y-6 border-separate md:border-spacing-y-8">
                <thead className="font-semibold text-lg">
                  <tr>
                    <th></th>
                    <th>User ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="">
                      {admins.map((user, index: number) => (<TableRow key={index} user={user} index={index} />
                      ))} 
                </tbody>
              </table>
              : (
                <div>No Admins Found</div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AllAdminsPage;
