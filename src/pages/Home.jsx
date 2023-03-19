import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import { useGetBooksQuery } from '../features/api/apiSlice';
import { applyFilter } from '../features/filter/filterSlice';


const Home = () => {
  const { isLoading, isError, error, data: books } = useGetBooksQuery();
  const { filter, search } = useSelector(state => state.filter)
  const dispatch = useDispatch();

  // render on ui
  let content = [];
  if (isLoading) content = <p>Loading...</p>
  if (isError) content = error?.error.split(":")[1] || "Error occured while loading data"
  if (!isLoading && !isError && books.length < 1) content = "No books found!"
  if (!isLoading && !isError && books.length > 0) {
    content = books
      .filter(book => filter === "featured" ? book.featured : book)
      .filter(book => book.name.toLowerCase().includes(search))
      .map(book => <Book book={book} key={book.id} /> )

  }

  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        {/* Header part  */}
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button onClick={() => dispatch(applyFilter("all"))} className={`${filter === "all" && "active-filter"} lws-filter-btn`}>All</button>
            <button onClick={() => dispatch(applyFilter("featured"))} className={`${filter === "featured" && "active-filter"} lws-filter-btn`}>Featured</button>
          </div>
        </div>
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
         {content}
         {(!isLoading && !isError && content.length < 1) && "No books found" }
        </div>
      </div>
    </main>
  )
}

export default Home