import React from 'react';
import logo from '../../images/routine.png'

const Navbar = () => {
    return (
        <div>

            <div className='flex items-center'>

            <img src={logo} alt="" className='w-20 ml-4 pt-3' />
            <h2 className='lg:text-4xl text-center pl-3 sm:text-2xl font-bold'>My Daily Activities</h2>

            </div>
        <hr className='mt-2'/>
        </div>
    );
};

export default Navbar;