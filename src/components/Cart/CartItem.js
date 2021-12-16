import React from "react";
import classes from './CartItem.module.scss';

const CartItem=()=>{
    return(
        <div className={classes["header-cart_content"]}>
        <ol className={classes.scroll}>
          <li>
            <div className={classes.card_item}>
              <div className={classes.card_index}>1</div>
              <img src="" />
              <div className={classes.card_body}>
                <h2 className={classes.card_title}>پیتزای سبزیجات</h2>
                <div className={classes.card_desc}>
                  1<span>x </span>20000
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className={classes.card_item}>
              <div className={classes.card_index}>2</div>
              <img src="" />
              <div className={classes.card_body}>
                <h2 className={classes.card_title}>پیتزای سبزیجات</h2>
                <div className={classes.card_desc}>
                  1<span>x </span>20000
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className={classes.card_item}>
              <div className={classes.card_index}>3</div>
              <img src="" />
              <div className={classes.card_body}>
                <h2 className={classes.card_title}>پیتزای سبزیجات</h2>
                <div className={classes.card_desc}>
                  1<span>x </span>20000
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    )
}

export default CartItem;