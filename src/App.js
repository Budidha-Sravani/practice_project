
import './App.css';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';

import { Routes,Route,BrowserRouter } from 'react-router-dom';




function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
  
}

export default App;
