import React from "react";
import styles from "../../../styles/header.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { setCounter } from "@/pages/store";
import { useSelector, useDispatch } from "react-redux";
import { setActiveTab, setSelectedLanguage, setColorMOde } from "@/src/store";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [region, setRegion] = useState("in");
  const [language, setLanguage] = useState("en");
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [category, setCategory] = useState("everything");
  const [inputValue, setInputValue] = useState("");

  const activeTab = useSelector((state) => state.activeTab);
  const selectedLanguage = useSelector((state) => state.selectedLanguage);
  const colorModeCheck = useSelector((state) => state.colorMode);
  const loadingCheck = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const handleTabChange = (tab) => {
    dispatch(setActiveTab(tab));
  };

  const handleLanguageChange = (event) => {
    dispatch(setSelectedLanguage(event.target.value));
  };

  const categorySetting = (text) => {
    setCategory(text);
  };
  const colorModeHandler = (e) => {
    dispatch(setColorMOde(e.target.checked));
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setNavbarVisible(isVisible);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <Container
      fluid
      className={`${colorModeCheck ? "dark-mode" : "dark-mode"} ${
        styles.navbar
      } ${navbarVisible ? "" : styles.hidden} ${
        loadingCheck ? "d-none" : "d-block"
      }`}
    >
      <Row className="d-flex justify-content-around align-items-center">
        <Col lg={8} xs={5}>
          <h1>Bloomberg</h1>
        </Col>
        <Col xs={7} lg={4}>
          <Row xs={12}>
            <Col
              xs={6}
              className="d-lg-none d-flex flex-column justify-content-center align-items-center"
            >
              <select
                onChange={(e) => {
                  handleTabChange(e.target.value);
                  // router.back();
                }}
                className="text-center"
              >
                <option value="everything">All News</option>
                <option value="markets">Markets</option>
                <option value="sports">Sports</option>
                <option value="business">Business</option>
                <option value="science">Science</option>
                <option value="economics">Economics</option>
                <option value="wealth">Wealth</option>
                <option value="ai">AI</option>
                <option value="wealth">Wealth</option>
                <option value="city">City</option>
                <option value="crypto">Crypto</option>
              </select>
            </Col>
            <Col
              xs={6}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <select
                value={selectedLanguage}
                onChange={(e) => {
                  handleLanguageChange(e);
                  // router.back();
                }}
                className="text-center"
              >
                {/* <option value="en">English</option> */}
                {/* <option value="ar">Arabic</option> */}
                <option value="de">German</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                {/* <option value="he">Hebrew</option> */}
                <option value="nl">Dutch</option>
                {/* <option value="ru">Russian</option> */}
                <option value="zh">Chinese</option>
                <option value="it">Italian</option>
              </select>
            </Col>
            <Col
              lg={2}
              className="d-none d-lg-flex flex-column justify-content-center align-items-center"
            >
              <h6>SignIn</h6>
            </Col>
            <Col
              lg={4}
              className="d-none d-lg-flex flex-column justify-content-center align-items-center"
            >
              <button className={`btn btn-outline-light`}>Subscribe</button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Col
        xs={12}
        className={`d-none d-lg-block ${styles.category_tab_container_main}`}
      >
        <div className={`${styles.category_tab_container} d-flex`}>
          <Link
            href="/"
            className={`${styles.category_tab} ${
              activeTab === "everything" ? "nav-tab" : ""
            }`}
            onClick={() => handleTabChange("everything")}
          >
            AllNews
          </Link>

          <Link
            href="/"
            className={`${styles.category_tab} ${
              activeTab === "markets" ? "nav-tab" : ""
            }`}
            onClick={() => handleTabChange("markets")}
          >
            Markets
          </Link>

          <Link
            href="/"
            className={`${styles.category_tab} ${
              activeTab === "sports" ? "nav-tab" : ""
            }`}
            onClick={() => handleTabChange("sports")}
          >
            Sports
          </Link>
          <Link
            href="/"
            className={`${styles.category_tab} ${
              activeTab === "business" ? "nav-tab" : ""
            }`}
            onClick={() => handleTabChange("business")}
          >
            Business
          </Link>
          <Link
            href="/"
            className={`${styles.category_tab} ${
              activeTab === "science" ? "nav-tab" : ""
            }`}
            onClick={() => handleTabChange("science")}
          >
            Science
          </Link>
          <Link
            href="/"
            className={`${styles.category_tab} ${
              activeTab === "economics" ? "nav-tab" : ""
            }`}
            onClick={() => handleTabChange("economics")}
          >
            Economics
          </Link>
          <Link
            href="/"
            className={`${styles.category_tab} ${
              activeTab === "industries" ? "nav-tab" : ""
            }`}
            onClick={() => handleTabChange("industries")}
          >
            Industries
          </Link>
          <Link
            href="/"
            className={`${styles.category_tab} ${
              activeTab === "technology" ? "nav-tab" : ""
            }`}
            onClick={() => handleTabChange("technology")}
          >
            Tech
          </Link>
          <Link
            href="/"
            className={`${styles.category_tab} ${
              activeTab === "ai" ? "nav-tab" : ""
            }`}
            onClick={() => handleTabChange("ai")}
          >
            AI
          </Link>
          {/* <p
            className={styles.category_tab}
            onClick={() => handleTabChange("politics")}
          >
            Polytics
          </p> */}
          <Link
            href="/"
            className={`${styles.category_tab} ${
              activeTab === "wealth" ? "nav-tab" : ""
            }`}
            onClick={() => handleTabChange("wealth")}
          >
            Wealth
          </Link>
          {/* <p
            className={styles.category_tab}
            onClick={() => handleTabChange("equality")}
          >
            Equality
          </p> */}
          <Link
            href="/"
            className={`${styles.category_tab} ${
              activeTab === "city" ? "nav-tab" : ""
            }`}
            onClick={() => handleTabChange("city")}
          >
            City
          </Link>
          <Link
            href="/"
            className={`${styles.category_tab} ${
              activeTab === "crypto" ? "nav-tab" : ""
            }`}
            onClick={() => handleTabChange("crypto")}
          >
            Crypto
          </Link>
        </div>
      </Col>
      <Col className="color-mode">
        <div>
          <input
          readOnly
            onClick={(e) => colorModeHandler(e)}
            className="m-2"
            type="checkbox"
            checked={colorModeCheck ? true : false}
          />
          Dark Mode
        </div>
      </Col>
    </Container>
  );
};

export default Navbar;

// function Header() {
//   const [prevScrollPos, setPrevScrollPos] = useState(0);

//   const [navbarVisible, setNavbarVisible] = useState(true);

//   const router = useRouter();

//   useEffect(() => {

//     const handleScroll = () => {

//       const currentScrollPos = window.pageYOffset;

//       const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

//       setNavbarVisible(isVisible);

//       setPrevScrollPos(currentScrollPos);

//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => window.removeEventListener('scroll', handleScroll);

//   }, [prevScrollPos]);
//   if (router.pathname === '/')

//   return (
//     <>

//     </>
//   );
// }

// export default Header;
