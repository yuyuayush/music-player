import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
    export const shazamCoreApi = createApi({
        reducerPath:'shazamCoreApi',
        baseQuery:fetchBaseQuery({
          baseUrl:"https://shazam.p.rapidapi.com/",
          prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key','6de3f32d6dmsh36760cb9edfe55ep181fcejsnede38b997927');
            
            return headers;
          },
        }),
        endpoints:(builder)=>({
getTopCharts:builder.query({query:()=>'/charts/track'}),
getTopDetails:builder.query({query:({songid})=>`/songs/get-details?key=${songid}`}),
getSongRelated:builder.query({query:({id})=>`/songs/get-related-artist?id=${id}`}),
getArtistDetails:builder.query({query:(id)=>`/artists/get-top-songs?id=${id}`}),
getAritst:builder.query({query:(id)=>`/artists/get-details?id=${id}`}),
getTopAritst:builder.query({query:(id)=>`/songs/list-artist-top-tracks?id=${id}`}),
getSearch:builder.query({query:(term)=>`/search?term=${term}`}),

        })
    });
  export const{ useGetTopChartsQuery,useGetTopDetailsQuery,useGetSongRelatedQuery,useGetArtistDetailsQuery,useGetAritstQuery,useGetTopAritstQuery,useGetSearchQuery}=shazamCoreApi;