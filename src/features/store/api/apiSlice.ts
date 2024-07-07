import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";



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


// eslint-disable-next-line no-unused-vars
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery,
    endpoints: (builder) => ({})
})

