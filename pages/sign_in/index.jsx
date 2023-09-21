import React, { useEffect, useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/footer/footer";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/header/header";
import { useRouter } from "next/router";
import { setSignInWord } from "@/src/store";

function Sign_In() {
  const colorMode = useSelector((state) => state.colorMode);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [validMail, setValidMail] = useState(true);
  const [registeredAcs, setRegisteredAcs] = useState([]);
  const [showPassword, setShowPassword] = useState("password");
  const sign_in_word = useSelector((state) => state.signInWord);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const dispatch = useDispatch();
  const router = useRouter();

  const submitHandler = () => {
    // console.log(registeredAcs)
    const loggedAc = registeredAcs.filter(
      (each) => each.email === userDetails.email
    );
    if (loggedAc.length > 0) {
      if (loggedAc[0].password === userDetails.password) {
        const word = JSON.stringify(loggedAc[0]);
        dispatch(setSignInWord(word));
        // console.log(word)
        router.push("/");
      } else {
        console.log("please enter the correct password");
      }
    } else {
      console.log("please enter registered mail");
    }
  };

  useEffect(() => {
    const accounts = JSON.parse(localStorage.getItem("userDetails"));
    if (accounts) {
      setRegisteredAcs(accounts);
    }
  }, []);

  return (
    <>
      <Header />
      <Container
        fluid
        className={`${
          colorMode ? "bg-dark dark-mode" : "bg-light light-mode"
        } sign_in_mainContainer`}
      >
        <Col className="d-flex justify-content-center align-items-center">
          <Col className="sign_in_innerContainer">
            <Col>
              <label htmlFor="email">Email</label>
            </Col>
            <Col>
              <input
                onChange={(e) => {
                  setValidMail(emailPattern.test(e.target.value));
                  setUserDetails((prevDetails) => ({
                    ...prevDetails,
                    [e.target.name]: e.target.value,
                  }));
                }}
                name="email"
                type="email"
                id="email"
                value={userDetails.email}
                className="sign_in_input"
              />
            </Col>
            <p>{validMail ? "" : "enter a valid mail"}</p>
            <Col>
              <label htmlFor="password">Password</label>
            </Col>
            <Col>
              <input
                onChange={(e) => {
                  setUserDetails((prevDetails) => ({
                    ...prevDetails,
                    [e.target.name]: e.target.value,
                  }));
                }}
                name="password"
                type={`${showPassword}`}
                id="password"
                value={userDetails.password}
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
              <button
                onClick={submitHandler}
                className={`btn btn-outline-secondary`}
              >
                Submit
              </button>
            </Col>
            {/* <Col className="my-2">
              <button
                onClick={() => console.log(sign_in_word)}
                className={`btn btn-outline-secondary`}
              >
                console
              </button>
            </Col> */}
          </Col>
        </Col>
      </Container>
      <Footer />
    </>
  );
}

export default Sign_In;
