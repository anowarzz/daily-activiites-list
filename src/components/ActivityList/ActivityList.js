const ActivityList = (props) => {
  

  const {handleActivityTime, myActivity} = props 
  
    const {activityName, timeMinutes, image} = myActivity;


  

    return (
       <div>
        
        <div className="card bg-slate-200 shadow-xl mb-3 mx-2">
  <img className="p-3 rounded-2xl mb-0" src={image} alt="p" />
  <div className="card-body">
    <h2 className="card-title mt-0 font-bold">{activityName}</h2>
    <p className="font-semibold">Time Required: {timeMinutes} Minutes</p>

    <div className="card-actions justify-center ">
      <button onClick={() => handleActivityTime(myActivity)} className="btn bg-emerald-500 hover:bg-lime-500 border-none w-52 mt-4 ">Add To List</button>

    </div>
  </div>
</div>

       </div>
    );
};

export default ActivityList;