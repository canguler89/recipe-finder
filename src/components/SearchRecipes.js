import React, { Component } from 'react'
import { Form, FormGroup, FormControl, FormLabel, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { setRecipes } from "../actions"


class SearchRecipes extends Component {
    constructor(){
        super();
        this.state = {
            ingredients: "",
            dish: ""
        }
    }

    search(){
        let dish = this.state.dish;
        let ingredients = this.state.ingredients
        const url = `https://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
        fetch(url, {
            method: 'GET'
        }).then(response => response.json())
        .then(json =>this.props.setRecipes(json.results))
    }

    render() {
        return (
            <Form inline>
                <FormGroup>
                    <FormLabel>Ingredients:</FormLabel>
                    {' '}
                    <FormControl 
                    type="text" 
                    placeholder="garlic,chicken" 
                    className="ml-2" 
                    onChange={e => this.setState({ ingredients: e.target.value })}
                    />
                </FormGroup>
                
                <FormGroup>
                    <FormLabel className="ml-2">Dish:</FormLabel>
                    {' '}
                    <FormControl 
                    type="text" 
                    placeholder="Fried foods" 
                    className="ml-2"
                    onChange={ e => this.setState({ dish: e.target.value })}
                    /> 
                </FormGroup>
                <Button className="ml-2" onClick={()=> this.search()}>Submit</Button>
            </Form>
        )
    }
}

export default connect(null,{setRecipes})(SearchRecipes)
