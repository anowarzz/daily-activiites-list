import React from 'react';

const AddBreak = () => {
    return (
        <div>
            <h3 className='text-2xl font-semibold mt-8 pl-4'>Add A Break</h3>

            <div className="mt-8  bg-gray-200 shadow-xl flex justify-around p-5 border rounded-lg mx-auto lg:w-[90%] md:w-[100%] sm:w-[90%] w-[90%] text-gray-800">
            
            <button className='p-2  bg-blue-300 rounded-full font-semibold'>10m</button>
            <button className='p-2  bg-blue-300 rounded-full font-semibold'>20m</button>
            <button className='p-2  bg-blue-300 rounded-full font-semibold'>30m</button>
            <button className='p-2  bg-blue-300 rounded-full font-semibold'>40m</button>
            <button className='p-2  bg-blue-300 rounded-full font-semibold'>60m</button>

           
            </div>
        </div>
    );
};

export default AddBreak;