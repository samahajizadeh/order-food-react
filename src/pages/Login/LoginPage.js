import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import classes from "./LoginPage.module.scss";
import ImageLogo from "../../assets/images/logo.png";

import useInput from "../../hooks/useInput";

import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);

  useEffect(() => {
    const authToken = localStorage.getItem("Auth Token");
    if (authToken) {
      navigate("/home");
    }
    if (!authToken) {
      navigate("/login");
    }

    return()=>{console.log('cleanup')}
  }, [navigate]);

  const {
    value: enteredEmail,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    isValid: emailIsValid,
    hasError: emailHasError,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    changeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
    isValid: psswordIsValid,
    hasError: passwordHasError,
    reset: resetPassword,
  } = useInput((value) => value.trim().length >= 7);

  let formIsValid = false;
  if (psswordIsValid && emailIsValid) {
    formIsValid = true;
  }

  const loginHandleSubmit = async (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    try {
      const response = await signInWithEmailAndPassword(
        auth,
        enteredEmail,
        enteredPassword
      );
      localStorage.setItem("Auth Token", response._tokenResponse.refreshToken);
      navigate("/home");
    } catch (error) {
      if (
        error.cod === "auth/wrong-password" &&
        error.code === "auth/user-not-found"
      ) {
        toast.error("نام کاربری و رمز عبور اشتباه است");
      }
      if (error.code === "auth/wrong-password") {
        toast.error("رمز عبور اشتباه است");
      }
      if (error.code === "auth/user-not-found") {
        toast.error("نام کاربری اشتباه است");
      }
    }

    resetEmail();
    resetPassword();
  };

  const visiblePasswordHandler = () => {
    setShowPassword(showPassword => !showPassword);
  };

  return (
    <section className={classes["login-wrapper"]}>
      <Row className={classes["login-content"]}>
        <Col md={4} className={classes.col}>
          <img className="login_icon" src={ImageLogo} alt="login user" />
          <h3>ورود به حساب کاربری</h3>
          <Form noValidate onSubmit={loginHandleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>ایمیل</Form.Label>
              <Form.Control
                type="email"
                value={enteredEmail}
                className={emailHasError ? classes.invalid : ""}
                placeholder="ایمیل"
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                required
              />
              {emailHasError && (
                <div className={classes["invalid-text"]}>ایمیل نامعتبر است</div>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>رمز عبور</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword?'password':'text'}
                  value={enteredPassword}
                  className={passwordHasError ? classes.invalid : ""}
                  placeholder="رمز عبور "
                  onChange={passwordChangeHandler}
                  onBlur={passwordBlurHandler}
                  required
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  className={classes.visiblePassword}
                  onClick={visiblePasswordHandler}
                />
              </InputGroup>

              {passwordHasError && (
                <div className={classes["invalid-text"]}>
                  {" "}
                  پسورد نباید کمتر از 7 کاراکتر باشد
                </div>
              )}
            </Form.Group>
            {/* <Button variant="light" type="submit" disabled={!validated}> */}
            <Button variant="light" type="submit" disabled={!formIsValid}>
              ورود
            </Button>
          </Form>
        </Col>
      </Row>
    </section>
  );
};

export default LoginPage;
