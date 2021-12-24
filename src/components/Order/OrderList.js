import React from "react";
import { Row } from "react-bootstrap";

import OrderItem from "./OrderItem";
import classes from "./OrderList.module.scss";



const OrderList = (props) => {
  const {order} = props;

  const orders = order.map(item => <OrderItem key={item.id} id={item.id} title={item.title} image={item.image} desc ={item.description} price={item.price}/>)

  return (
    <Row className={classes["order-content"]}>
      {orders}
    </Row>
  );
};
export default OrderList;
