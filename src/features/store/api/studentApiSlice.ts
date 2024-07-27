import { PasswordFormDataType, UpdateProfileFormDataType } from "../../helpers/typeGuards.helper";
import { IStudent } from "../../interfaces/student.interface";
import { apiSlice } from "./apiSlice";





const adminApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getStudentById: builder.mutation({
            query: (id) =>  `/student/${id}`
        }),
        getAllStudents: builder.query<IStudent[], void>({
            query: () => `/student/all`
        }),
        updateStudent: builder.mutation<IStudent, {id: string, credentials: UpdateProfileFormDataType | PasswordFormDataType}>({
            query: ({id, credentials})=> ({
                url: `/student/update/${id}`,
                method: 'PUT',
                body: {
                    ...credentials
                }
            })
        })
    })
})


export const {
    useGetStudentByIdMutation,
    useGetAllStudentsQuery,
    useUpdateStudentMutation
} = adminApiSlice

export default adminApiSlice