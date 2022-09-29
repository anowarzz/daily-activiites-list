import React, { useEffect, useState } from 'react';
import MainArea from '../MainArea/MainArea';
import Navbar from '../Navbar/Navbar';

const MyActivity = () => {

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('activity.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    
    }, [])
    

  

    return (
        <div>
          
    <div className='grid lg:grid-cols-7 sm:grid-cols-1 md:grid-cols-7'>

  
   <div className='col-span-5'>
   <Navbar> </Navbar>

   {
    activities.map(activity => <MainArea myActivity ={activity} key={activity.id}> </MainArea>)
   }
   
    </div>

    <div>
    <h3 className='text-3xl text-center'>This Is the information area</h3>
    </div>
    </div>

  
        </div>
    );
};

export default MyActivity;