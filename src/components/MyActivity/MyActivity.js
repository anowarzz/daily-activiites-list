import React, { useEffect, useState } from "react";
import ActivityList from "../ActivityList/ActivityList";
import DetailsInfo from "../DetailsInfo/DetailsInfo";
import Navbar from "../Navbar/Navbar";
import Title from "../Title/Title";

const MyActivity = () => {

  const [activities, setActivities] = useState([]);

  const [activityList, setActivityList] = useState([])
  

  useEffect(() => {
    fetch("activity.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);


  const handleActivityTime = (activity) => {
 
    const AllActivity = [...activityList, activity]
    
    setActivityList(AllActivity)
  }


  return (
    <div>
      <div className="grid lg:grid-cols-7 sm:grid-cols-1 md:grid-cols-7">

        <div className="col-span-5">
          <Navbar> </Navbar>
          <Title> </Title>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4 gap-2 bg-zinc-300">
            {activities.map((activity) => (
              <ActivityList myActivity={activity} key={activity.id} handleActivityTime={handleActivityTime}></ActivityList>
            ))}
          </div>
        </div>



        <div className="col-span-5 sm:col-span-2 md:col-span-2 lg:col-span-2 bg-gray-100">
    <DetailsInfo myActivity={activityList}></DetailsInfo>
                
        </div>


      </div>
    </div>
  );
};

export default MyActivity;
