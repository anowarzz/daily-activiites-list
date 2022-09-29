import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const ActivityTime = ({myActivity}) => {

    let totalTime = 0;
    
    for(const activity of myActivity){
        totalTime = totalTime + activity.timeMinutes
    }


    

    return (
        <div className='mt-16 pl-4'>
            <h3 className='text-2xl font-semibold'>Total Activity Time <FontAwesomeIcon icon={faClock} className="pl-3" /></h3>

            <div className="mt-5  bg-gray-200 shadow-md flex justify-around p-4 border rounded-lg mx-auto w-[90%]">

            <h6 className='text-xl font-semibold'>Activity Time</h6>
            <p className='font-semibold pt-1'> {totalTime} Minutes</p>
            </div>

            <div className="mt-8 shadow-md  bg-gray-200  flex justify-around p-4 border rounded-lg mx-auto w-[90%]">

            <h6 className='text-xl font-semibold'>Break Time</h6>
            <p className='font-semibold pt-1'>0 Minutes</p>

            </div>

            <div className='mt-8 text-center'>
            <button className=" btn bg-purple-500 border-none w-52 mt-4 hover:bg-fuchsia-600">Activity Completed</button>
            </div>
        </div>
    );
};

export default ActivityTime;