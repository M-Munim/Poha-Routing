import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="nav w-10/12 bg-blue-400 m-auto flex justify-between">
            <div className="w-7/12 flex">
                <div className="img w-1/3">
                    <p>Logo</p>
                </div>

                <div className="Links w-2/3">
                    <nav>
                        <ul className='flex gap-4'>
                            <li>
                                <NavLink to="/" className={({ isActive }) => `hover:text-red-400 ${isActive ? "text-red-200" : "text-black"}`}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => `hover:text-red-400 ${isActive ? "text-red-200" : "text-black"}`}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => `hover:text-red-400 ${isActive ? "text-red-200" : "text-black"}`}>Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="w-5/12 flex items-center justify-end">
                <div className="button">Click</div>
            </div>
        </div>
    )
}

export default Header