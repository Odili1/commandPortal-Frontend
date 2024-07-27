import { IAdmin } from "./admin.interface";
import { IStudent } from "./student.interface";
import { ITeacher } from "./teacher.interface";



export interface IUser{
    userId: string,
    avatar?: string,
    email: string,
    phoneNumber: string,
    lastLogin: string | Date,
    updatedAt: string | Date,
    createdAt: string | Date,
    admin: IAdmin | null,
    student: IStudent | null,
    teacher: ITeacher | null
}