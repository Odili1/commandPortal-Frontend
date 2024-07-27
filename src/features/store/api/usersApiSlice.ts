import { IUser } from "../../interfaces/user.interface";
import { apiSlice } from "./apiSlice";



const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchUser: builder.mutation({
            query: ({id}) => ({
                url: `/user/${id}`
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
        getAllUsers: builder.query<IUser[], void>({
            query: () => ({
                url: `/user/all`
            })
        })
    })
})

export const {
    useFetchUserMutation,
    useGetAllUsersQuery,
    useChangeUserPasswordMutation
} = usersApiSlice


export default usersApiSlice