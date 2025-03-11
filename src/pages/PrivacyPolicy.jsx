import React from "react";
import Navbar from "../components/Navbar";
import Privacy_Hero from "../components/Privacy_components/Privacy_Hero";
import PrivacyPolicySection from "../components/Privacy_components/PrivacyPolicySection";
import Footer from "../components/Footer";


const Privacy_Policy = () => {

    return (
       <div>
        <Navbar /> 
        <Privacy_Hero />
        <PrivacyPolicySection />
         <Footer />
       </div>
     );
   };
   
   export default Privacy_Policy;
   