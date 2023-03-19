import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEditBookMutation } from '../features/api/apiSlice';
import Error from './ui/Error';

const Form = ({ book }) => {
    const [editBook, { isLoading, isError, isSuccess, reset }] = useEditBookMutation();

    const [bookData, setBookData] = useState({
        name: book.name,
        author: book.author,
        thumbnail: book.thumbnail,
        price: book.price,
        rating: book.rating,
        featured: book.featured,
        id: book.id,
    })
    const navigate = useNavigate();
    const handleChange = (e) => {
        setBookData(pre => ({ ...pre, [e.target.name]: e.target.type === "number" ? Number(e.target.value) : e.target.value }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        editBook(bookData).unwrap().then(() => navigate("/"))

    }

    return (
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
            {(!isLoading && isError) && <Error message="Error updating data!" />}

            <button disabled={isLoading} type="submit" className="submit" id="lws-submit">{isLoading ? "Saving..." : "Save"}</button>
        </form>
    )
}

export default Form