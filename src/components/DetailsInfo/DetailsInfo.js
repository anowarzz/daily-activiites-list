import React from 'react';
import myImage from  '../../images/myImage.png'

const DetailsInfo = () => {
    return (
        <div>

            {/* Personal Information */}

            <div className='m-3 flex w-96 justify-start items-center bg-gray-100'>
                <div className='w-1/3'>
                <img src={myImage} alt="" className=' rounded-full'/>
                </div>

                <div className='border'><h3 className='text-xl font-bold'>Anowar Hossain</h3>
                <p className='text-gray-400'>Cumilla, Bangladesh</p>
                </div>


            </div>
        </div>
    );
};

export default DetailsInfo;