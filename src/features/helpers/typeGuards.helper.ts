import { IAdmin } from "../interfaces/admin.interface"
import { IStudent } from "../interfaces/student.interface"
import { ITeacher } from "../interfaces/teacher.interface"
import { IUser } from "../interfaces/user.interface"
import { idToRole } from "./idToRole.helper"

export type userDataType = IAdmin | IStudent | ITeacher | null

export type UpdateProfileFormDataType = {
    userId: string;
    firstName: string;
    middleName?: string | '';
    lastName: string;
    gender?: string | '';
    formClass?: string | '';
    dateOfBirth?: string | '';
    address?: string | '';
    stateOfOrigin?: string | '';
    category?: string | '',
    user: {
        email?: string | '';
        phoneNumber?: string | '';
    }
};

export type PasswordFormDataType = {
    userId: string;
    newPassword: string;
    confirmPassword: string;
  };

// export type FormDataType = Partial<IAdmin> & Partial<ITeacher> & Partial<IStudent>;

export class CheckType {
    constructor(){}

    isIUser(user: IUser | userDataType): user is IUser{
        if (!user){
            return false
        }
        return 'avatar' in user && 'email' in user && 'phonenumber' in user
    }


}

class CheckUserRole {
    constructor(){}
    isAdmin(user: userDataType | IUser): user is IAdmin{
        if (!user){
            return false
        }
        const role = idToRole(user.userId || '')
        return role === 'admin'
    }

    isTeacher(user: userDataType | IUser): user is ITeacher{
        if (!user){
            return false
        }
        const role = idToRole(user.userId || '')
        return role === 'teacher'
    }

    isStudent(user: userDataType | IUser): user is IStudent{
        if (!user){
            return false
        }
        const role = idToRole(user.userId || '')
        return role === 'student'
    }
}



export const CheckRole = new CheckUserRole()