import React, { useEffect } from "react";
import { Col, Row, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CartPage.module.scss";
import { NumberWithCommas } from "../../components/UI/NumberFormat";
import { addItem, removeItem } from "../../store/order";
import { useNavigate } from "react-router";

const CartPage = () => {
  const { items, totalAmount } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("Auth Token");
    if (!authToken) {
      navigate("/login");
    }
  }, [navigate]);

  const incrementHandler = (item) => {
    dispatch(addItem({ ...item, amount: 1 }));
  };

  const decrementHandler = (id) => {
    dispatch(removeItem(id));
  };

  const checkoutHandler = () => {
    navigate("/checkout");
  };

  let cartsItem = (
    <tr>
      <td className="text-danger" colSpan={5}>
        سبد خرید شما خالی می باشد
      </td>
    </tr>
  );
  if (items.length) {
    cartsItem = items.map((item, index) => (
      <tr key={item.id}>
        <td style={{ width: "30px" }}>{index + 1}</td>
        <td>
          <img style={{ width: "60px" }} src={item.image} alt={item.title} />
        </td>
        <td>{item.title}</td>
        <td>{NumberWithCommas(item.price)}</td>
        <td>
          <div className={classes.actions}>
            <Button
              variant="outline-info"
              onClick={incrementHandler.bind(null, item)}
            >
              +
            </Button>
            <span className={classes.amount}>{item.amount} </span>
            <Button
              variant="outline-info"
              onClick={decrementHandler.bind(null, item.id)}
            >
              −
            </Button>
          </div>
        </td>
      </tr>
    ));
  }

  return (
    <section className={classes["cart-wrapper"]}>
      <Row className={classes["cart-content"]}>
        <Col md={10} lg={8}>
          <div className={classes.col}>
            <h3>لیست خرید شما</h3>
            <div className={classes["cart-table"]}>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th colSpan="3">محصول</th>
                    <th>قیمت</th>
                    <th>تعداد</th>
                  </tr>
                </thead>
                <tbody>{cartsItem}</tbody>
                {items.length > 0 && (
                  <tfoot className={classes["total-price"]}>
                    <tr>
                      <td colSpan="4">
                        جمع کل
                        <span className={classes.price}>
                          {NumberWithCommas(totalAmount)}
                        </span>
                      </td>
                      <td>
                        <Button
                          variant="outline-success"
                          onClick={checkoutHandler}
                        >
                          پرداخت
                        </Button>
                      </td>
                    </tr>
                  </tfoot>
                )}
              </Table>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};
export default CartPage;
