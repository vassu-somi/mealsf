import logo from './logo.svg';
import './App.css';
import { Finder } from './Component/Finder';
import  Select  from './Component/Select';

function App() {
  return (
   <section>
     <div className='contaner'>
       <Finder/>
       <Select/>
     </div>
   </section>
  );
}

export default App;