import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HomeItems,StoreItems,IsAuthenticated } from './API_DataTypes';

export const  E_CommerceApi = createApi({
    reducerPath:'API',
    baseQuery: fetchBaseQuery({
        baseUrl: '',
    }),

    endpoints: (build) => ({
        getHomeData:build.query<HomeItems,string>({
            query:(route)=>({
                url: `${route}`
            })
        }),

        getStoreData:build.query<StoreItems,string>({
            query:(route)=>({
                url: `${route}`
            })
        }),

        getAuthState:build.mutation<IsAuthenticated,string>({
            query:(token)=>({
                url:`auth/checkUserAuthentication`,
                method: 'POST',
                body:JSON.stringify({token:token})               
            })
        }),

    })
})

const {useGetHomeDataQuery,useGetStoreDataQuery,useGetAuthStateMutation} = E_CommerceApi

export {
    useGetHomeDataQuery,
    useGetStoreDataQuery,
    useGetAuthStateMutation
}