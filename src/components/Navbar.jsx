import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { applySearch } from '../features/filter/filterSlice'

const Navbar = () => {
    const { search } = useSelector(state => state.filter)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [input, setInput] = useState(search)





    const handleSubmit = e => {
        e.preventDefault();
        dispatch(applySearch(input))
        navigate("/")

    }

    return (
        <nav className="py-4 2xl:px-6">
            <div className="container flex items-center justify-between">
                <Link to="/">
                    <img src={logo} width="150px" className="object-contain" />
                </Link>

                <ul className="hidden md:flex items-center space-x-6">
                    <NavLink to="/" className=" cursor-pointer" id="lws-bookStore">
                        <li>Book Store</li>
                    </NavLink>
                    <NavLink to="/new-book" className="cursor-pointer " href="AddBook.html" id="lws-addBook">
                        <li>Add Book</li>
                    </NavLink>
                </ul>

                {/* search bar  */}
                <form onSubmit={handleSubmit} className="flex items-center">
                    <div className="group relative rounded-md bg-white">
                        <svg width="20" height="20" fill="currentColor"
                            className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z">
                            </path>
                        </svg>
                        <input
                            value={input}
                            onChange={e => setInput(e.target.value.toLocaleLowerCase())}
                            type="text" placeholder="Filter books..." className="search" id="lws-search" />
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default Navbar