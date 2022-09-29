import React from 'react';

const AddBreak = ({selectedBreak}) => {



  
    return (
        <div>
            <h3 className='text-2xl font-semibold mt-8 pl-4'>Add A Break <span>(Minutes)</span></h3>

            <div className="mt-8  bg-gray-200 shadow-xl flex justify-around p-5 border rounded-lg mx-auto lg:w-[90%] md:w-[100%] sm:w-[90%] w-[90%] text-gray-800">
            
            <button onClick={(e) => selectedBreak(e)} className='py-2 px-4  bg-blue-300 rounded-full font-semibold'>10</button>

            <button onClick={(e) => selectedBreak(e)} className='p-2 px-4 bg-blue-300 rounded-full font-semibold'>20</button>

            <button onClick={(e) => selectedBreak(e)} className='p-2 px-4 bg-blue-300 rounded-full font-semibold'>30</button>

            <button onClick={(e) => selectedBreak(e)} className='p-2 px-4 bg-blue-300 rounded-full font-semibold'>40</button>

            <button onClick={(e) => selectedBreak(e)} className='p-2 px-4 bg-blue-300 rounded-full font-semibold'>60</button>

           
            </div>
        </div>
    );
};

export default AddBreak;