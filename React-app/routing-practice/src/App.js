// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./routing/Home";
import About from "./routing/About";
import Shop from "./routing/Shop";
import NotFound from "./routing/NotFound";
import Nav from "./routing/Nav";

 

function App() {
  return (
    <div className="App">
   
   <BrowserRouter>
   <Nav/>
   <Routes>
   <Route exact path ="/" element ={<Home />} />
   
   <Route exact path ="/About" element ={<About />} />
   <Route exact path ="/Shop" element ={<Shop />} />
   <Route exact path ="*" element ={<NotFound />} />
   </Routes>
   </BrowserRouter>

   </div>
   );
   }

export default App;
