import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Alert from './Components/Alert';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Textform from './textform';

function App() {



  return (
    // <div className='container my-3'>
<Router>
  <Navbar/>

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/textform" element={<Textform  heading="Enter your Text Here"/>}/>
    <Route path="/Alert" element={<Alert/>}/>
  </Routes>
</Router>
   
 
    //  </div>
  );
}

export default App;
