import { formatDate } from "../../features/helpers/date.helper";
import {
  CheckRole,
  userDataType,
} from "../../features/helpers/typeGuards.helper";

const UserDetails = ({ userData }: { userData: userDataType | null }) => {
  if (!userData) {
    console.log(`UserDetailsComponent: NO USER`);

    return <div>No user data available.</div>;
  }

  console.log(
    `UserDetailsComponent: ${JSON.stringify(
      formatDate(userData.user.lastLogin)
    )}`
  );
  console.log(`UserDetailsComponent: ${typeof userData.user.lastLogin}`);
  console.log(`UserDetailsComponent: ${JSON.stringify(userData.user)}`);

  let user = {};

  if (CheckRole.isAdmin(userData)) {
    user = {
      "User ID:": userData.userId,
      "First Name:": userData.firstName,
      "Last Name:": userData.lastName,
      "Email:": userData.user.email || "null",
      "Phone Number:": userData.user.phoneNumber || "null",
      "Last Login": formatDate(userData.user.lastLogin) || "null",
      "Last Update": formatDate(userData.user.updatedAt) || "null",
      Joined: formatDate(userData.user.createdAt) || "null",
    };
  }

  if (CheckRole.isTeacher(userData)) {
    user = {
      "User ID:": userData.userId,
      "First Name:": userData.firstName,
      "Last Name:": userData.lastName,
      "Form Class:": userData.formClass || "null",
      "Email:": userData.user.email || "null",
      "Phone Number:": userData.user.phoneNumber || "null",
      "Last Login": formatDate(userData.user.lastLogin) || "null",
      "Last Update": formatDate(userData.user.updatedAt) || "null",
      Joined: formatDate(userData.user.createdAt) || "null",
    };
  }

  if (CheckRole.isStudent(userData)) {
    user = {
      "User ID:": userData.userId,
      "First Name:": userData.firstName,
      "Middle Name:": userData.middleName || "null",
      "Last Name:": userData.lastName,
      "Age:": userData.age?.toString() || "null",
      Gender: userData.gender || "null",
      "Date of Birth:": userData.dateOfBirth || "null",
      "State of Origin:": userData.stateOfOrigin || "null",
      "Address:": userData.address || "null",
      "Email:": userData.user.email || "null",
      "Phone Number:": userData.user.phoneNumber || "null",
      "Last Login": formatDate(userData.user.lastLogin) || "null",
      "Last Update": formatDate(userData.user.updatedAt) || "null",
      Joined: formatDate(userData.user.createdAt) || "null",
    };
  }

  console.log(`UserDetailsComponent: ${JSON.stringify(user)}`);

  return (
    <>
      {Object.entries(user).map(([key, value], i) => (
        <tr key={i}>
          <th>{key}</th>
          <td>{value as React.ReactNode}</td>
        </tr>
      ))}
    </>
  );
};

export default UserDetails;
