import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HomeItems,StoreItems,IsAuthenticated } from './API_DataTypes';

export const  E_CommerceApi = createApi({
    reducerPath:'API',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:7000',
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

        getAuthState:build.query<IsAuthenticated,string>({
            query:()=>({
                url:`checkUserAuthentication`
            })
        }),

    })
})

const {useGetHomeDataQuery,useGetStoreDataQuery,useGetAuthStateQuery} = E_CommerceApi

export {
    useGetHomeDataQuery,
    useGetStoreDataQuery,
    useGetAuthStateQuery
}