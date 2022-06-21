// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./routing/Home";
import About from "./routing/About";
import Shop from "./routing/Shop";
import NotFound from "./routing/NotFound";
import Nav from "./routing/Nav";
import Users from "./routing/Users";
import Contact from "./routing/Contact";

 

function App() {
  return (
    <div className="App">
   
   <BrowserRouter>
   <Nav/>

   <Routes>
     


   <Route exact path ="/" element ={<Home />} />
   <Route  path ="/Users" element ={<Users />} />
   <Route  path ="/Users/:id" element ={<Users />} />
   <Route  path ="/About" element ={<About />} />
   <Route  path ="/Shop" element ={<Shop />} />
   <Route  path ="/Contact" element ={<Contact />} />
   <Route  path ="*" element ={<NotFound />} />

   
   </Routes>
   </BrowserRouter>

   </div>
   );
   }

export default App;
