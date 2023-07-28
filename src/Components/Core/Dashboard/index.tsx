import React, { FC } from "react";

import MidSection from "../../UI/MidSection";
import Sidebar from "../../UI/Sidebar";
import Footer from "../../UI/Footer";

const Index: FC = () => {
  return (
    <div id="wrapper">
      <Sidebar />

      <MidSection />

      <Footer />
    </div>
  );
};

export default Index;
