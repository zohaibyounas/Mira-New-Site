import React from "react";
import Navbar from "../components/Navbar";
import Imprint_Hero from "../components/Imprint_components/Imprint_Hero";
import Imprint_Section from "../components/Imprint_components/Imprint_Section";
import Footer from "../components/Footer";
const Imprint= () => {

    return (
       <div>
        <Navbar /> 
        <Imprint_Hero />
        <Imprint_Section />
         <Footer />
       </div>
     );
   };
   
   export default Imprint;
   