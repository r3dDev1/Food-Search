import React, { Component } from "react";
import LoadingComponent from "./LoadingComponent";
import axios from "axios";

class RecipeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsUrl:
        "https://www.food2fork.com/api/get?key=f2aa5c49d2aeb143cb8df122e1ac230f&rId=",
      loading: true,
      recipeDetails: {
        f2f_url: "",
        image_url: "",
        ingredients: [],
        publisher: "",
        publisher_url: "",
        source_url: "",
        title: ""
      }
    };

    this.backToList = this.backToList.bind(this);
  }

  backToList() {
    this.props.change();
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        `${this.state.detailsUrl}${this.props.id}`
      );
      const data = response.data;
      this.setState({ recipeDetails: data.recipe, loading: false });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const {
      image_url,
      ingredients,
      publisher,
      publisher_url,
      source_url,
      title
    } = this.state.recipeDetails;

    let result;
    if (this.state.loading === true) {
      result = <LoadingComponent />;
    } else if (this.state.loading === false) {
      result = (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button
                type="button"
                className="btn btn-warning mb-5 text-capitalize"
                onClick={this.backToList}
              >
                Back To Recipe List
              </button>
              <img src={image_url} className="d-block w-100" alt="recipe" />
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className="text-warning text-capitalize text-slanted">
                {publisher}
              </h6>
              <a
                href={publisher_url}
                targer="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-2 text-capitalize"
              >
                Publisher Webpage
              </a>
              <a
                href={source_url}
                targer="_blank"
                rel="noopener noreferrer"
                className="btn btn-success mt-2 mx-3 text-capitalize"
              >
                Recipe Url
              </a>
              <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4">Ingredients</h2>
                {ingredients.map((item, index) => {
                  return (
                    <li key={index} classna="list-group-item text-slanted">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      );
    }

    return result;
  }
}

export default RecipeDetails;
