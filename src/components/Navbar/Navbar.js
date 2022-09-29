import React from 'react';
import './Navbar.css'
import logo from '..//..//images/routine2.png'

const Navbar = () => {
    return (
        <div className='flex items-center'>
            <img src={logo} alt="" className='w-28  p-4'/>
            <h3 className='text-3xl font-bold'>Daily Activities</h3>
        </div>
    );
};

export default Navbar;