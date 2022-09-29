


const MainArea = ({myActivity}) => {

    const {id, activityName, time, image} = myActivity;

    console.log(id, activityName, time, image);
    
    

    return (
       <div className="grid">
        
        <div className="bg-white">
            
        <img src={image} alt="" className="w-64"/>
        <h3 className="text-2xl font-bold">{activityName}</h3>
        <p>Time Required: {time}</p>
        <button className="btn btn-secondary">Button</button>

        </div>

       </div>
    );
};

export default MainArea;