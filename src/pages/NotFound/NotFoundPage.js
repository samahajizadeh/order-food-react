import React from "react";
import classes from './NotFound.module.scss';
import errorImage from '../../assets/images/error404.png'

const NotFoundPage = () => {
  return (
    <section className={classes.notFound}>
      <div className={classes["bg-wrapper"]}>
        <div className={classes.content}>
            <img src={errorImage} alt="خطا"/>
            <h1>صفحه مورد نظر یافت نشد</h1>

        </div>
      </div>
    </section>
  );
};
export default NotFoundPage;
