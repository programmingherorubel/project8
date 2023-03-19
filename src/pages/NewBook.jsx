import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateBookMutation } from '../features/api/apiSlice';

const NewBook = () => {
  const [addBook, { isLoading, isError, isSuccess }] = useCreateBookMutation();

  const [bookData, setBookData] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBookData(pre => ({ ...pre, [e.target.name]: e.target.type === "number" ? Number(e.target.value) : e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    addBook(bookData).unwrap().then(() => navigate("/"))
  }

  // useEffect(() => {
  //   if (isSuccess) navigate("/")
  // }, [isSuccess])
  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
          <form onSubmit={handleSubmit} className="book-form">
            <div className="space-y-2">
              <label htmlFor="lws-bookName">Book Name</label>
              <input
                value={bookData.name}
                onChange={handleChange}
                required className="text-input" type="text" id="lws-bookName" name="name" />
            </div>

            <div className="space-y-2">
              <label htmlFor="lws-author">Author</label>
              <input
                value={bookData.author}
                onChange={handleChange}
                required className="text-input" type="text" id="lws-author" name="author" />
            </div>

            <div className="space-y-2">
              <label htmlFor="lws-thumbnail">Image Url</label>
              <input
                value={bookData.thumbnail}
                onChange={handleChange}
                required className="text-input" type="text" id="lws-thumbnail" name="thumbnail" />
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
              <div className="space-y-2">
                <label htmlFor="lws-price">Price</label>
                <input
                  value={bookData.price}
                  onChange={handleChange}
                  required className="text-input" type="number" id="lws-price" name="price" />
              </div>

              <div className="space-y-2">
                <label htmlFor="lws-rating">Rating</label>
                <input
                  value={bookData.rating}
                  onChange={handleChange}
                  required className="text-input" type="number" id="lws-rating" name="rating" min="1"
                  max="5" />
              </div>
            </div>

            <div className="flex items-center">
              <input
                checked={bookData.featured}
                onChange={e => setBookData(pre => ({ ...pre, featured: e.target.checked }))}
                id="lws-featured" type="checkbox" name="featured" className="w-4 h-4" />
              <label htmlFor="lws-featured" className="ml-2 text-sm"> This is a featured book </label>
            </div>
            {(!isLoading && isError) && "An error occured while creating book"}
            <button disabled={isLoading} type="submit" className="submit" id="lws-submit">{isLoading ? "Saving..." : "Save"}</button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default NewBook