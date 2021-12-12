import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";

import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faCartPlus,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "../UI/Logo";
import classes from "./MainHeader.module.scss";
import Cart from "../Cart/Cart";

const MainHeader = (props) => {
  const [showCart, setShowCart] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const cartHandler= () =>{
    setShowCart ( pervState => !pervState)
  }

  return (
    <Navbar collapseOnSelect expand="lg" className={classes.mainHeader}>
      <Container>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{ marginRight: "35px" }} activeKey={pathname}>
            <LinkContainer to="/home" activeClassName={classes.active}>
              <Nav.Link eventKey="home">
                <span className={classes.navItem}>صفحه اصلی</span>
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
          <Nav className="me-auto">
            <Nav.Link onClick={cartHandler}>
              <FontAwesomeIcon
                icon={faShoppingBasket}
                className={classes.colorIcon}
              />
              <div className={classes["cart-wrap"]}>
                <span className={classes.navItem}>
                  <Badge className={classes.customBadge}>2</Badge>
                  سبد خرید
                </span>
                {showCart && <Cart />}
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
      </Container>
    </Navbar>
  );
};
export default MainHeader;
