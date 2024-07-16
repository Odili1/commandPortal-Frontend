export interface ITeacher{
    id: number,
    userId: string,
    avatar?: string
    firstName: string,
    lastName: string,
    formClass?: string,
    user: {
        avatar?: string,
        email?: string,
        phoneNumber?: string,
        lastLogin: Date,
        updatedAt: Date,
        createdAt: Date
    },
    classDetails?: [],
    subjects?: []
}