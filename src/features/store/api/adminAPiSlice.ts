import { PasswordFormDataType, UpdateProfileFormDataType } from "../../helpers/typeGuards.helper";
import { IAdmin } from "../../interfaces/admin.interface";
import { apiSlice } from "./apiSlice";





const adminApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
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
    useGetAllAdminQuery
} = adminApiSlice

export default adminApiSlice