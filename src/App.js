import './App.css';
import Activity from './components/Activity/Activity';
import DetailsInfo from './components/DetailsInfo/DetailsInfo';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
     <Navbar></Navbar>
     
    <div className='body'>
    <Activity> </Activity>
     <DetailsInfo> </DetailsInfo>
    </div>

    </div>
  );
}

export default App;
