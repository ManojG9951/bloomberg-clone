import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import Header from "@/pages/components/header/header";
import Footer from "../components/footer/footer";
import { useSelector, useDispatch } from "react-redux";
import { setSignInWord } from "@/src/store";

function Sign_in() {
  const [showPassword, setShowPassword] = useState("password");
  const dispatch = useDispatch();
  const btnHandler = () => {
    dispatch(setSignInWord("manoj"));
  };

  return (
    <>
      <Header />
      <Container className="sign_in_mainContainer">
        <Col className="d-flex justify-content-center align-items-center">
          <Col className="sign_in_innerContainer">
            <Col>
              <label htmlFor="email">Email</label>
            </Col>
            <Col>
              <input type="email" id="email" className="sign_in_input" />
            </Col>
            <Col>
              <label htmlFor="password">Password</label>
            </Col>
            <Col>
              <input
                type={`${showPassword}`}
                id="password"
                className="sign_in_input"
              />
            </Col>
            <Col>
              <input
                onClick={() =>
                  showPassword === "password"
                    ? setShowPassword("text")
                    : setShowPassword("password")
                }
                id="showPass"
                type="checkbox"
                className="mx-2"
              />
              <label htmlFor="showPass">show password</label>
            </Col>
            <Col className="my-2">
              <button className="btn btn-outline-secondary">SignIn</button>
            </Col>
          </Col>
        </Col>
      </Container>
      <Footer />
    </>
  );
}

export default Sign_in;
