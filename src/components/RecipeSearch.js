import React, { Component } from "react";

class RecipeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleUpdating = this.handleUpdating.bind(this);
    this.handleSubmitting = this.handleSubmitting.bind(this);
  }

  handleSubmitting(e) {
    e.preventDefault();
    this.props.search(this.state.search);
    this.setState({ search: "" });
  }

  handleUpdating(e) {
    this.setState({ search: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5 text-center">
            <h1 className="text-slanted text-capitalize">
              <strong className="text-danger">Search For Recipe</strong>
            </h1>
            <form className="mt-4" onSubmit={this.handleSubmitting}>
              <label className="text-capitalize" htmlFor="search">
                enter recipes separated by comma
              </label>
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  placeholder="enter your recipe"
                  className="form-control"
                  value={this.state.search}
                  onChange={this.handleUpdating}
                />
                <div className="input-group-append">
                  <button
                    type="text"
                    className="input-group-text bg-primary white-text"
                  >
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeSearch;
