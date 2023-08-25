import React from "react";
import styles from "@/styles/footer.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Link from "next/link";


function Footer() {
  const loadingCheck = useSelector((state) => state.loading)
  return (
    <Container fluid className={`bg-dark ${styles.mainContainer} ${
      loadingCheck ? "d-none" : "d-block"
    }`}>
      <Col>
        <Row className="d-flex justify-content-around">
          <Col xs={12} md={5}>
            <Row>
              <Col xs={4}>
                <Link href="" className={styles.linkItems}>
                  <p>Terms of Service</p>
                </Link>
              </Col>
              <Col xs={8}>
                <Link href="" className={styles.linkItems}>
                  <p>Do not sell or share my personal information</p>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <Link href="" className={styles.linkItems}>
                  <p>Trade Marks</p>
                </Link>
              </Col>
              <Col xs={8}>
                <Link href="" className={styles.linkItems}>
                  <p>Privacy Policy</p>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link href="" className={styles.linkItems}>
                  <p>@Bloomberg 2023 This Site Has been Cloned By Manoj Gundi</p>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={5}>
            <Row>
              <Col>
                <Link href="" className={styles.linkItems}>
                  <p>Careers</p>
                </Link>
              </Col>
              <Col>
                <Link href="" className={styles.linkItems}>
                  <p>Made in NYC</p>
                </Link>
              </Col>
              <Col>
                <Link href="" className={styles.linkItems}>
                  <p>Advertise</p>
                </Link>
              </Col>
              <Col>
                <Link href="" className={styles.linkItems}>
                  <p>Add Choices</p>
                </Link>
              </Col>
              <Col>
                <Link href="" className={styles.linkItems}>
                  <p>Help</p>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default Footer;
