import React from 'react'
import { Link } from 'react-router-dom'
import { useDeleteBookMutation } from '../features/api/apiSlice'
import { Delete, Edit, Loader1, Star } from './Icons'

const Book = ({ book }) => {
    const { name, author, thumbnail, price, rating, featured, id } = book || {}
    const [deleteBook, { isLoading, isError, isSuccess }] = useDeleteBookMutation();
    return (
        <div className="book-card">
            <img className="h-[240px] w-[170px] object-cover"
                src={thumbnail} alt="book" />
            <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
                <div className="flex items-center justify-between">
                    {featured && <span className="lws-badge">featured</span>}
                    <div className="text-gray-500 flex space-x-2 " style={{ marginLeft: "auto" }}>
                        <Link to={`/edit-book/${id}`} className="lws-edit ">
                            <Edit />
                        </Link>
                        <button disabled={isLoading} onClick={() => deleteBook(id)} className="lws-deleteBook">
                            {isLoading ? <Loader1 /> : <Delete />}

                        </button>
                    </div>
                </div>

                <div className="space-y-2 mt-4 h-full">
                    <h4 className="lws-book-name">{name}</h4>
                    <p className="lws-author">{author}</p>
                    <div className="lws-stars">
                        {[...Array(rating).keys()].map(rate => <Star key={rate} />)}
                    </div>
                    <p className="lws-price">BDT {price}</p>
                </div>
            </div>
        </div>
    )
}

export default Book

