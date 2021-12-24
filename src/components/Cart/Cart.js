import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import Aux from "../../hoc/Auxx";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";

import { NumberWithCommas } from "../../components/UI/NumberFormat";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const { items, totalAmount } = useSelector((state) => state.order);
  const totalQuantity = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const navigate = useNavigate();

  const viewCardHandler = () => {
    navigate("/cart");
    props.onClose();
  };

  const checkoutHandler = () => {
    navigate("/checkout");
    props.onClose();
  };

  return (
    <Aux className={classes["cart-modal"]}>
      <div className={classes.backdrop} onClick={props.onClose} />
      <div className={classes["header-cart"]}>
        <div className={classes["header-cart_title"]}>
          سبد خرید شما
          <span>{totalQuantity} مورد</span>
        </div>

        <CartItem onClose={props.onClose} />

        {items.length > 0 && (
          <div>
            <div className={classes["header-cart_total"]}>
              جمع کل
              <span>{NumberWithCommas(totalAmount)} تومان</span>
            </div>
            <div className={classes["header-cart_footer"]}>
              <Button
                variant="outline-info"
                className={classes.cartBtn}
                onClick={viewCardHandler}
              >
                نمایش سبد خرید
              </Button>
              <Link to="/checkout">
                <Button
                  className={classes.checkoutBtn}
                  variant="outline-success"
                  onClick={checkoutHandler}
                >
                  پرداخت
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </Aux>
  );
};
export default Cart;
