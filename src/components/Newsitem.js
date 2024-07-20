import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <div>
        <div className="card">
          <img
            src={imageUrl}
            className="card-img-top"
            alt="images"
            // style={{ width: "300px", height: "300px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-primary">by {author} on {new Date(date).toGMTString()}</small></p>
            <a
              rel="noreferror"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}