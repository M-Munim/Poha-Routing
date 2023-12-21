import React from 'react'
import { NavLink } from 'react-router-dom'

const Chem = () => {
    return (
        <NavLink to='/Dashmain/chempracticals'>
            <div className='w-60 h-56 bg-red-100'>
                Chemistry
            </div>
        </NavLink>
    )
}

export default Chem