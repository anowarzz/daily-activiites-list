import './App.css';
import Activity from './components/Activity/Activity';
import DetailsInfo from './components/DetailsInfo/DetailsInfo';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
     

    <div className='main-container grid lg:grid-cols-7 sm:grid-cols-1 md:grid-cols-7'>

   <div className='activity bg-gray-100 col-span-5'>
   <Navbar></Navbar>

    <Activity> </Activity>
   </div>

     <DetailsInfo> </DetailsInfo>
    </div>

    </div>
  );
}

export default App;
