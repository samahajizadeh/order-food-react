import React from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./AboutPage.module.scss";

import aboutImg from "../../assets/images/4.jpg";

const AboutPage = () => {
  return (
    <section className={classes["about-wrapper"]}>
      <Row className={classes["about-content"]}>
        <Col md={10} lg={8}>
          <div className={classes.col}>
            <div className={classes.aboutImage}>
              <img src={aboutImg} alt="فست فود شاهان"/>
            </div>

            <div className={classes.aboutText}>
              <h2>فست فود شاهان</h2>
              <p>
                فست فود شاهان افتخار دارد از سال 1375 همزمان با شروع فعالیت خود
                با نظارت کامل مدیریت و همراهی کادر مجرب در تهیه مواد اولیه و
                امور طبخ، همچنان کمیّت و کیفیت خاص خود را حفظ نماید.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};
export default AboutPage;
