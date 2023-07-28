import React, { FC } from "react";

import footer_logo from "../../../Assets/Images/footer-logo.svg";

const Index: FC = () => {
  return (
    <div className="bottom-footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="footer-logo" />
      </div>
    </div>
  );
};

export default Index;
