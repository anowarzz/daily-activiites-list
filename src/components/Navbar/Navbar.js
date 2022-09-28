import React from 'react';
import logo from '../../images/routine.png'

const Navbar = () => {
    return (
        <div className='bg-stone-500 py-3'>

            <div className='flex items-center text-white '>

            <img src={logo} alt="" className='w-20 ml-4' />
            <h2 className='lg:text-6xl text-center pl-3 sm:text-2xl'>This is the navbar</h2>

            </div>

        </div>
    );
};

export default Navbar;