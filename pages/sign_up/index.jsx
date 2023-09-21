import React, { useEffect, useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "@/pages/components/header/header";
import Footer from "../components/footer/footer";
import { useSelector, useDispatch } from "react-redux";
import { setSignInWord } from "@/src/store";
import { useRouter } from "next/router";
import Link from "next/link";

function Sign_up() {
  const [usersInfo, setUsersInfo] = useState([]);
  const [userLogins, setUserLogins] = useState();
  const [showPassword, setShowPassword] = useState("password");
  const [randomOTP, setRandomOTP] = useState();
  const [loading, setLoading] = useState(false);
  const [OTPBoxOpen, setOTPBoxOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
  });
  const [recipientEmail, setRecipientEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validMail, setValidMail] = useState(true);
  const [enteredOTP, setEnteredOTP] = useState("");
  const colorMode = useSelector((state) => state.colorMode);

  const initialRender = useRef(true);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSend = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recipientEmail, message }),
      });
      const data = await response.json();
      setValidMail(true);
      setLoading(false);
      setOTPBoxOpen(true);
      console.log(data.message);
    } catch (error) {
      setOTPBoxOpen(false);
      setValidMail(false);
      console.error("Error sending email:", error);
    }
  };

  const OTPGenerator = () => {
    const OTP = Math.round(Math.random() * 90000);
    setRandomOTP(OTP);
    setMessage(
      `Hello Greetings from Bloomberg Please Find Your OTP From Here ~${OTP}`
    );
  };

  const btnHandler = () => {
    // let emailExist = usersInfo.filter((each) => {
    //   each.email === userDetails.email;
    // });
    // if (emailExist.length !== 0) {
    //   console.log(emailExist);
    // } else {
    if (
      userDetails.email !== "" &&
      validMail &&
      userDetails.password !== "" &&
      userDetails.name !== "" &&
      userDetails.surname !== ""
    ) {
      handleSend();
    } else {
      console.log("something is issed");
    }
    // }

    // console.log(userDetails)
  };

  const otpSubmitHandler = () => {
    if (enteredOTP == randomOTP) {
      setUsersInfo([...usersInfo, userDetails]);
      router.push("/sign_in");
    }
  };

  useEffect(() => {
    OTPGenerator();
    if (JSON.parse(localStorage.getItem("userDetails"))) {
      const storedCartItems = JSON.parse(localStorage.getItem("userDetails"));
      setUsersInfo([...usersInfo, ...storedCartItems]);
    }
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    localStorage.setItem("userDetails", JSON.stringify(usersInfo));
  }, [usersInfo]);

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
              <label htmlFor="name">Name</label>
            </Col>
            <Col>
              <input
                name="name"
                value={userDetails.name}
                onChange={(e) => {
                  setUserDetails((prevDetails) => ({
                    ...prevDetails,
                    [e.target.name]: e.target.value,
                  }));
                }}
                className="sign_in_input"
                id="name"
                type="text"
              />
            </Col>

            <Col>
              <label htmlFor="surname">Surname</label>
            </Col>
            <Col>
              <input
                name="surname"
                value={userDetails.surname}
                onChange={(e) => {
                  setUserDetails((prevDetails) => ({
                    ...prevDetails,
                    [e.target.name]: e.target.value,
                  }));
                }}
                className="sign_in_input"
                id="surname"
                type="text"
              />
            </Col>

            <Col>
              <label htmlFor="email">Email</label>
            </Col>
            <Col>
              <input
                onChange={(e) => {
                  setValidMail(emailPattern.test(e.target.value));
                  setRecipientEmail(e.target.value);
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
            <p>
              {validMail ? "" : "enter a valid mail"}
              {loading ? "Loading..." : ""}
            </p>
            <Col>
              <label htmlFor="password">Create Password</label>
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
            <Col
              className={OTPBoxOpen ? "d-block" : "d-none"}
              style={{ transition: "all 0.5s ease" }}
            >
              <input
                onChange={(e) => setEnteredOTP(e.target.value)}
                placeholder="Enter OTP"
                className="sign_in_input"
                type="number"
              />
            </Col>
            <Col className="my-2">
              <button
                onClick={btnHandler}
                className={`btn btn-outline-secondary ${
                  OTPBoxOpen ? "d-none" : "d-block"
                }`}
              >
                Send OTP
              </button>
            </Col>
            <Col className="my-2">
              <button
                onClick={otpSubmitHandler}
                className={`btn btn-outline-secondary  ${
                  OTPBoxOpen ? "d-block" : "d-none"
                }`}
              >
                Submit
              </button>
            </Col>
            <Col>
              <Link href="/sign_in">
                <p>
                  Already a member? <span className="linkTags">Login Here</span>
                </p>
              </Link>
            </Col>
          </Col>
        </Col>
      </Container>
      <Footer />
    </>
  );
}

export default Sign_up;
