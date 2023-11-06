import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HomeItems,StoreItems,IsAuthenticated } from './API_DataTypes';

export const  E_CommerceApi = createApi({
    reducerPath:'API',
    baseQuery: fetchBaseQuery({
        baseUrl: '/',
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


    })
})

const {useGetHomeDataQuery,useGetStoreDataQuery} = E_CommerceApi

export {
    useGetHomeDataQuery,
    useGetStoreDataQuery,
}