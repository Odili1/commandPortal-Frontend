import { apiSlice } from "./apiSlice";





const adminApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAdminById: builder.mutation({
            query: (id) =>  `/admin/${id}`
        })
    })
})


export const {
    useGetAdminByIdMutation
} = adminApiSlice

export default adminApiSlice