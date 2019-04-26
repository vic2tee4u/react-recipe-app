import React, {Component} from 'react';
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDeatils from './components/RecipeDetails';
import './App.css';



class App extends Component {
    state = {
      recipe: recipes,
      url: "https://www.food2fork.com/api/search?key=ce53c17f24cbbfbccd06b9ac820c2e3a",
      base_url: "https://www.food2fork.com/api/search?key=ce53c17f24cbbfbccd06b9ac820c2e3a",
      details_id: 35380,
      pageIndex: 1,
      search: '',
      query: '&q=',
      error: ''
    }

    async getRecipe () {
      try {
        const data = await fetch(this.state.url);
        const jsonData = await data.json();
        if (jsonData.recipes.length === 0) {
          this.setState (() => {
            return {error: 'Seriously!!! You cook with that?'}
          })
        }
        else {
          this.setState (() => {
            return {
              recipe: jsonData.recipes
            }
          })
        }        
      } catch (error) {
        console.log(error)
      }
    }

    componentDidMount () {
      this.getRecipe()
    }

    displayPage = (index) => {
      switch(index) {
        default: 
        case 1:
        return(<RecipeList recipes ={this.state.recipe} 
          handleDetails ={this.handleDetails} 
          value ={this.state.search}
          handleChange = {this.handleChange}
          handleSubmission = {this.handleSubmission}
          error = {this.state.error}
          />)
        case 0: 
        return (<RecipeDeatils id={this.state.details_id} handleIndex = {this.handleIndex}/>
          )
      }
    }

    handleIndex = (index) => {
      this.setState({
        pageIndex: index
      })
    }

    handleDetails = (index, id) => {
        this.setState ({
          pageIndex: index,
          details_id: id
        })
    }

    handleChange = (event) => {
      this.setState ({
        search: event.target.value
      }, () => {
        console.log(this.state.search)
      })
    }

    handleSubmission = (event) => {
      event.preventDefault();
      const {base_url, query, search} = this.state
      this.setState (() => {
        return {url: `${base_url}${query}${search}`, search: ''}
      }, () => {
        this.getRecipe()
      })


    }

  render() {
    console.log(this.state.recipe);
    return (
      <React.Fragment>
        {this.displayPage(this.state.pageIndex)}
    </React.Fragment>
    )

  }
}




export default App;
