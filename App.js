
import './App.css';
import Navbar from './Navbar';
import Form1 from './Form1';
import Form2 from './Form2';

import{BrowserRouter,Route,Routes} from 'react-router-dom';
import { useState } from 'react';



function App() {
  
  const [name, setName] = useState("akhil");
  const [variable,setvar]=useState("vasavi college of engineering");
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Form1 setName={setName} setvar={setvar}/>}/>
       

        
        <Route path="/Form2"  element={<Form2 name={name} variable={variable}/>}/>

       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
