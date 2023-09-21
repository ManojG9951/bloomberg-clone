import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import styles from "@/styles/Home.module.css";

const bbo_list = [5, 6, 7, 8];

function BBOriginals({ articles }) {
  const colorMode = useSelector((state) => state.colorMode);

  return (
    <Container
      fluid
      className={`${colorMode ? "dark-mode" : "light-mode"} ${
        styles.bboriginals_mainContainer
      }`}
    >
      <Col>
        <Row className="py-3">
          <div className="d-flex justify-content-start align-items-end">
            <h1 style={{ fontWeight: "700" }}>
              Bloomberg{" "}
              <span
                style={{ fontWeight: "400", letterSpacing: "3px" }}
                className="text-secondary"
              >
                ORIGINALS
              </span>
            </h1>

            <h6 className="px-2">Business as you've never seen.</h6>
          </div>
        </Row>
        <Col>
          <Row>
            <Col xs={12} lg={2}>
              <Col className={styles.bboriginals_first_row_heading}>
                <h3 className="text-danger">UP NEXT</h3>
              </Col>
              <Row>
                {bbo_list.map((each) => {
                  return (
                    <Col
                      key={each}
                      xs={12}
                      md={6}
                      lg={12}
                      className={styles.bboriginals_first_row_content}
                    >
                      <p className="text-secondary">
                        {articles === undefined
                          ? ""
                          : articles[each].source.name}
                      </p>
                      <h5>
                        {articles === undefined
                          ? ""
                          : articles[each].title.slice(0, 30)}
                        ...
                      </h5>
                    </Col>
                  );
                })}
              </Row>
            </Col>
            <Col xs={12} md={6} lg={6} className="my-4">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/x3tV44iS2KQ?autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Col>
                <p className="text-secondary">
                  {articles === undefined ? "" : articles[0].source.name}
                </p>
                <h5>{articles === undefined ? "" : articles[0].title}</h5>
                <h6>{articles === undefined ? "" : articles[0].content}</h6>
                <Col className="my-3">
                  <button
                    className={`${
                      colorMode
                        ? "btn btn-outline-light"
                        : "btn btn-outline-dark"
                    }`}
                  >
                    Start Watching
                  </button>
                </Col>
                <h6>and Streaming onYour TV...</h6>
              </Col>
            </Col>
          </Row>
        </Col>
      </Col>
    </Container>
  );
}

export default BBOriginals;
