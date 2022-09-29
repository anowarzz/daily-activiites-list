import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
     

    <div className='grid lg:grid-cols-7 sm:grid-cols-1 md:grid-cols-7 bg-slate-400'>

  
   <div className='activity bg-blue-100 col-span-5'>
   <Navbar> </Navbar>
    </div>

    <div>
    <h3 className='text-3xl text-center'>This Is the information area</h3>
    </div>
    </div>
   </div> 

  )

}
  

export default App ;
