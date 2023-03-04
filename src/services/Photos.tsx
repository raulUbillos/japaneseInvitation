import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const photosApi = createApi({
    reducerPath: "photosApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://google-photos-album-demo2.glitch.me/"}),
    endpoints: (builder) => ({
        getPhotos: builder.query<string[], string>({
            query: (idAlbum) => `/${idAlbum}`
        })
    })
});

export const {useGetPhotosQuery} = photosApi
export default photosApi;