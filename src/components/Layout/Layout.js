import React, { Fragment } from "react";
import MainHeader from "./MainHeader";

const Layout = (props) => {
  return (
    <Fragment>
      <header>
        <MainHeader />
      </header>
      <main>
        {props.children}
      </main>
    </Fragment>
  );
};
export default Layout;
