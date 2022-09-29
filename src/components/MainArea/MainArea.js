


const MainArea = ({myActivity}) => {

    const {id, activityName, time, description, image} = myActivity;

    console.log(id, activityName, time, description, image);
    
    

    return (
       <div>
        
        {/* <div className="">
            
        <img src={image} alt="" className="w-64"/>
        <h3 className="text-2xl font-bold">{activityName}</h3>
        <p className="font-semibold">Time Required: {time} Minutes</p>
        <p>{description}</p>
        <button className="btn btn-secondary">Button</button>
        
        </div> */}
        <div className="card bg-base-100 shadow-xl mb-3 mx-2">
  <img className="p-3 rounded-2xl mb-0" src={image} alt="p" />
  <div className="card-body">
    <h2 className="card-title mt-0">{activityName}</h2>
    <p>{description}</p>
    <p className="font-semibold">Time Required: {time} Minutes</p>
    <div className="card-actions justify-center ">
      <button className="btn btn-primary w-52 mt-4">Add To List</button>
    </div>
  </div>
</div>

       </div>
    );
};

export default MainArea;