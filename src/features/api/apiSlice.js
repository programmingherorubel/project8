import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000' }),
    tagTypes: ["books", "book"],
    endpoints: builder => ({
        createBook: builder.mutation({
            query: (data) => ({
                url: "/books",
                body: data,
                method: "POST",
            }),
            invalidatesTags: ["books"]
        }),
        getBooks: builder.query({
            query: () => "/books",
            providesTags: ["books"]
        }),
        getBook: builder.query({
            query: (id) => `/books/${id}`,
            providesTags: ["book"]
        }),
        editBook: builder.mutation({
            query: (data) => ({
                url: `/books/${data.id}`,
                body: data,
                method: "PATCH"
            }),
            invalidatesTags: ["book", "books"]
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE",

            }),
            invalidatesTags: ["books"]
        }),
    })
})

export default apiSlice;
export const {
    useCreateBookMutation,
    useGetBooksQuery,
    useGetBookQuery,
    useEditBookMutation,
    useDeleteBookMutation
} = apiSlice;