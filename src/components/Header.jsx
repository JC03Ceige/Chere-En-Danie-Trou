import React from "react";

// import Header1 from "../assets/header1.jpg";
import Header3 from "../assets/header3.jpg";
import Wreath from "../assets/engagementwreath.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Header3} alt="CheréEnDanie" className="headerImg" />
      {/*<img src={Wreath} alt="Verloofde Voorletters" className="wreath" /> */}
      <h1 className="heading">HUWELIKSVIERING VAN</h1>
    </div>
  );
};

export default Header;
