import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";

import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faBars,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "../UI/Logo";
import classes from "./MainHeader.module.scss";
import Cart from "../Cart/Cart";

const MainHeader = (props) => {
  const [cartIsShow, setCartIsShow] = useState(false);
  const [bgHeader, setbgHeader] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const showCartHandler = () => {
    setCartIsShow(true);
  };
  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  const listenScrollEvent = () => {
    if (window.scrollY > 100) {
      setbgHeader(true);
    } else {
      setbgHeader(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  const defaultMainHeader = bgHeader
    ? `${classes.mainHeader} ${classes.bgDarkHeader}`
    : `${classes.mainHeader}`;

  return (
    <Navbar collapseOnSelect expand="lg" className={defaultMainHeader}>
      <Container className={classes.mainContainer}>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
        <Nav className={`${classes.headerResponsive} "me-auto"`}>
          <Nav.Link onClick={showCartHandler}>
            <FontAwesomeIcon
              icon={faShoppingBasket}
              className={classes.colorIcon}
            />
            <div className={classes["cart-wrap"]}>
              <span className={classes.navItem}>
                <Badge className={classes.customBadge}>2</Badge>
                سبد خرید
              </span>
              {/* {showCart && <Cart />} */}
            </div>
          </Nav.Link>
          <LinkContainer to="/login">
            <Nav.Link>
              <FontAwesomeIcon
                icon={faSignInAlt}
                className={classes.colorIcon}
              />
              <span className={classes.navItem}> ورود به سیستم</span>
            </Nav.Link>
          </LinkContainer>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <FontAwesomeIcon icon={faBars} className={classes.colorIcon} />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={classes.rightSideNav}
            style={{ marginRight: "35px" }}
            activeKey={pathname}
          >
            <LinkContainer to="/home" activeClassName={classes.active}>
              <Nav.Link eventKey="home">
                <span className={classes.navItem}>صفحه اصلی</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/order" activeClassName={classes.active}>
              <Nav.Link eventKey="order">
                <span className={classes.navItem}>سفارش آنلاین</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" activeClassName={classes.active}>
              <Nav.Link eventKey="about">
                <span className={classes.navItem}>درباره ما</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" activeClassName={classes.active}>
              <Nav.Link eventKey="contact">
                <span className={classes.navItem}> تماس باما</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className={`${classes.leftSideNav} me-auto`}>
            <Nav.Link onClick={showCartHandler}>
              <FontAwesomeIcon
                icon={faShoppingBasket}
                className={classes.colorIcon}
              />
              <div className={classes["cart-wrap"]}>
                <span className={classes.navItem}>
                  <Badge className={classes.customBadge}>2</Badge>
                  سبد خرید
                </span>

                {/* {cartIsShow && <Cart onClose={hideCartHandler} />} */}
              </div>
              
            </Nav.Link>
            <LinkContainer to="/login">
              <Nav.Link>
                <FontAwesomeIcon
                  icon={faSignInAlt}
                  className={classes.colorIcon}
                />
                <span className={classes.navItem}> ورود به سیستم</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        {cartIsShow && <Cart onClose={hideCartHandler} />}
      </Container>
    </Navbar>
  );
};
export default MainHeader;
