import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (request) => {
        if (!request || request === undefined) {
          return '/character';
        } else {
          return `/character/?name=${request}`;
        }
      },
    }),
  }),
});

export const { useGetCharactersQuery } = apiSlice;
