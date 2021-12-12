import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import classes from "./LoginPage.module.scss";
import ImageLogo from '../../assets/images/logo.png'

const LoginPage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <section className={classes["login-wrapper"]}>
      <Row className={classes["login-content"]}>
        <Col md={4} className={classes.col}>
          <img
            className="login_icon"
            src={ImageLogo}
            alt="login user"
          />
          <h3>ورود به حساب کاربری</h3>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>نام کاربری</Form.Label>
              <Form.Control type="email" placeholder="نام کاربری " required  />
              {/* <Form.Text className="text-danger">
                
              </Form.Text> */}
              <Form.Control.Feedback type="invalid" className={classes.invalidInput}>لطفا نام کاربری را وارد کنید</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>رمز عبور</Form.Label>
              <Form.Control type="password" placeholder="رمز عبور " required  />
              <Form.Control.Feedback type="invalid" className={classes.invalidInput}>لطفا رمزعبور را وارد کنید</Form.Control.Feedback>

            </Form.Group>
            <Button variant="light" type="submit">
              ورود
            </Button>
          </Form>
        </Col>
      </Row>
    </section>
  );
};
export default LoginPage;
