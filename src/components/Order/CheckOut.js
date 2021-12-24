import React, { Fragment, useEffect, useState } from "react";
import {
  Row,
  Col,
  Table,
  Form,
  Button,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../hooks/useInput";
import classes from "./CheckOut.module.scss";
import useHttp from "../../hooks/useHttp";
import { sendOrder } from "../../lib/api";
import { NumberWithCommas } from "../UI/NumberFormat";
import { clearItem } from "../../store/order";
import { useNavigate } from "react-router-dom";

function CheckOut(props) {
  const { items, totalAmount } = useSelector((state) => state.order);
  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const distpatch = useDispatch();
  const navigate = useNavigate();

  const {
    value: enteredFirstName,
    changeHandler: firstNameChangeHadler,
    blurHandler: firstNameBlurHandler,
    hasError: firstNameHasError,
    isValid: firstNameIsValid,
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredLastName,
    changeHandler: lastNameChangeHadler,
    blurHandler: lastNameBlurHandler,
    hasError: lastNameHasError,
    isValid: lastNameIsValid,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredAddress,
    changeHandler: addressChangeHadler,
    blurHandler: addressBlurHandler,
    hasError: addressHasError,
    isValid: addressIsValid,
    reset: addressReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredZipCode,
    changeHandler: zipCodeChangeHadler,
    blurHandler: zipCodeBlurHandler,
    hasError: zipCodeHasError,
    isValid: zipCodeIsValid,
    reset: zipCodeReset,
  } = useInput(
    (value) => value.trim() !== "" && value.match(/\b([^02\n\D]){4}[^5](\d){5}/)
  );
  const {
    value: enteredPhone,
    changeHandler: phoneChangeHadler,
    blurHandler: phoneBlurHandler,
    hasError: phoneHasError,
    isValid: phoneIsValid,
    reset: phoneReset,
  } = useInput(
    (value) =>
      value.trim() !== "" && value.match(/^(\+98?)?{?(0?9[0-9]{9,9}}?)$/)
  );

  let formIsValid = false;

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    addressIsValid &&
    zipCodeIsValid &&
    phoneIsValid&&
    items.length

  ) {
    formIsValid = true;
  }

  const { sendRequest, status, error } = useHttp(sendOrder, true);

  const orderSubmit = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    const invoiceForm = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      address: enteredAddress,
      zipCode: enteredZipCode,
      phone: enteredPhone,
    };

    const orderItem = {
      items,
      totalAmount,
    };

    sendRequest({ orders: orderItem, Invoice: invoiceForm });
    // navigate("/order");

    distpatch(clearItem());

    firstNameReset();
    lastNameReset();
    addressReset();
    zipCodeReset();
    phoneReset();
  };

  useEffect(() => {

    if (status === "completed" && !error) {
      setShowToast({
        show: true,
        message: "سفارش شما با موفقیت ثبت شد",
        type: "success",
      });
    }
    if (status === "completed" && error) {
      setShowToast({
        show: true,
        message: "سفارش شما با خطا مواجه شد",
        type: "error",
      });
    }

    
   
  }, [status, error]);

  useEffect(()=>{
    setTimeout(() => {
      if (showToast.show ) {
        navigate("/order");
      }
    }, 1400);

  },[showToast.show,navigate])

  useEffect(() => {
    const authToken = localStorage.getItem("Auth Token");
    if (!authToken) {
      navigate("/login");
    }
  }, [navigate]);


  const content = items.map((item, index) => (
    <tr key={item.id}>
      <td className="text-primary">{index + 1}</td>
      <td>{item.title}</td>
      <td>{NumberWithCommas(item.price)}</td>
      <td>{item.amount}</td>
    </tr>
  ));

  return (
    <Fragment>
      <section className={classes["checkOut-wrapper"]}>
        <Row className={classes["checkOut-content"]}>
          <Col md={10}>
            <div className={classes.col}>
              <Row>
                <ToastContainer
                  className="position-relative mt-3"
                  position="top-center"
                >
                  <Toast
                    onClose={() =>
                      setShowToast({ show: false, message: "", type: "" })
                    }
                    show={showToast.show}
                    delay={1500}
                    autohide
                    bg={showToast.type === "success" ? "success" : "danger"}
                    style={{ zIndex: 1000 }}
                    className="d-block m-1 position-relative"
                  >
                    <Toast.Body className="text-white">
                      {showToast.message}
                    </Toast.Body>
                  </Toast>
                </ToastContainer>
                <Col md={7} className={classes.asideRight}>
                  <h3 className={classes.title}>جزئیات صورتحساب</h3>

                  <Form className="text-end" onSubmit={orderSubmit}>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>نام*</Form.Label>
                        <Form.Control
                          type="text"
                          className={firstNameHasError ? classes.invalid : ""}
                          value={enteredFirstName}
                          onChange={firstNameChangeHadler}
                          onBlur={firstNameBlurHandler}
                        />
                        {firstNameHasError && (
                          <div className={classes["invalid-text"]}>
                            نام خود را وارد کنید
                          </div>
                        )}
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridFamily">
                        <Form.Label>نام خانوادگی*</Form.Label>
                        <Form.Control
                          type="text"
                          className={lastNameHasError ? classes.invalid : ""}
                          value={enteredLastName}
                          onChange={lastNameChangeHadler}
                          onBlur={lastNameBlurHandler}
                        />
                        {lastNameHasError && (
                          <div className={classes["invalid-text"]}>
                            نام خانوادگی خود را وارد کنید
                          </div>
                        )}
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress">
                      <Form.Label>آدرس*</Form.Label>
                      <Form.Control
                        className={addressHasError ? classes.invalid : ""}
                        value={enteredAddress}
                        onChange={addressChangeHadler}
                        onBlur={addressBlurHandler}
                      />
                      {addressHasError && (
                        <div className={classes["invalid-text"]}>
                          آدرس خود را وارد کنید
                        </div>
                      )}
                    </Form.Group>

                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridZipCode">
                        <Form.Label>کدپستی*</Form.Label>
                        <Form.Control
                          type="text"
                          className={zipCodeHasError ? classes.invalid : ""}
                          value={enteredZipCode}
                          onChange={zipCodeChangeHadler}
                          onBlur={zipCodeBlurHandler}
                        />
                        {zipCodeHasError && (
                          <div className={classes["invalid-text"]}>
                            کدپستی خود را وارد کنید
                          </div>
                        )}
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>تلفن همراه*</Form.Label>
                        <Form.Control
                          type="text"
                          className={phoneHasError ? classes.invalid : ""}
                          value={enteredPhone}
                          onChange={phoneChangeHadler}
                          onBlur={phoneBlurHandler}
                        />
                        {phoneHasError && (
                          <div className={classes["invalid-text"]}>
                            تلفن همراه خود را وارد کنید
                          </div>
                        )}
                      </Form.Group>
                    </Row>
                    <Button
                      variant="light"
                      type="submit"
                      disabled={!formIsValid}
                    >
                      ثبت سفارش
                    </Button>
                  </Form>
                </Col>
                <Col md={5}>
                  <h3 className={classes.title}>سفارش شما</h3>

                  <Table striped bordered hover responsive className="bg-white">
                    <thead>
                      <tr>
                        <th colSpan="2">محصول</th>
                        <th>قیمت</th>
                        <th>تعداد</th>
                      </tr>
                    </thead>
                    <tbody>{content}</tbody>
                    <tfoot>
                      <tr className={classes.tableFoot}>
                        <td colSpan="4">
                          جمع کل :<span> {NumberWithCommas(totalAmount)} </span>
                        </td>
                      </tr>
                    </tfoot>
                  </Table>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </section>
    </Fragment>
  );
}

export default CheckOut;
