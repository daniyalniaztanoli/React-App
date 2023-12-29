import './App.css'
import '../tailwind.config.js'
import First_Comp from './components/First_Comp.jsx';
import Second_comp from './components/Second_Comp.jsx';
import Third_Comp from './components/Third_Comp.jsx';
import Fourth_Comp from './components/Fourth_Comp.jsx';
import Fifth_Comp from './components/Fifth_Comp.jsx';
import Sixth_comp from './components/Sixth_Comp.jsx';
import Sevents_Comp from './components/Seventh_Comp.jsx';
import Eight_Comp from './components/Eight_Comp.jsx';

const App = () =>{
  return (
    <>
    <nav className='bg-white'>
      <ul className='flex justify-around my-2'>
        <li><a className='text-xl font-semibold' href="#">Logo</a></li>
        <li><button className=' text-white p-1 rounded-md bg-blue-700 hover:bg-blue-900'>SignUp</button></li>
      </ul>
    </nav>
    <First_Comp/>
    <Second_comp/>
    <Third_Comp/>
    <Fourth_Comp/>
    <Fifth_Comp/>
    <Sixth_comp/>
    <Sevents_Comp/>
    <Eight_Comp/>
    </>
  )
}

export default App;