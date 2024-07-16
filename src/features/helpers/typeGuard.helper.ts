import { IAdmin } from "../interfaces/admin.interface"
import { IStudent } from "../interfaces/student.interface"
import { ITeacher } from "../interfaces/teacher.interface"
import { idToRole } from "./idToRole.helper"

export type userDataType = IAdmin | IStudent | ITeacher

class CheckUserRole {
    constructor(){}
    isAdmin(user: userDataType): user is IAdmin{
        const role = idToRole(user.userId)
        return role === 'admin'
    }

    isTeacher(user: userDataType): user is ITeacher{
        const role = idToRole(user.userId)
        return role === 'teacher'
    }

    isStudent(user: userDataType): user is IStudent{
        const role = idToRole(user.userId)
        return role === 'student'
    }
}

export const CheckRole = new CheckUserRole()