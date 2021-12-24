import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import classes from "./OrderItem.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NumberWithCommas } from "../UI/NumberFormat";

const OrderItem = (props) => {
  return (
    <Col md={6} lg={3}>
      <div className={classes["order-item"]}>
        <div className={classes["order_img"]}>
          <img src={props.image} alt={props.title} />
          <div className={classes["order_action"]}>
            <Link to={`/order/${props.id}`} className={classes['add-btn']} >
              <FontAwesomeIcon icon={faShoppingCart} className={classes.Icon} />
سفارش غذا            </Link>
          </div>
        </div>
        <div className={classes["order_txt"]}>
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
          <h3 className={classes["order_price"]}>
            {NumberWithCommas(props.price)}
            <span className={classes.currencySymbol}>تومان</span>
          </h3>
        </div>
      </div>
    </Col>
  );
};
export default OrderItem;
