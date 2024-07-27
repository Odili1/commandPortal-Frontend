import { PasswordFormDataType, UpdateProfileFormDataType } from "../../helpers/typeGuards.helper";
import { ITeacher } from "../../interfaces/teacher.interface";
import { apiSlice } from "./apiSlice";



const teacherApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTeacherById: builder.mutation({
            query: (id) =>  `/teacher/${id}`
        }),
        getAllTeachers: builder.query<ITeacher[], void>({
            query: () => `/teacher/all`
        }),
        updateTeacher: builder.mutation<ITeacher, {id: string, credentials: UpdateProfileFormDataType | PasswordFormDataType}>({
            query: ({id, credentials})=> ({
                url: `/teacher/update/${id}`,
                method: 'PUT',
                body: {
                    ...credentials
                }
            })
        })
    })
})

export const {
    useGetTeacherByIdMutation,
    useGetAllTeachersQuery,
    useUpdateTeacherMutation
} = teacherApiSlice


export default teacherApiSlice