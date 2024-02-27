import React, { useEffect, useState } from "react";
import NewsItem from "../NewsItem";
import Spinner from "../Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import ScrollToTop from "react-scroll-to-top";
import "./NewsBox.css";

const NewsBox = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (first) => {
    return first.charAt(0).toUpperCase() + first.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}`;
    setLoading(true);
    try {
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(60);
      setArticles(parsedData.articles || []);
      setTotalResults(parsedData.totalResults);
      props.setProgress(100);
      setLoading(false);
    } catch (error) {
      console.error("Error updating news:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} News - NewsApp`;
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}`;

    try {
      let data = await fetch(url);
      let parsedData = await data.json();

      setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">
        Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="news-box">
          {articles.map((element) => (
            <div key={element.url} className="news-item">
              <NewsItem
                title={element.title ? element.title.slice(0, 40) : ""}
                description={
                  element.description ? element.description.slice(0, 80) : ""
                }
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                date={element.publishedAt}
                author={element.author}
                source={element.source.name}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
      <ScrollToTop
        smooth={true}
        color={props.mode}
        style={{ border: "1px solid" }}
      />
    </div>
  );
};

NewsBox.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

NewsBox.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string,
  mode: PropTypes.string,
};

export default NewsBox;
