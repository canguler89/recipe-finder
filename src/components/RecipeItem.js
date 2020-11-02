import React, { Component } from 'react'
import { connect } from "react-redux";
import { favoriteRecipes } from "../actions"

class RecipeItem extends Component {
    constructor(){
        super()
        this.state = {
            favorited: false
        }
    }


    favorited(recipe){
        this.props.favoriteRecipes(recipe)
        this.setState({favorited: true})
    }


    render() {
        let {recipe} = this.props
        return (
            <div className="recipe-item">
                {
                    this.props.favoriteButton ? 
                    
                        this.state.favorited ? 
                        <div className="star"> &#9733;</div>
                        :
                        <div className="star"
                        onClick={()=> this.favorited(recipe)}>
                            &#9734;
                        </div>
                    
                    :
                    <div></div>

                }
              
                <div className="recipe-text">
                    <a href={recipe.href}>
                    <h4 className="recipe-text">{recipe.title}</h4>
                    </a>
                    <p>{recipe.ingredients}</p>
                </div>
                    <img src={recipe.thumbnail} alt={recipe.title} className="recipe-img" />
            </div>
        )
    }
}


export default connect(null, {favoriteRecipes}) (RecipeItem)