import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function Loading() {
  const loadingCheck = useSelector((state) => state.loading);
  return (
    <Container
      fluid
      className={`${loadingCheck ? "d-flex" : "d-none"} Loading_MainContainer`}
    >
      <Col className="loading_inner d-flex flex-column justify-content-center align-items-center">
        <Row className="h-100 justify-content-center align-items-center">
          <Col className="">
            <div className="loading_symbol_1" />
          </Col>
          <Col className="">
            <div className="loading_symbol_2" />
          </Col>
          <Col className="">
            <div className="loading_symbol_3" />
          </Col>
          <Col className="">
            <div className="loading_symbol_4" />
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default Loading;
