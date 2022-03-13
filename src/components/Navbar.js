

import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {

  return (
    <div className="navbar">
     
     <div className="conatiner flex">
       <h1 className="logo">
         AK
       </h1>
       <nav>
         <ul className="hiddenn" >
           <li><Link to="/">Home</Link></li>
           <li><Link to="/features">Features</Link></li>
           <li><Link to="/docs">Docs</Link></li>

         </ul>
       </nav>
     </div>
    </div>
    
  
      
        
        
        
        
        
        
        
        
        
       
  
    
  );
}

export default Navbar;