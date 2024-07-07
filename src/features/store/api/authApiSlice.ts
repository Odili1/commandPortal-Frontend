import { apiSlice } from "./apiSlice";



const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials)=>({
                url: '/auth/login',
                method: 'POST',
                body: {
                    ...credentials
                }
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/logout',
                method: 'POST'
            })
        })
    })
})



export const {
    useLoginMutation,
    useLogoutMutation
} = authApiSlice

export default authApiSlice
