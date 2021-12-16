import React from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./ContactPage.module.scss";
import contactImg from "../../assets/images/delivery_bike.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  return (
    <section className={classes["contact-wrapper"]}>
      <Row className={classes["contact-content"]}>
        
        <Col md={10} lg={8}>
          <div className={classes.col}>
          <div className={classes.contactImage}>
            <img src={contactImg} />
          </div>

          <div className={classes.contactText}>
            <h2>تماس باما</h2>
            <ul>
              <li>
                <span>
                  <FontAwesomeIcon
                    icon={faMapMarkedAlt}
                    className={classes['contact-icon']}
                  />
                  آدرس :
                </span>
                <p>ایران ، تهران ، جردن</p>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    className={classes['contact-icon']}
                  />
                </span>
                تلفن :
                <p>021-22665814</p>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={classes['contact-icon']}
                  />
                </span>
                ایمیل :
                <p>info@shahan.com</p>
              </li>
            </ul>
          </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};
export default ContactPage;
