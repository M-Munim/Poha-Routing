import React from 'react'
import Bio from './Subjects/Bio'
import Physics from './Subjects/Physics'
import Chem from './Subjects/Chem'

const Dashmain = () => {
    return (
        <div className='h-screen w-full bg-red-300'>
            <h2>Dashboard Main Content</h2>
            <div className=" flex w-10/12 m-auto items-center justify-between">
                <Bio />
                <Chem />
                <Physics />
            </div>
        </div>
    )
}

export default Dashmain