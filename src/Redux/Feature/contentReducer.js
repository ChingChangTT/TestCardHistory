// src/contentReducer.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contentApi = createApi({
  reducerPath: 'contentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://136.228.158.126:50003/api/' }),
  endpoints: (builder) => ({
    getAllContent: builder.query({
      query: () => 'contents/all_content/',
    }),
  }),
});

export const { useGetAllContentQuery } = contentApi;
