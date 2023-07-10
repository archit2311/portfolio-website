import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Project from "./pages/Projects/Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <div className="App">
      
         <Navbar />

        
           <Home />
      
        
        <About />
    

       
        <Skills />
 

        <Project /> 
        <Contact />  
       

       
         
         
     
        {/* <BrowserRouter> 
        <Navbar />
         <Routes> 
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/about" element={<About />} /> 
          <Route exact path="/skills" element={<Skills />} /> 
           <Route path="/contact" component={<Contact />} />  
         </Routes>
       </BrowserRouter>  */}
    </div>
  );
}

export default App;
