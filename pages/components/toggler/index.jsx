import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setColorMOde } from "@/src/store";

function Toggler() {
  const [togglerMove, setTogglerMove] = useState("toggler_right_move");
  const colorModeCheck = useSelector((state) => state.colorMode);
  const dispatch = useDispatch();

  return (
    <Container fluid>
      <Col className="toggler_inner_main">
        <Row>
          <Col
            xs={6}
            onClick={() => {
              dispatch(setColorMOde(false));
              setTogglerMove("toggler_right_move");
            }}
            className={`toggler_sun_main ${
              colorModeCheck ? "toggler_right_move" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="yellow"
              className="bi bi-brightness-low-fill p-1"
              viewBox="0 0 16 16"
            >
              <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z" />
            </svg>
          </Col>
          <Col
            xs={6}
            className={`${
              colorModeCheck ? "toggler_left_move" : "toggler_right_move"
            } toggler_door_main`}
          >
            {/* <Col xs={12} className='toggler_door_inner'>

              </Col> */}
          </Col>
          <Col
            xs={6}
            onClick={() => {
              dispatch(setColorMOde(true));
              setTogglerMove("toggler_left_move");
            }}
            className={`toggler_moon_main ${
              colorModeCheck ? "toggler_left_move" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="lightgrey"
              class="bi -moon-stars-fill p-1"
              viewBox="0 0 16 16"
            >
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
              <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
            </svg>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default Toggler;
