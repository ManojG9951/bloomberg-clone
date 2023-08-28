import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/home.module.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedNews } from "@/src/store";
import { setMoreNews } from "@/src/store";

const newsIndexes = [0, 1, 2, 3];
function Headlines({ News, text }) {
  const colorMode = useSelector((state) => state.colorMode);
  const selectedNews = useSelector((state) => state.selectedNews);
  const language = useSelector((state) => state.selectedLanguage);
  const dispatch = useDispatch();
  const handleNewsChange = (news) => {
    dispatch(setSelectedNews(news));
  };
  const moreNewsHandler = () => {
    dispatch(setMoreNews(News));
  };

  return (
    <Col
      xs={12}
      className={`${colorMode ? "dark-mode" : "light-mode"} ${
        styles.fouth_row_main_container
      }`}
    >
      <Col className="d-flex justify-content-between align-items-center">
        <h2>{text}</h2>
        <Link onClick={moreNewsHandler} className="linkTags" href={`${text}`}>
          <p>More News from {text} &#8594;</p>
        </Link>
      </Col>
      <Row>
        {newsIndexes.map((each) => {
          return (
            <Col key={each} xs={12} md={3} className="p-2">
              <div className={styles.third_section_third_row}>
                <div
                  className={styles.third_section_third_row_img}
                  style={{
                    backgroundImage: `url(${News[each]?.urlToImage})`,
                  }}
                />
                <div>
                  <Col
                    className={`p-2 ${styles.third_section_firstrow_content}`}
                    style={{ border: "none" }}
                  >
                    <p className="p-0 text-secondary">
                      {News[each]?.source.name}
                    </p>
                    <Link
                      onClick={() =>
                        handleNewsChange(JSON.stringify(News[each]))
                      }
                      className={`${
                        colorMode ? "dark-mode" : "light-mode"
                      } linkTags`}
                      href={`news/${each}`}
                    >
                      <h6>{News[each].title}</h6>
                    </Link>
                    <p className="p-0 text-secondary">
                      {News[each]?.publishedAt}
                    </p>
                  </Col>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Col>
  );
}

export default Headlines;
