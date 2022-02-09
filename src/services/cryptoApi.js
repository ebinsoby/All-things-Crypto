import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const CryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'a235a829b4mshdc70fd08ba979cdp1c66f5jsnb285d3f378a9'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: CryptoApiHeaders})


export const cryptoApi = createApi({
reducerPath:'cryptoApi',




baseQuery: fetchBaseQuery({baseUrl}),
endpoints: (builder) => ({
    getCryptos: builder.query({
        query: ()=>createRequest('/coins') 
    })
})
    
})

export const {
    useGetCryptosQuery,
} = cryptoApi;
