// import { useCallback, useState } from "react";
import { useEffect, useState } from "react";
import TableRow from "../../../components/dashboard/TableRow";
import Spinner from "../../../components/Spinner";
import { IUser } from "../../../features/interfaces/user.interface";
import { useGetAllUsersQuery } from "../../../features/store/api/usersApiSlice";
import BackButton from "../../../components/BackButton";

const AllUsersPage = () => {
  const [users, setUsers] = useState<IUser[] | null>(null);

  const { data, isLoading } = useGetAllUsersQuery();
  // const users: Iuser[] = data ?? []
  useEffect(() => {
    setUsers(data ?? []);
  }, [data]);
  console.log(`AllUsersPage: ${JSON.stringify(users)}`);
  console.log(`AllUsersPage: typeof: ${typeof users}`);

  return (
    <>
      {/* Title Header */}
      <div className="w-[90%] md:w-[85%] mx-auto">
        <div className="contaier flex items -center justify-between gap-x-8 w-full md:w -[85%] mx -auto mb -8">
          <div className="w-[80%] flex items-center">
            <div className="h-8  w-2 bg-standardBlue mr-2 md:mr-3 md:h-9"></div>
            <h2 className="text-2xl  text-darkerTrans font-bold md:text-3xl">
              All Users
            </h2>
          </div>
          <div>
            <input
              className="py-2 px-6 align-middle rounded-full bg-gray-200 shadow-inner text-xl outline-none w-[90%] md:w-[80%] text-gray-600"
              placeholder="Search"
            />
          </div>
        </div>
        <BackButton />
      </div>
      <div className="w-full h-full mt-2 md:mt-8">
        {isLoading ? (
          <Spinner loading={isLoading} />
        ) : (
          <div className="container relative w-[100%] pt-5">
            <div className="overflow-auto whitespace-nowrap max-w-[90%] md:max-w-[85%] mx-auto">
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
                  {users && users.length > 0 ? (
                    users.map((user, index: number) => {
                      return <TableRow key={index} user={user} index={index} />;
                    })
                  ) : (
                    <div>No Users Found</div>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AllUsersPage;
