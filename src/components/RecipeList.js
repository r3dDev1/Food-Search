import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeDetails from "./RecipeDetails";
import RecipeSearch from "./RecipeSearch";
import axios from "axios";

class RecipeList extends Component {
  constructor(props) {
    super();
    this.state = {
      url:
        "https://www.food2fork.com/api/search?key=f2aa5c49d2aeb143cb8df122e1ac230f",
      searchUrl:
        "https://www.food2fork.com/api/search?key=f2aa5c49d2aeb143cb8df122e1ac230f",
      // change the recipes to be empty array
      recipeList: [],
      clickId: null,
      currPage: 0,
      search: "",
      query: "&q="
    };
    this.addID = this.addID.bind(this);
    this.changePage = this.changePage.bind(this);
    this.searchRecipe = this.searchRecipe.bind(this);
  }

  async getRecipe() {
    const response = await axios.get(this.state.url);
    const data = response.data;
    this.setState({ recipeList: data.recipes });
  }

  componentDidMount() {
    try {
      this.getRecipe();
    } catch (e) {
      console.log(e);
    }
  }

  addID(id) {
    this.setState({ clickId: id, currPage: 1 });
  }

  changePage() {
    this.setState({ currPage: 0 });
  }

  searchRecipe(recipe) {
    this.setState({ search: recipe }, () => {
      this.setState(
        {
          ...this.state,
          url: `${this.state.searchUrl}${this.state.query}${this.state.search}`,
          search: ""
        },
        () => {
          this.getRecipe();
        }
      );
    });
  }

  render() {
    let display;
    if (this.state.currPage === 0) {
      return (
        <div>
          <RecipeSearch search={this.searchRecipe} />
          <div className="container my-5">
            <div className="row">
              <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                <h1 className="text-slanted">Recipe List</h1>
              </div>
            </div>
            <div className="row">
              {this.state.recipeList.map(recipe => {
                return (
                  <Recipe
                    changeID={this.addID}
                    key={recipe.recipe_id}
                    id={recipe.recipe_id}
                    res={recipe}
                  />
                );
              })}
            </div>
          </div>
        </div>
      );
    } else if (this.state.currPage === 1) {
      return <RecipeDetails id={this.state.clickId} change={this.changePage} />;
    }
    return display;
  }
}

export default RecipeList;
