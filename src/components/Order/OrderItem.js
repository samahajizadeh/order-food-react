import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import classes from "./OrderItem.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const OrderItem = (props) => {
  return (
    <Col md={6} lg={3}>
      <div className={classes["order-item"]}>
        <div className={classes["order_img"]}>
          <img src={props.image} alt={props.title} />
          <div className={classes["order_action"]}>
            <Link to={"/order/45"} className={classes['add-btn']} >
              <FontAwesomeIcon icon={faShoppingCart} className={classes.Icon} />
              افزودن به سبد خرید
            </Link>
          </div>
        </div>
        <div className={classes["order_txt"]}>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
          <h3 className={classes["order_price"]}>
            {props.price}
            <span className={classes.currencySymbol}>تومان</span>
          </h3>
        </div>
      </div>
    </Col>
  );
};
export default OrderItem;
