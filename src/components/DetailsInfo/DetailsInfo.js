import React from 'react';
import ActivityTime from '../ActivityTime/ActivityTime';
import AddBreak from '../AddBreak/AddBreak';
import MyInfo from '../MyInfo/MyInfo';

const DetailsInfo = () => {
  return (
    <div className='bg-gray-100'>
      <MyInfo> </MyInfo>
      <AddBreak> </AddBreak>
      <ActivityTime> </ActivityTime>

    </div>
  );
};

export default DetailsInfo;