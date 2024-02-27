import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  const defaultImageUrl =
    "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_960_720.jpg";

  return (
    <div className="my-3">
      <div className="card">
        <img
          src={imageUrl || defaultImageUrl}
          className="card-img-top"
          alt="Article Thumbnail"
        />
        <span className="badge text-bg-info">{source}</span>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-primary btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
