import React from "react";
import Navbar from "../components/Navbar";
import GTCs_Hero from "../components/GTCs_components/GTCs_Hero";
import GTCs_Section from "../components/GTCs_components/GTCs_Section";
import Footer from "../components/Footer";
const GTCs= () => {

    return (
       <div>
        <Navbar /> 
   <GTCs_Hero />
   <GTCs_Section />
         <Footer />
       </div>
     );
   };
   
   export default GTCs;