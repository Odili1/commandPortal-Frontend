import { PasswordFormDataType, UpdateProfileFormDataType } from "../../helpers/typeGuards.helper";
import { IAdmin } from "../../interfaces/admin.interface";
import { apiSlice } from "./apiSlice";

type NewAdminType = {
    firstName: string,
    lastName: string,
    user: {
        email: string,
        phoneNumber: string,
        password: string,
        confirmPassword?: string
    }
}



const adminApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createAdmin: builder.mutation<IAdmin, NewAdminType>({
            query: (credentials) => ({
                url: `/admin/new-admin`,
                method: 'POST',
                body: {
                    ...credentials
                }
            }) 
        }),
        getAdminById: builder.mutation({
            query: (id) =>  `/admin/${id}`
        }),
        getAllAdmin: builder.query<IAdmin[], void>({
            query: () => `/admin/all`
        }),
        updateAdmin: builder.mutation<IAdmin, {id: string, credentials: UpdateProfileFormDataType | PasswordFormDataType}>({
            query: ({id, credentials})=> ({
                url: `/admin/update/${id}`,
                method: 'PUT',
                body: {
                    ...credentials
                }
            })
        })
    })
})


export const {
    useGetAdminByIdMutation,
    useUpdateAdminMutation,
    useGetAllAdminQuery,
    useCreateAdminMutation
} = adminApiSlice

export default adminApiSlice