import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

import Aux from "../../hoc/Auxx";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";

const Cart = (props) => {
  const navigate = useNavigate();

  const viewCardHandler = () => {
    navigate("/cart");
  };

  return (
    <Aux className={classes['cart-modal']}>
      <div className={classes.backdrop} onClick={props.onClose} />
      <div className={classes["header-cart"]}>
        <div className={classes["header-cart_title"]}>
          سبد خرید شما
          <span>3 مورد</span>
        </div>

        <CartItem />

        <div className={classes["header-cart_total"]}>
          جمع کل
          <span>20000 تومان</span>
        </div>
        <div className={classes["header-cart_footer"]}>
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
      </div>
    </Aux>
  );
};
export default Cart;
