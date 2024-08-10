// import { useCallback, useState } from "react";
import { useCallback, useEffect, useState } from "react";
import TableRow from "../../../components/dashboard/TableRow";
import Spinner from "../../../components/Spinner";
import { IUser } from "../../../features/interfaces/user.interface";
import BackButton from "../../../components/BackButton";
import { useAppSelector } from "../../../features/store/hooks";
import { selectAdminDashboardDataForUsers } from "../../../features/store/slices/adminSlice";

const AllUsersPage = () => {
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const usersData: IUser[] = useAppSelector(selectAdminDashboardDataForUsers)


  console.log(`AllUsersPage: ${JSON.stringify(users)}`);
  console.log(`AllUsersPage: typeof: ${typeof users}`);

  const filterUsers = useCallback(() => {
    if (!searchQuery){
      setUsers(usersData)
      return 
    }

    const regex = new RegExp(searchQuery, 'i')
    const filteredData = usersData.filter((user) => {
      return 'admin' in user && regex.test(user.userId) || regex.test(user.admin?.firstName || '') || regex.test(user.admin?.lastName || '') || 'student' in user && regex.test(user.userId) || regex.test(user.student?.firstName || '') || regex.test(user.student?.lastName || '') || 'teacher' in user && regex.test(user.userId) || regex.test(user.student?.firstName || '') || regex.test(user.student?.lastName || '')
    })

    setUsers(filteredData)
  }, [usersData, searchQuery])
  
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }
  
  useEffect(() => {
    if (usersData && usersData.length > 0){
      setIsLoading(false)
      filterUsers()
    }
  }, [usersData, filterUsers])

  return (
    <>
      {/* Title Header */}
      <div className="w-[90%] md:w-[85%] mx-auto">
        <div className="contaier flex items -center justify-between gap-x-8 w-full md:w -[85%] mx -auto">
          <div className="w-[80%] flex items-center">
            <div className="h-6 w-2 bg-standardBlue mr-2 md:mr-3 md:h-9"></div>
            <h2 className="text-xl  text-darkerTrans font-bold md:text-3xl">
              All Users
            </h2>
          </div>
          <div>
            <input
            onChange={handleSearchInput}
              className="py-2 px-6 align-middle rounded-full bg-gray-200 shadow-inner text-xl outline-none w-[90%] md:w-[80%] text-gray-600"
              placeholder="Search"
            />
          </div>
        </div>
        <BackButton locationTo={'/ad/dashboard'}/>
      </div>
      <div className="w-full mt-2 md:mt-8">
        {isLoading ? (
          <Spinner loading={isLoading} />
        ) : (
          <div className="container relative w-[100%] pt-5">
            <div className="overflow-auto whitespace-nowrap max-w-[90%] md:max-w-[85%] mx-auto">
              {users && users.length > 0 ?
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
                    { (
                        users.map((user, index: number) => {
                          return <TableRow key={index} user={user} index={index} />;
                        })
                      ) 
                    }
                  </tbody>
                </table>
                : (
                  <div>No Users Found</div>
                )
              }
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AllUsersPage;
