export interface IUserInfo{
    userId: string,
    token: string
}

export interface IError{
    data: {
        message: string,
        error: string,
        statusCode: number
    },
    status: number
}