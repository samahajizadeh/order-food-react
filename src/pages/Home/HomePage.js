import React from "react";
import classes from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <section className={classes.mainPage}>
      <div className={classes["bg-wrapper"]}>
        <div className={classes.content}>
          <h1>به فست فود شاهان خوش آمدید</h1>
        </div>
      </div>
    </section>
  );
};
export default HomePage;
