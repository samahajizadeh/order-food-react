import React from "react";
import logo from "../../assets/images/mainLogo.png";
import Aux from "../../hoc/Auxx";

import classes from "./Logo.module.scss";
const Logo = () => {
  return (
    <Aux className={classes.logo}>
      <img src={logo} alt="رستوران شاهان" />
    </Aux>
  );
};
export default Logo;
