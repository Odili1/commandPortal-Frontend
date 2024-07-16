import { apiSlice } from "./apiSlice";





const adminApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getStudentById: builder.mutation({
            query: (id) =>  `/student/${id}`
        })
    })
})


export const {
    useGetStudentByIdMutation
} = adminApiSlice

export default adminApiSlice