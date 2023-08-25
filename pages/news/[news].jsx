import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

function Index() {
  const colorMode = useSelector((state) => state.colorMode);
  const selectedNews = useSelector((state) => state.selectedNews);
  const [parsedNews] = useState(
    selectedNews.length > 0 ? [JSON.parse(selectedNews)] : []
  );
 

  return (
    <>
      <Header />
      {parsedNews.length > 0 ? (
        <Container
          fluid
          className={`${
            colorMode ? "bg-dark" : "bg-light"
          } news_mainContainer d-flex flex-column justify-content-center align-items-center`}
        >
          <Col
            xs={12}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <Col xs={12}>
              <div
                className="image-news"
                style={{ backgroundImage: `url(${parsedNews[0]?.urlToImage})` }}
              />
            </Col>
            <Col xs={12}>
              <Row className="d-flex justify-content-between">
                <Col xs={12} className="text-left text-dark">
                  <h6 className=" py-2 text-primary">
                    Published At:{" "}
                    <span className="news_date">
                      {parsedNews[0].publishedAt.slice(0, 10)}
                    </span>
                  </h6>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={9} lg={7}>
              <h1
                className={`${
                  colorMode ? "text-light" : "text-dark"
                } news_title`}
              >
                {parsedNews[0].title}
              </h1>
            </Col>
            <Col>
              <Link href={`${parsedNews[0]?.url}`}>
                <p className={`${colorMode ? "bg-dark" : "bg-light"}`}>
                  Source: {parsedNews[0].source.name}
                </p>
              </Link>
            </Col>

            <Col xs={12} md={9} lg={7}>
              <h4 className="p-4 text-secondary">
                {parsedNews[0].description} {parsedNews[0].description}{" "}
                {parsedNews[0].description}
              </h4>
            </Col>
          </Col>
        </Container>
      ) : (
        <Container>
          <Col className="error_btn text-dark">
            Error Please Go Back To Home Page <Link href="/">Click Here</Link>
          </Col>
        </Container>
      )}

      <Footer />
    </>
  );
}

export default Index;
