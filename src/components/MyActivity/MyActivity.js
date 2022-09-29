import React, { useEffect, useState } from "react";
import DetailsInfo from "../DetailsInfo/DetailsInfo";
import MainArea from "../MainArea/MainArea";
import Navbar from "../Navbar/Navbar";

const MyActivity = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("activity.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);


  return (
    <div>
      <div className="grid lg:grid-cols-7 sm:grid-cols-1 md:grid-cols-7">

        <div className="col-span-5">
          <Navbar> </Navbar>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4 gap-2 bg-base-200">
            {activities.map((activity) => (
              <MainArea myActivity={activity} key={activity.id}>
            
              </MainArea>
            ))}
          </div>
        </div>



        <div className="border col-span-2">
    <DetailsInfo></DetailsInfo>
                
        </div>


      </div>
    </div>
  );
};

export default MyActivity;
