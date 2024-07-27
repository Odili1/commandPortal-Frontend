import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logoutUser } from "../slices/authSlice";




const baseQuery = fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (headers, {getState}) => {
        const token = (getState() as RootState).auth.userInfo?.userId

        if (token) {
            headers.set('Authorization', `Bearer ${token}`)
        }

        return headers
    },
    credentials: 'include'
})

const baseQueryWithReauth = async(
    args: string | FetchArgs, 
    api: BaseQueryApi, 
    extraOptions: object) => {
        console.log(`Making API Request: ${args}`);
        console.log(`API URl: ${JSON.stringify(api)}`);
        
    const result = await baseQuery(args, api, extraOptions)
    console.log(`API Response: ${JSON.stringify(result)}`);
        

    if (result.error && (result.error as FetchBaseQueryError).status === 401){
        // Dispatch logout
        api.dispatch(logoutUser())

        // Redirect to login
        window.location.href = '/login'
    }

    return result
}


// eslint-disable-next-line no-unused-vars
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({})
})

