
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import Datamanipulation from './Components/Datamanipulation';
import Imageforgery from './Components/Imageforgery';
import Preview from './Components/Preview';


function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route exact path="/" element={<Home/>}/>

      <Route exact path="/Datamanipulation" element={<Datamanipulation/>}/>

      <Route exact path="/Imageforgery" element={<Imageforgery />}/>
      <Route exact path="/Preview" element={<Preview />}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
