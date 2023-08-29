import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import SecondSection from "./components/home/second_section";
import ThirdSection from "./components/home/third_section";
import Headlines from "./components/home/headlines";
import BBOriginals from "./components/home/bb_originals";
import Footer from "../pages/components/footer/footer";
import Header from "../pages/components/header/header";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./components/Loading";
import { setLoading } from "../src/store";
import { setMoreNews } from "../src/store";
import Link from "next/link";

const api_key = "eea7b03c003a4702aabbe284367fc4d4";

const list_api_keys = [
  "c3da55865f6d4416bf76b03eefd1c597",
  "86f6be689af042cab269c852f5500d86",
  "eea7b03c003a4702aabbe284367fc4d4",
];

function Home({
  data,
  sportsNews,
  businessNews,
  technologyData,
  scienceData,
  marketTwoData,
  AiData,
}) {
  const dispatch = useDispatch();
  const [newsArticles, setArticles] = useState(data.articles);
  const [sportArticles, setSportArticles] = useState(sportsNews?.articles);
  const [technologyArticles, setTechnologyArticles] = useState(
    technologyData?.articles
  );
  const [science, setscienceDataArticles] = useState(scienceData?.articles);
  const [marketTwo, setMarketDataArticles] = useState(marketTwoData?.articles);
  const [Ai, setAiDataArticles] = useState(AiData?.articles);
  const [businessArticles, setBusinessArticles] = useState(
    businessNews?.articles
  );
  const [newsCategory, setNewsCategory] = useState("");
  const [apiKeyNum, setApiKeyNum] = useState(0);

  const activeTab = useSelector((state) => state.activeTab);
  const loadingCheck = useSelector((state) => state.loading);
  const selectedLanguage = useSelector((state) => state.selectedLanguage);

  const apiKeyHandler = () => {
    if (apiKeyNum < 3) {
      setApiKeyNum(apiKeyNum + 1);
    }
  };
  const categorySetting = (news_category) => {
    setNewsCategory(news_category);
  };
  const fetchingData = async () => {
    dispatch(setLoading(true));
    const productData = await axios
      .get(
        `https://newsapi.org/v2/everything?q=${activeTab}&language=${selectedLanguage}&pageSize=30&apiKey=${api_key}`
      )
      .then((response) => setArticles(response.data.articles))
      .catch((error) => console.log(error));
    const economicData = await axios
      .get(
        `https://newsapi.org/v2/everything?q=economics&language=${selectedLanguage}&pageSize=40&apiKey=${api_key}`
      )
      .then((response) => setSportArticles(response.data.articles))
      .catch((error) => console.log(error));
    const businessData = await axios
      .get(
        `https://newsapi.org/v2/everything?q=business&language=${selectedLanguage}&pageSize=40&apiKey=${api_key}`
      )
      .then((response) => setBusinessArticles(response.data.articles))
      .catch((error) => console.log(error));
    const technologyData = await axios
      .get(
        `https://newsapi.org/v2/everything?q=technology&language=${selectedLanguage}&pageSize=40&apiKey=${api_key}`
      )
      .then((response) => setTechnologyArticles(response.data.articles))
      .catch((error) => console.log(error));
    const scienceData = await axios
      .get(
        `https://newsapi.org/v2/everything?q=science&language=${selectedLanguage}&pageSize=40&apiKey=${api_key}`
      )
      .then((response) => setscienceDataArticles(response.data.articles))
      .catch((error) => console.log(error));
    const marketTwoData = await axios
      .get(
        `https://newsapi.org/v2/everything?q=market&language=${selectedLanguage}&pageSize=40&apiKey=${api_key}`
      )
      .then((response) => setMarketDataArticles(response.data.articles))
      .catch((error) => console.log(error));
    const AiData = await axios
      .get(
        `https://newsapi.org/v2/everything?q=ai&language=${selectedLanguage}&pageSize=40&apiKey=${api_key}`
      )
      .then((response) => setAiDataArticles(response.data.articles))
      .catch((error) => console.log(error));
    dispatch(setLoading(false));
    dispatch(setMoreNews(newsArticles));
  };

  useEffect(() => {
    fetchingData();
  }, [selectedLanguage]);
  useEffect(() => {
    fetchingData();
  }, [activeTab]);
  return (
    <>
      <Loading />
      {data !== "api key Expired" ? (
        <>
          <Header />
          <Container
            fluid
            className={`${loadingCheck ? "d-none" : "d-block"} mainContainer`}
          >
            <SecondSection articles={newsArticles} />
            <ThirdSection articles={newsArticles} />
            <Headlines News={sportArticles} text={"economics"} />
            <BBOriginals articles={newsArticles} />
            <Headlines News={businessArticles} text={"business"} />
            <Headlines News={technologyArticles} text={"technology"} />
            <Headlines News={science} text={"science"} />
            <Headlines News={marketTwo} text={"market"} />
            <Headlines News={Ai} text={"ai"} />
          </Container>
          <Footer />
        </>
      ) : (
        <Container>
          <Col className="error_btn text-dark">
            <h1>
              Your Api Key Expired Please Change to New One
              {/* <Link onClick={apiKeyHandler} className="text-dark" href="/">
                <h5>Click Here to Change</h5>
              </Link> */}
            </h1>
          </Col>
        </Container>
      )}
    </>
  );
}

export default Home;

export const getStaticProps = async () => {
  const productData = await axios
    .get(
      `https://newsapi.org/v2/everything?q=everything&language=de&pageSize=40&apiKey=${api_key}`
    )
    .then((response) => response)
    .catch((error) => {
      return { data: "api key Expired" };
    });

  const economicsData = await axios
    .get(
      `https://newsapi.org/v2/everything?q=Economics&pageSize=40&apiKey=${api_key}`
    )
    .then((response) => response)
    .catch((error) => {
      return { data: "api key Expired" };
    });
  const businessData = await axios
    .get(
      `https://newsapi.org/v2/everything?q=market&pageSize=40&apiKey=${api_key}`
    )
    .then((response) => response)
    .catch((error) => {
      return { data: "api key Expired" };
    });
  const technologyData = await axios
    .get(
      `https://newsapi.org/v2/everything?q=technology&pageSize=40&apiKey=${api_key}`
    )
    .then((response) => response)
    .catch((error) => {
      return { data: "api key Expired" };
    });
  const scienceData = await axios
    .get(
      `https://newsapi.org/v2/everything?q=science&pageSize=40&apiKey=${api_key}`
    )
    .then((response) => response)
    .catch((error) => {
      return { data: "api key Expired" };
    });
  const marketTwoData = await axios
    .get(
      `https://newsapi.org/v2/everything?q=market&pageSize=40&apiKey=${api_key}`
    )
    .then((response) => response)
    .catch((error) => {
      return { data: "api key Expired" };
    });
  const AiData = await axios
    .get(`https://newsapi.org/v2/everything?q=ai&pageSize=40&apiKey=${api_key}`)
    .then((response) => response)
    .catch((error) => {
      return { data: "api key Expired" };
    });

  return {
    props: {
      data: productData.data,
      sportsNews: economicsData?.data,
      businessNews: businessData?.data,
      technologyData: technologyData?.data,
      scienceData: scienceData?.data,
      marketTwoData: marketTwoData?.data,
      AiData: AiData?.data,
    },
  };
};
