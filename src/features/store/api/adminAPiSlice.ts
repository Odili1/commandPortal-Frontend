import { apiSlice } from "./apiSlice";





const adminApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAdminById: builder.mutation({
            query: (id) =>  `/admin/${id}`
        }),
        updateAdmin: builder.mutation({
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
    useUpdateAdminMutation
} = adminApiSlice

export default adminApiSlice