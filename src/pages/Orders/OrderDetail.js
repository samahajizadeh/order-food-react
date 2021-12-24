import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Alert } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";

import useHttp from "../../hooks/useHttp";
import { getOrderDetail } from "../../lib/api";

import classes from "./OrderDetail.module.scss";

import { addItem } from "../../store/order";

import NotFoundData from "../../components/UI/NotFoundData";
import Preloader from "../../components/UI/Preloader";
import { NumberWithCommas } from "../../components/UI/NumberFormat";

import { useDispatch } from "react-redux";

const OrderDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const distpatch = useDispatch();
  const navigate = useNavigate();
  const { orderId } = useParams();

  const {
    sendRequest,
    status,
    error,
    data: loadedOrderDetail,
  } = useHttp(getOrderDetail, true);

  useEffect(() => {
    sendRequest(orderId);
  }, [sendRequest, orderId]);


  useEffect(() => {
    const authToken = localStorage.getItem("Auth Token");
    if (!authToken) {
      navigate("/login");
    }
  }, [navigate]);

  const incrementHandler = () => {
    setQuantity(quantity + 1);
  };

  const decrementHandler = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };

  const addToCartHandler = () => {
    const item = {
      id: orderId,
      title: loadedOrderDetail.title,
      image: loadedOrderDetail.image,
      amount: quantity,
      price: loadedOrderDetail.price,
      description: loadedOrderDetail.description,
    };
    distpatch(addItem(item));
    navigate("/order");
  };

  let content = "";

  if (
    status === "completed" &&
    !error &&
    (!loadedOrderDetail || loadedOrderDetail.length === 0)
  ) {
    content = <NotFoundData />;
  }

  if (status === "pending") {
    content = <Preloader />;
  }

  if (status === "completed" && !error) {
    content = (
      <Card className={classes["orderDetail-card"]}>
        <div className={classes.imgDetail}>
          <Card.Img variant="top" src={loadedOrderDetail.image} />
        </div>

        <Card.Body className={classes.body}>
          <Card.Title className={classes.title}>
            {loadedOrderDetail.title}
          </Card.Title>
          <Card.Text className={classes.desc}>
            {loadedOrderDetail.description}
          </Card.Text>
          <div className={classes.price}>
            قیمت :<span>{NumberWithCommas(loadedOrderDetail.price)}</span>
          </div>
          <div className={classes.quantity}>
            <p>تعداد: </p>
            <div className={classes["num-in"]}>
              <span className={classes.plus} onClick={incrementHandler}>
                +
              </span>
              <input
                type="text"
                value={quantity}
                readOnly
                className={classes["in-num"]}
              />
              <span className={classes["minus-dis"]} onClick={decrementHandler}>
                -
              </span>
            </div>
          </div>
          <button onClick={addToCartHandler}>اضافه کردن به سبد خرید</button>
        </Card.Body>
      </Card>
    );
  }

  if (status === "completed" && error) {
    content = (
      <Alert variant="danger" className={classes["order-error"]}>
        {error}
      </Alert>
    );
  }
  return (
    <section>
      <div className={classes["orderDetail-wrapper"]}>
        <h2> صفحه سبد خرید</h2>
      </div>
      <Container className={classes["orderDetail-content"]}>
        <Row>
          <Col>{content}</Col>
        </Row>
      </Container>
    </section>
  );
};
export default OrderDetail;
