import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./CartItem.module.scss";

const CartItem = (props) => {
  const cartItem = useSelector((state) => state.order.items);

  let items = "";
  if (cartItem.length === 0) {
    items = (
      <li className="text-center text-danger">سبد خرید شما خالی می باشد</li>
    );
  } else {
    items = cartItem.map((item, index) => (
      <li onClick={props.onClose} key={item.id}>
        <Link to={`/order/${item.id}`} className={classes.card_item}>
          <div className={classes.card_index}>{index + 1}</div>
          <img src={item.image} alt={item.title} />
          <div className={classes.card_body}>
            <h2 className={classes.card_title}>{item.title}</h2>
            <div className={classes.card_desc}>
              {item.amount}
              <span>x </span>
              {item.price}
            </div>
          </div>
        </Link>
      </li>
    ));
  }

  return (
    <div className={classes["header-cart_content"]}>
      <ol className={classes.scroll}>{items}</ol>
    </div>
  );
};

export default CartItem;
