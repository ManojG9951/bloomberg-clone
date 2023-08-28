import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedNews } from "@/src/store";

const firstRow_one = [4, 5, 6];
const firstRow_two = [7, 8, 9];
const secondRow_one = [12, 13, 14, 15];
const secondRow_two = [17, 18, 19, 20, 21, 22];
const thirdRow_one = [24, 25, 26, 27, 28, 29];

function ThirdSection({ articles }) {
  const colorMode = useSelector((state) => state.colorMode);
  const selectedNews = useSelector((state) => state.selectedNews);
  const dispatch = useDispatch();

  const handleNewsChange = (news) => {
    dispatch(setSelectedNews(news));
  };
  return (
    <Col
      className={`${colorMode ? "dark-mode" : "light-mode"} ${
        styles.third_section_mainContainer
      }`}
    >
      <Row className="d-flex justify-content-center align-items-start">
        {/* ************************** Third section First Row *********************************************** */}
        <Col
          xs={12}
          lg={2}
          className={`px-4 px-lg-0 ${styles.third_section_firstrow_maincontainer}`}
        >
          <Col className={styles.third_section_firstrow_Heading}>
            <h4 className="text-danger">Latest</h4>
          </Col>
          <Row>
            {firstRow_one.map((each, index) => {
              return (
                <Col
                  key={each}
                  xs={12}
                  md={6}
                  lg={12}
                  className={`${
                    index === 2 ? "d-none d-lg-block" : "d-block"
                  } ${styles.third_section_firstrow_content}`}
                >
                  <p className="p-0">{articles === undefined ? "" : articles[each].source.name}</p>
                  <Link
                    onClick={() =>
                      handleNewsChange(JSON.stringify(articles[each]))
                    }
                    className={`linkTags ${
                      colorMode ? "dark-mode" : "light-mode"
                    } `}
                    href={`news/${articles === undefined ? "" : articles[each].title}`}
                  >
                    <h6
                      className={`${colorMode ? "dark-mode" : "light-mode"} `}
                    >
                      {articles === undefined ? "" : articles[each].title}
                    </h6>
                  </Link>
                  <p className="p-0">{articles === undefined ? "" : articles[each].publishedAt}</p>
                </Col>
              );
            })}
          </Row>
          <Col className={styles.third_section_firstrow_Heading}>
            <h4 className="text-danger">TRENDING</h4>
          </Col>
          <Row>
            {firstRow_two.map((each, index) => {
              return (
                <Col
                  key={each}
                  xs={12}
                  md={6}
                  lg={12}
                  className={`${
                    index === 2 ? "d-none d-lg-block" : "d-block"
                  } ${styles.third_section_firstrow_content}`}
                >
                  <p className="p-0">{articles === undefined ? "" : articles[each].source.name}</p>
                  <Link
                    onClick={() =>
                      handleNewsChange(JSON.stringify(articles[each]))
                    }
                    className="linkTags"
                    href={`news/${each}`}
                  >
                    <h6
                      className={`${colorMode ? "dark-mode" : "light-mode"} `}
                    >
                      {articles === undefined ? "" : articles[each].title}
                    </h6>
                  </Link>
                  <p className="p-0">{articles === undefined ? "" : articles[each].publishedAt}</p>
                </Col>
              );
            })}
          </Row>
        </Col>
        {/* ************************* Third Section Second Row **************************** */}
        <Col xs={11} lg={6} className="my-3">
          <Row>
            <Col xs={12} md={6} lg={12} xl={6}>
              <div
                className={styles.mainHomeHeadingImage}
                style={{ backgroundImage: `url(${articles === undefined ? "" : articles[11]?.urlToImage})` }}
              />
            </Col>
            <Col xs={12} md={6} lg={12} xl={6}>
              <Col className={styles.third_section_secondrow_content}>
                <p className="p-0 text-secondary">{articles === undefined ? "" : articles[11].source.name}</p>
                <Link
                  onClick={() => handleNewsChange(JSON.stringify(articles === undefined ? "" : articles[11]))}
                  className={`${
                    colorMode ? "dark-mode" : "light-mode"
                  } linkTags`}
                  href="news/11"
                >
                  <h4>{articles === undefined ? "" : articles[11].title}</h4>
                </Link>
                <p className="p-0 text-secondary">{articles === undefined ? "" : articles[11].publishedAt}</p>
              </Col>
              <p style={{ borderBottom: "1px dotted black" }}>
                {articles === undefined ? "" : articles[11].author}
              </p>
              <p style={{ borderBottom: "1px dotted black" }}>
                {articles === undefined ? "" : articles[11].content}
              </p>
              <p style={{ borderBottom: "1px dotted black" }}>
                {articles === undefined ? "" : articles[11].description}
              </p>
            </Col>
          </Row>
          <Col className="py-2">
            <Row>
              {secondRow_one.map((each, index) => {
                return (
                  <Col
                    key={each}
                    xs={12}
                    md={6}
                    lg={3}
                    className={`${index >= 2 ? "d-none d-md-block" : ""} ${
                      styles.third_section_firstrow_content
                    }`}
                  >
                    <p className="p-0 text-secondary">
                      {articles === undefined ? "" : articles[each].source.name}
                    </p>
                    <Link
                      onClick={() =>
                        handleNewsChange(JSON.stringify(articles === undefined ? "" : articles[each]))
                      }
                      className={`${
                        colorMode ? "dark-mode" : "light-mode"
                      } linkTags`}
                      href={`news/${each}`}
                    >
                      <h6
                        className={`${colorMode ? "dark-mode" : "light-mode"} `}
                        style={{ fontWeight: "700" }}
                      >
                        {articles === undefined ? "" : articles[each].title}
                      </h6>
                    </Link>
                    <p className="p-0 text-secondary">
                      {articles === undefined ? "" : articles[each].publishedAt}
                    </p>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col>
            <Row>
              {secondRow_two.map((each) => {
                return (
                  <Col key={each} xs={12} md={6} lg={4} className="p-2">
                    <div
                      className={`${styles.third_section_third_row}  ${
                        colorMode ? "dark-mode" : "light-mode"
                      }`}
                      style={{ backgroundColor: "#fff" }}
                    >
                      <div
                        className={styles.third_section_third_row_img}
                        style={{
                          backgroundImage: `url(${articles === undefined ? "" : articles[each].urlToImage})`,
                        }}
                      />
                      <div>
                        <Col
                          className={`p-2 ${styles.third_section_firstrow_content}`}
                        >
                          <p className="p-0 text-secondary">
                            {articles === undefined ? "" : articles[each].source.name}
                          </p>
                          <Link
                            onClick={() =>
                              handleNewsChange(JSON.stringify(articles === undefined ? "" : articles[each]))
                            }
                            className={`${
                              colorMode ? "dark-mode" : "light-mode"
                            } linkTags`}
                            href={`news/${each}`}
                          >
                            <h6
                              className={`${
                                colorMode ? "dark-mode" : "light-mode"
                              } `}
                            >
                              {articles === undefined ? "" : articles[each].title}
                            </h6>
                          </Link>
                          <p className="p-0 text-secondary">
                            {articles === undefined ? "" : articles[each].publishedAt}
                          </p>
                        </Col>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Col>
        {/* ************************* Third Section Third Row **************************** */}
        <Col
          className={`${colorMode ? "dark-mode" : "light-mode"} py-2`}
          xs={11}
          lg={3}
        >
          <div className={styles.third_section_third_row}>
            <div
              className={styles.third_section_third_row_img}
              style={{ backgroundImage: `url(${articles === undefined ? "" : articles[23]?.urlToImage})` }}
            />
            <div>
              <Col className={`p-2 ${styles.third_section_firstrow_content}`}>
                <p className="p-0 text-secondary">{articles === undefined ? "" : articles[23].source.name}</p>
                <Link
                  onClick={() => handleNewsChange(JSON.stringify(articles === undefined ? "" : articles[23]))}
                  className={`${
                    colorMode ? "dark-mode" : "light-mode"
                  } linkTags`}
                  href={`news/23`}
                >
                  <h6>{articles === undefined ? "" : articles[23].title}</h6>
                </Link>
                <p className="p-0">{articles === undefined ? "" : articles[23].publishedAt}</p>
              </Col>
            </div>
          </div>
          <Col
            xs={12}
            className={`${styles.third_section_firstrow_maincontainer} py-2 m-0`}
          >
            <Col className={styles.third_section_firstrow_Heading}>
              <h4>
                BLOOMBERG <span className="text-primary">OPINION</span>
              </h4>
            </Col>
            {thirdRow_one.map((each) => {
              return (
                <Col
                  key={each}
                  className={styles.third_section_firstrow_content}
                >
                  <h6 className="text-primary">{articles === undefined ? "" : articles[each].source.name}</h6>
                  <Link
                    onClick={() =>
                      handleNewsChange(JSON.stringify(articles === undefined ? "" : articles[each]))
                    }
                    className={`${
                      colorMode ? "dark-mode" : "light-mode"
                    } linkTags`}
                    href={`news/${each}`}
                  >
                    <h6
                      className={`${colorMode ? "dark-mode" : "light-mode"} `}
                    >
                      {articles === undefined ? "" : articles[each].title}
                    </h6>
                  </Link>
                </Col>
              );
            })}

            <Col className={styles.third_section_firstrow_content}>
              <p className="text-secondary">MORE FROM OPINION</p>
              <Col>
                <h6>One Story you all want to talk about</h6>
                <p>Get The big news letter in your box daily</p>
                <Row>
                  <Col xs={7}>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className={styles.thirdRow_third_input}
                    />
                  </Col>
                  <Col xs={3}>
                    <button className="btn btn-outline-dark">SignUp</button>
                  </Col>
                </Row>
                <Row>
                  <Col xs={1}>
                    <input type="checkbox" />
                  </Col>
                  <Col xs={11}>
                    <p>Bloomberg may send me offers and promotions.</p>
                  </Col>
                </Row>
                <Col xs={11}>
                  <p>
                    By submitting my information, I agree to the Privacy Policy
                    and Terms of Service..
                  </p>
                </Col>
              </Col>
            </Col>
          </Col>
        </Col>
      </Row>
    </Col>
  );
}

export default ThirdSection;
