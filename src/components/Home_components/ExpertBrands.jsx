import React from "react";
import "./ExpertBrands.css";

const ExpertBrands = () => {
  return (
    <div className="expert-brands">
      <p className="expert-title">EXPERT IN:</p>
      <div className="brand-logos">
        <img src="/images/prism.png" alt="PRISM" />
        <img src="/images/gammalab.png" alt="GammaLab" />
        <img src="/images/o-chip.png" alt="O-Chip" />
        <img src="/images/internus.png" alt="Internus" />
        <img src="/images/ixon.png" alt="IXON" />
      </div>
    </div>
  );
};

export default ExpertBrands;
