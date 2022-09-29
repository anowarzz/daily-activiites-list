import React, { useEffect, useState } from 'react';
import { addToLocal, showLocalStorageData } from '../LocalStorage/LocalStorage';
import ActivityTime from '../ActivityTime/ActivityTime';
import AddBreak from '../AddBreak/AddBreak';
import MyInfo from '../MyInfo/MyInfo';


const DetailsInfo = ({myActivity}) => {

//Setting Break Time 

const [breakTime, setBreakTime] = useState(0)

const selectedBreak = (event) => {
  const breakTime = (event.target.innerText)
 setBreakTime(parseInt((breakTime)))
 addToLocal(breakTime)
}

// Showing breakTime From Local Storage .

useEffect(() => {
  const localStorageMin = showLocalStorageData();
  setBreakTime(localStorageMin);
}, [])

  return (
    <div>
      <MyInfo> </MyInfo>
      <AddBreak selectedBreak={selectedBreak}> </AddBreak>
      <ActivityTime myActivity={myActivity} breakTime = {breakTime}> </ActivityTime>

      
    </div>
  );
};

export default DetailsInfo;