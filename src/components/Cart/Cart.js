import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

import Aux from "../../hoc/Auxx";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";

const Cart = () => {
  const navigate = useNavigate();

  const viewCardHandler = () => {
    navigate("/cartPage");
  };
  return (
    <Aux className={classes["header-cart"]}>
      <div className={classes["header-cart_title"]}>
        سبد خرید شما
        <span>3 مورد</span>
      </div>

      <CartItem />
      
      <div className={classes["header-cart_total"]}>
        جمع کل
        <span>20000 تومان</span>
      </div>
      <div className={classes["header-car_footer"]}>
        <Button
          variant="outline-info"
          className={classes.cartBtn}
          onClick={viewCardHandler}
        >
          نمایش سبد خرید
        </Button>

        <Button className={classes.checkoutBtn} variant="outline-success">
          پرداخت
        </Button>
      </div>
    </Aux>
  );
};
export default Cart;
