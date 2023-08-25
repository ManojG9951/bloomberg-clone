import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { useRouter } from "next/router";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../src/store";
import Loading from "./components/Loading";
import Link from "next/link";
import { setSelectedNews } from "../src/store";

const first_iteration = [1, 2, 3, 4, 5, 6];
const second_iteration = [7, 8, 9];
const Third_iteration = [10, 11, 12];
const fourth_iteration = [13, 14, 15, 16, 17, 18, 19, 20];

function MoreNews() {
  const dispatch = useDispatch();
  const loadingCheck = useSelector((state) => state.loading);
  const colorMode = useSelector((state) => state.colorMode);
  const categoryNews = useSelector((state) => state.moreNews);
  const [loadingItems, setLoadingItems] = useState({
    startIndex: 21,
    endIndex: 24,
  });
  const router = useRouter();
  const loadMoreHandler = (e) => {
    if (loadingItems.endIndex >= 38) {
      e.target.classList.add("disabled");
    } else {
      setLoadingItems({
        startIndex: 21,
        endIndex: loadingItems.endIndex + 3,
      });
    }
  };

  const handleNewsChange = (news) => {
    dispatch(setSelectedNews(news));
  };
  const { more_news } = router.query;

  return (
    <>
      <Header />
      <Loading />
      {categoryNews.length > 0 ? (
        <Container
          fluid
          className={`${colorMode ? "dark-mode" : "light-mode"} ${
            loadingCheck ? "d-none" : "d-block"
          } more_news_main_Container news_mainContainer`}
        >
          <Col>
            <Col className={`${colorMode ? "dark-mode" : "light-mode"}`}>
              <h1>{more_news}</h1>
            </Col>
            <Row className="more_news_section_1 py-3 dotted_border_B">
              <Col xs={12} md={5}>
                <div
                  className="more_news_section_1_Image"
                  style={{
                    backgroundImage: `url(${categoryNews[0].urlToImage === "" ? "https://fscl01.fonpit.de/userfiles/7687254/image/X_WeChat.jpg":categoryNews[0].urlToImage}`,
                  }}
                />
              </Col>
              <Col
                xs={12}
                md={6}
                onClick={() =>
                  handleNewsChange(JSON.stringify(categoryNews[0]))
                }
              >
                <p>{categoryNews[0].source.name}</p>
                <Link
                  className={`${
                    colorMode ? "dark-mode" : "light-mode"
                  } linkTags`}
                  href="news/0"
                >
                  <h3>{categoryNews[0].title}</h3>
                </Link>
                <h6>
                  By <b>{categoryNews[0].author}</b>
                </h6>
              </Col>
            </Row>
            <Row xs={12} className="my-2">
              <Col md={12} lg={7} className="dotted_border_LR">
                <Row>
                  {first_iteration?.map((each) => {
                    return (
                      <Col
                        key={each}
                        className="dotted_border_B my-2"
                        xs={6}
                        md={4}
                        style={{ height: "280px", overflow: "hidden" }}
                      >
                        <div
                          className="more_news_section_RC_Images"
                          style={{
                            backgroundImage: `url(${categoryNews[each].urlToImage === "" ? "https://fscl01.fonpit.de/userfiles/7687254/image/X_WeChat.jpg":categoryNews[each].urlToImage}`,
                          }}
                        />
                        <Col
                          className=""
                          onClick={() =>
                            handleNewsChange(JSON.stringify(categoryNews[each]))
                          }
                        >
                          <p>{categoryNews[each]?.source.name}</p>
                          <Link
                            className={`${
                              colorMode ? "dark-mode" : "light-mode"
                            } linkTags`}
                            href="news/0"
                          >
                            <h6>{categoryNews[each]?.title.slice(0, 75)}</h6>
                          </Link>
                        </Col>
                      </Col>
                    );
                  })}
                </Row>
              </Col>

              <Col md={5} lg={3} style={{ borderRight: "1px dotted black" }}>
                <p className="text-secondary">MORE FROM OPINION</p>
                <Col>
                  <h6>One Story you all want to talk about</h6>
                  <p>Get The big news letter in your box daily</p>
                  <Col className="">
                    <Col xs={8}>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        //   className={styles.thirdRow_third_input}
                      />
                    </Col>

                    <Col xs={2}>
                      <button className="btn btn-outline-dark">SignUp</button>
                    </Col>
                  </Col>
                  <Row>
                    <Col xs={1}>
                      <input type="checkbox" />
                    </Col>
                    <Col xs={10}>
                      <p>Bloomberg may send me offers and promotions.</p>
                    </Col>
                  </Row>
                  <Col xs={11}>
                    <p>
                      By submitting my information, I agree to the Privacy
                      Policy and Terms of Service..
                    </p>
                  </Col>
                </Col>
                <Col>
                  <h4 className="my-2 dotted_border_T">
                    <b>News Letters</b>
                  </h4>
                  {second_iteration.map((each) => {
                    return (
                      <Row
                        key={each}
                        className="my-3 "
                        style={{ height: "80px", overflow: "hidden" }}
                      >
                        <Col xs={4}>
                          <div
                            className="more_news_section_2_Image"
                            style={{
                              backgroundImage: `url(${categoryNews[each].urlToImage === "" ? "https://fscl01.fonpit.de/userfiles/7687254/image/X_WeChat.jpg":categoryNews[each].urlToImage})`,
                            }}
                          />
                        </Col>
                        <Col
                          onClick={() =>
                            handleNewsChange(JSON.stringify(categoryNews[each]))
                          }
                        >
                          <Link
                            className={`${
                              colorMode ? "dark-mode" : "light-mode"
                            } linkTags`}
                            href="news/0"
                          >
                            <h5>
                              <b>
                                {categoryNews[each].title?.slice(0, 20)}
                                ...
                              </b>
                            </h5>
                          </Link>
                        </Col>
                      </Row>
                    );
                  })}
                </Col>
              </Col>
              <Col md={7} lg={2}>
                <Col className=" dotted_border_TB">
                  <h5 className="text-danger">Latest NEWS</h5>
                </Col>
                {Third_iteration.map((each) => {
                  return (
                    <Col className="dotted_border_B" key={each}>
                      <p>{categoryNews[each].source.name}</p>
                      <Link
                        className={`${
                          colorMode ? "dark-mode" : "light-mode"
                        } linkTags`}
                        href="news/0"
                      >
                        <h5
                          onClick={() =>
                            handleNewsChange(JSON.stringify(categoryNews[each]))
                          }
                        >
                          {categoryNews[each].title.slice(0, 75)}...
                        </h5>
                      </Link>
                    </Col>
                  );
                })}
              </Col>
            </Row>
          </Col>
          <Col>
            <Col>
              <h2 className="dotted_border_TB my-3 py-3">
                More News From {more_news}
              </h2>
            </Col>
            <Row>
              {fourth_iteration.map((each) => {
                return (
                  <Col
                    md={4}
                    lg={3}
                    className="more_news_section_more_news"
                    key={each}
                  >
                    <Col>
                      <div
                        className="more_news_section_3_Image"
                        style={{
                          backgroundImage: `url(${categoryNews[each].urlToImage === "" ? "https://fscl01.fonpit.de/userfiles/7687254/image/X_WeChat.jpg":categoryNews[each].urlToImage})`,
                        }}
                      />
                    </Col>
                    <Col>
                      <p>{categoryNews[each].source.name}</p>
                      <Link
                        className={`${
                          colorMode ? "dark-mode" : "light-mode"
                        } linkTags`}
                        href="news/0"
                      >
                        <h5
                          onClick={() =>
                            handleNewsChange(JSON.stringify(categoryNews[each]))
                          }
                        >
                          {categoryNews[each].title.slice(0, 75)}...
                        </h5>
                      </Link>
                    </Col>
                  </Col>
                );
              })}
            </Row>
            <Col xs={12} className="my-3 light-mode">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/x3tV44iS2KQ?autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullFcreen
              ></iframe>
            </Col>
            <Col>
              <Col>
                <h3 className="text-center">More Stories for {more_news}</h3>
              </Col>
              {categoryNews
                .slice(loadingItems.startIndex, loadingItems.endIndex)
                ?.map((each) => {
                  return (
                    <Row
                      key={each}
                      className="p-1 dotted_border_TB justify-content-center align-items-center"
                    >
                      <Col
                        xs={7}
                        md={9}
                        onClick={() => handleNewsChange(JSON.stringify(each))}
                      >
                        <Link
                          className={`${
                            colorMode ? "dark-mode" : "light-mode"
                          } linkTags`}
                          href="news/0"
                        >
                          <h5>{each.title}</h5>
                        </Link>
                        <p>{each.source.name}</p>
                      </Col>
                      <Col xs={5} md={3}>
                        <div
                          className="more_news_section_3_Image"
                          style={{
                            backgroundImage: `url(${each.urlToImage === "" ? "https://fscl01.fonpit.de/userfiles/7687254/image/X_WeChat.jpg":each.urlToImage})`,
                          }}
                        />
                      </Col>
                    </Row>
                  );
                })}
            </Col>
            <Col className="m-2">
              <button
                onClick={(e) => loadMoreHandler(e)}
                className={`${
                  colorMode ? "btn btn-outline-light" : "btn btn-outline-dark"
                }`}
              >
                Load More
              </button>
            </Col>
          </Col>
        </Container>
      ) : (
        <Container>
          <Col className="error_btn">
            Error Please Go Back To Home Page <Link href="/">Click Here</Link>
          </Col>
        </Container>
      )}
      <Footer />
    </>
  );
}

export default MoreNews;
