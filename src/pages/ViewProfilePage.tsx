import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import UserProfileDetails from "../components/dashboard/UserProfileDetails";
// import { useFetchUserMutation } from "../features/store/api/usersApiSlice";
import { useCallback, useEffect, useState } from "react";
import { userDataType } from "../features/helpers/typeGuards.helper";
import { IError } from "../features/interfaces/userInfo";
import { idToRoleTitleCase } from "../features/helpers/idToRole.helper";
import { toast } from "react-toastify";
import { useLoadUser } from "../hooks/useLoadUser";
import SubTitleHeaders from "../components/dashboard/titleHeaders/SubTitleHeaders";

const ViewPofilePage = () => {
  const { userId } = useParams<string>();
  const [userProfileData, setUserProfileData] = useState<userDataType | null>(
    null
  );
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const isLoading = useRef(true)

  // const [fetchUser, {isLoading}] = useFetchUserMutation()
  const loadUser = useLoadUser(userId || "");

  const fetchUserData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await loadUser();
      console.log(`viewProfile Response: ${JSON.stringify(response)}`);

      setUserProfileData(response);
    } catch (error: unknown) {
      console.log(`Login Catch Error: ${JSON.stringify(error)}`);
      // console.log(isLoading);
      const err = error as IError;

      if (err.status !== 500) {
        toast.error(err.data?.message);
      } else {
        navigate("/error", {
          state: {
            from: location,
            errorMsg: ["Ensure Internet connection", "Go back and try again"],
          },
        });
      }
    } finally {
      setIsLoading(false);
    }
  }, [navigate, loadUser]);

  useEffect(() => {
    console.log("View Profile Component");

    fetchUserData();
  }, [fetchUserData]);

  if (userProfileData) {
    // isLoading.current = false
  }

  return (
    <>
      {/* Title Header */}
      <SubTitleHeaders
        pageName={`View Profile - ${idToRoleTitleCase(userId || "")} - ${
          userProfileData?.lastName || ""
        }`}
      />
      <div className="container bg- slate-200 min -h-[100vh] w-[90%] md:w-[85%] mx-auto">
        {isLoading ? (
          <Spinner loading={isLoading} />
        ) : (
          <UserProfileDetails userData={userProfileData} />
        )}
      </div>
    </>
  );
};

export default ViewPofilePage;
