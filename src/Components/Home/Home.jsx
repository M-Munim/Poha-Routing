import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Home = () => {
    // const navigate = useNavigate();
    // const gotoDash = () => {
    //     navigate("/Dashmain")
    // }
    return (
        <>
            <div className='py-80 w-10/12 m-auto flex items-center justify-between h-96 bg-green-100'>
                <div className="left w-1/2">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque non nostrum voluptatibus ipsa iusto explicabo a sapiente quo neque? Modi numquam cupiditate commodi praesentium delectus id repudiandae aperiam, dolor temporibus.</p>
                </div>

                <div className="right">
                    {/* <button onClick={gotoDash} className='bg-red-200 py-2 px-3'> Move</button> */}
                    <NavLink to="/Dashmain">
                        <button className='bg-red-200 py-2 px-3'> Move</button>
                    </NavLink>
                </div>
            </div>

            <div className="h-96 bg-orange-200 ">
                <p className="text-4xl">About</p>
            </div>

            <div className="h-96 bg-red-200 ">
                <p className="text-4xl">Contact</p>
            </div>

            <div className="h-96 bg-purple-300 ">
                <p className="text-4xl">Contact</p>
            </div>
        </>
    )
}

export default Home