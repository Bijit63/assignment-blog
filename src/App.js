
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import Datamanipulation from './Components/Datamanipulation';
import Imageforgery from './Components/Imageforgery';


function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route exact path="/" element={<Home/>}/>

      <Route exact path="/Datamanipulation" element={<Datamanipulation/>}/>

      <Route exact path="/Imageforgery" element={<Imageforgery />}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
