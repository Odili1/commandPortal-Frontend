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
        changeUserPassword: builder.mutation({
            query: (credentials) => ({
                url: `/user/update`,
                method: 'PUT',
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
    useChangeUserPasswordMutation,
    useLogoutMutation
} = authApiSlice

export default authApiSlice
