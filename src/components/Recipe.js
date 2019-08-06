import React, { Component } from "react";

class Recipe extends Component {
  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.changeID(this.props.id);
  }

  render() {
    const { image_url, title, publisher, source_url } = this.props.res;
    return (
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card">
          <img
            src={image_url}
            className="img-card-top"
            style={{ height: "14em" }}
            alt="recipe"
          />
          <div className="card-body text-capitalize">
            <h6>{title}</h6>
            <h6 className="text-warning text-slanted">
              Provided by {publisher}
            </h6>
          </div>
          <div className="card-footer">
            <button
              type="button"
              className="btn btn-primary text-capitalize"
              onClick={this.handleClick}
            >
              Details
            </button>
            <a
              href={source_url}
              className="btn btn-success mx-2 text-capitalize"
              target="_blank"
              rel="noopener noreferrer"
            >
              Recipe Url
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
