import React, { useEffect } from "react";
import { Container, Alert } from "react-bootstrap";
import OrderList from "../../components/Order/OrderList";
import classes from "./OrderPage.module.scss";

import useHttp from "../../hooks/useHttp";
import { getAllOrder } from "../../lib/api";

import NotFoundData from "../../components/UI/NotFoundData";
import Preloader from "../../components/UI/Preloader";
import { useNavigate } from "react-router";

const OrdersPage = () => {
  const navigate = useNavigate();
  const {
    sendRequest,
    status,
    error,
    data: loadedOrders,
  } = useHttp(getAllOrder, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  useEffect(() => {
    const authToken = localStorage.getItem("Auth Token");
    if (!authToken) {
      navigate("/login");
    }
  }, [navigate]);

  if (
    status === "completed" &&
    !error &&
    (!loadedOrders || loadedOrders.length === 0)
  ) {
    <NotFoundData />;
  }

  if (status === "pending") {
    return <Preloader />;
  }

  return (
    <section>
      <div className={classes["order-wrapper"]}>
        <h2> صفحه سفارشات</h2>
      </div>
      <Container>
        {status === "completed" && !error && <OrderList order={loadedOrders} />}
        {status === "completed" && error && (
          <Alert variant="danger" className={classes["order-error"]}>
            {error}
          </Alert>
        )}
      </Container>
    </section>
  );
};
export default OrdersPage;
