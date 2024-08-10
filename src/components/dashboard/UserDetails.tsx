import { formatDate, formatDateWithTime } from "../../features/helpers/date.helper";
import {
  CheckRole,
  userDataType,
} from "../../features/helpers/typeGuards.helper";

const UserDetails = ({ userData }: { userData: userDataType | null }) => {
  if (!userData) {
    console.log(`UserDetailsComponent: NO USER`);

    return <div>No user data available.</div>;
  }

  console.log(`UserDetailsComponent: ${typeof userData}`);
  console.log(`UserDetailsComponent: ${JSON.stringify(userData)}`);

  console.log(
    `UserDetailsComponent: ${JSON.stringify(
      formatDate(userData.user.lastLogin)
    )}`
  );

  let user = {};

  if (CheckRole.isAdmin(userData)) {
    user = {
      "User ID:": userData.userId,
      "First Name:": userData.firstName || "null",
      "Last Name:": userData.lastName || "null",
      "Email:": userData.user.email || "null",
      "Phone Number:": userData.user.phoneNumber || "null",
      "Last Login": formatDateWithTime(userData.user.lastLogin) || "null",
      "Last Update": formatDateWithTime(userData.user.updatedAt) || "null",
      Joined: formatDateWithTime(userData.user.createdAt) || "null",
    };
  }

  if (CheckRole.isTeacher(userData)) {
    user = {
      "User ID:": userData.userId,
      "First Name:": userData.firstName || "null",
      "Last Name:": userData.lastName || "null",
      "Form Class:": userData.formClass || "null",
      "Email:": userData.user.email || "null",
      "Phone Number:": userData.user.phoneNumber || "null",
      "Last Login": formatDateWithTime(userData.user.lastLogin) || "null",
      "Last Update": formatDateWithTime(userData.user.updatedAt) || "null",
      Joined: formatDateWithTime(userData.user.createdAt) || "null",
    };
  }

  if (CheckRole.isStudent(userData)) {
    user = {
      "User ID:": userData.userId,
      "First Name:": userData.firstName || "null",
      "Middle Name:": userData.middleName || "null",
      "Last Name:": userData.lastName || "null",
      "Age:": userData.age?.toString() || "null",
      "Gender": userData.gender || "null",
      "Date of Birth:": formatDate(userData.dateOfBirth || '') || "null",
      "State of Origin:": userData.stateOfOrigin || "null",
      "Address:": userData.address || "null",
      "Category:": userData.category || "null",
      "Email:": userData.user.email || "null",
      "Phone Number:": userData.user.phoneNumber || "null",
      "Last Login": formatDateWithTime(userData.user.lastLogin) || "null",
      "Last Update": formatDateWithTime(userData.user.updatedAt) || "null",
      "Joined": formatDateWithTime(userData.user.createdAt) || "null",
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
