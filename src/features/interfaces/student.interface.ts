export interface IStudent{
    id: number,
    userId: string,
    avatar: string,
    firstName: string,
    middleName?: string,
    lastName: string,
    age?: string,
    gender?: string,
    dateOfBirth?: string,
    address?: string,
    stateOfOrigin?: string,
    user: {
        avatar?: string,
        email?: string,
        phoneNumber?: string,
        lastLogin: string | Date,
        updatedAt: string | Date,
        createdAt: string | Date
    },
    classDetails?: {
        name: string,
        formTeacher: string
    },
    subjects?: []
}