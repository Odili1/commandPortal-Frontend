export interface IAdmin{
    id: number,
    userId: string,
    avatar: string,
    firstName: string,
    lastName: string,
    user: {
        avatar?: string,
        email: string,
        phoneNumber: string,
        lastLogin: string | Date,
        updatedAt: string | Date,
        createdAt: string | Date
    }
}