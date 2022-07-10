import React from "react";
import Header from "./Header";
import InfoCard from "./InfoCard";
import Logo from "./Logo";

import NavBar from "./NavBar";

const MainView = () => {
  return (
    <div>
      <NavBar />
      <Header />

      {/* Logo body wrapped in div */}
      <div>
        <Logo />
      </div>
      <div className="infoCard">
        <InfoCard />
      </div>
    </div>
  );
};

export default MainView;
