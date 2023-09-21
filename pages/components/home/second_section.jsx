import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedNews } from "@/src/store";

const deta = [2, 3, 4];

function SecondSection({ articles }) {
  const selectedNews = useSelector((state) => state.selectedNews);
  const colorMode = useSelector((state) => state.colorMode);
  const dispatch = useDispatch();

  const handleNewsChange = (news) => {
    dispatch(setSelectedNews(news));
  };

  return (
    <Col className={`${colorMode ? "dark-mode" : "light-mode"}`} xs={12}>
      <Row xs={12} className={`${styles.mainHomeHeadingContainer} m-0`}>
        <Col xs={12} md={5} lg={4}>
          <div
            className={styles.mainHomeHeadingImage}
            style={{
              backgroundImage: `url(${
                articles === undefined ? "" : articles[1]?.urlToImage
              })`,
            }}
          />
        </Col>
        <Col>
          <Col
            onClick={() => handleNewsChange(JSON.stringify(articles[1]))}
            className="py-2"
          >
            <Link
              className={`${colorMode ? "dark-mode" : "light-mode"} linkTags`}
              href="news/0"
            >
              <h1 className={`${colorMode ? "dark-mode" : "light-mode"}`}>
                <span className="text-danger">.LIVE </span>
                {articles === undefined ? "" : articles[1].title.slice(0, 60)}
                ...
              </h1>
            </Link>
            <p>{articles === undefined ? "" : articles[1].publishedAt}</p>
          </Col>
          <Col
            className={`${styles.mainHomeHeadingContainerTwo} m-0`}
            style={{ borderBottom: "1px solid" }}
          >
            <Row>
              {deta.map((each, index) => {
                return (
                  <Col
                    key={each}
                    className={`${index === 2 ? "d-none d-xl-block" : ""}`}
                    xs={12}
                    lg={6}
                    xl={4}
                    onClick={() =>
                      handleNewsChange(JSON.stringify(articles[each]))
                    }
                  >
                    <Link
                      className={`linkTags ${
                        colorMode ? "dark-mode" : "light-mode"
                      }`}
                      href={`news/${each}`}
                    >
                      <h5>
                        {articles === undefined ? "" : articles[each].title}
                      </h5>
                    </Link>
                    <p>
                      {articles === undefined ? "" : articles[each].publishedAt}
                    </p>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Col>
      </Row>
    </Col>
  );
}

export default SecondSection;
