import React from 'react'
import { NavLink } from 'react-router-dom'

const Bio = () => {
    return (
        <NavLink to='/Dashmain/biopracticals'>
            <div className='w-60 h-56 bg-purple-100'>
                Bio
            </div>
        </NavLink>
    )
}

export default Bio