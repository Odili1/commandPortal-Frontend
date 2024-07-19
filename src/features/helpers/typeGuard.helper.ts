import { IAdmin } from "../interfaces/admin.interface"
import { IStudent } from "../interfaces/student.interface"
import { ITeacher } from "../interfaces/teacher.interface"
import { idToRole } from "./idToRole.helper"

export type userDataType = IAdmin | IStudent | ITeacher | null

export type FormDataType = {
    userId: string;
    firstName: string;
    middleName?: string | '';
    lastName: string;
    gender?: string | '';
    email?: string | '';
    phoneNumber?: string | '';
    formClass?: string | '';
    dateOfBirth?: string | '';
    address?: string | '';
    stateOfOrigin?: string | '';
};

// export type FormDataType = Partial<IAdmin> & Partial<ITeacher> & Partial<IStudent>;

class CheckUserRole {
    constructor(){}
    isAdmin(user: userDataType): user is IAdmin{
        if (!user){
            return false
        }
        const role = idToRole(user.userId)
        return role === 'admin'
    }

    isTeacher(user: userDataType): user is ITeacher{
        if (!user){
            return false
        }
        const role = idToRole(user.userId)
        return role === 'teacher'
    }

    isStudent(user: userDataType): user is IStudent{
        if (!user){
            return false
        }
        const role = idToRole(user.userId)
        return role === 'student'
    }
}

export const CheckRole = new CheckUserRole()