import React from "react";
import { Col, Row, Table, Button } from "react-bootstrap";
import classes from "./CartPage.module.scss";

const CartPage = () => {
  return (
    <section className={classes["cart-wrapper"]}>
      <Row className={classes["cart-content"]}>
      <Col md={10} lg={8}>
        <div className={classes.col}>
          <h3>لیست خرید شما</h3>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>عنوان</th>
                <th>توضیحات</th>
                <th>قیمت</th>
                <th>تعداد</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>قرمه سبزی</td>
                <td>20000</td>
                <td>
                  <div className={classes.actions}>
                    <Button variant="outline-info">+</Button>
                    <span className={classes.amount}>1 </span>
                    <Button variant="outline-info">−</Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>قیمه بادمجان</td>
                <td>30000</td>
                <td>
                  <div className={classes.actions}>
                    <Button variant="outline-info">+</Button>
                    <span className={classes.amount}>1 </span>
                    <Button variant="outline-info">−</Button>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot className={classes['total-price']}>
              <tr>
                <td colSpan="3">
                  جمع کل
                  <span className={classes.price}>40000</span>
                </td>
                <td>
                  <Button variant="outline-success">پرداخت</Button>
                </td>
              </tr>
            </tfoot>
          </Table>
          </div>
        </Col>
      </Row>
    </section>
  );
};
export default CartPage;
