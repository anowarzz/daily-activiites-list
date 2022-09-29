import React from 'react';
import ActivityTime from '../ActivityTime/ActivityTime';
import AddBreak from '../AddBreak/AddBreak';
import MyInfo from '../MyInfo/MyInfo';

const DetailsInfo = ({myActivity}) => {
  return (
    <div>
      <MyInfo> </MyInfo>
      <AddBreak> </AddBreak>
      <ActivityTime myActivity={myActivity}> </ActivityTime>

    </div>
  );
};

export default DetailsInfo;