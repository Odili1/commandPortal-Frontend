export interface IStudent{
    id: number,
    userId: string,
    avatar: string,
    firstName: string,
    middleName?: string,
    lastName: string,
    age?: string,
    gender?: string,
    dateOfBirth?: Date,
    address?: string,
    stateOfOrigin?: string,
    user: {
        avatar?: string,
        email?: string,
        phoneNumber?: string,
        lastLogin: Date,
        updatedAt: Date,
        createdAt: Date
    },
    classDetails?: {
        name: string,
        formTeacher: string
    },
    subjects?: []
}