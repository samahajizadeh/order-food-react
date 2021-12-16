import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import OrderList from "../../components/Order/OrderList";
import classes from "./OrderPage.module.scss";

import useHttp from "../../hooks/useHttp";
import { getAllOrder } from "../../lib/api";

import NotFoundData from "../../components/UI/NotFoundData";
import Preloader from "../../components/UI/Preloader";

const OrdersPage = () => {
  const {
    sendRequest,
    status,
    error,
    data: loadedOrders,
  } = useHttp(getAllOrder, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  debugger
  if (
    status === "completed" &&
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
        <OrderList order={loadedOrders} />
      </Container>
    </section>
  );
};
export default OrdersPage;
