import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap";

class SearchRecipes extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: "",
      dish: "",
    };
  }

  search() {
    let { ingredients, dish } = this.state;
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
    console.log("state", this.state, "url", url);
  }

  render() {
    return (
      <Form inline>
        <FormGroup>
          {" "}
          <FormLabel className="mr-2">Ingredients:</FormLabel>
          <FormControl
            type="text"
            placeholder="garlic, chicken"
            onChange={(event) =>
              this.setState({
                ingredients: event.target.value,
              })
            }
          />{" "}
        </FormGroup>{" "}
        <FormGroup className="ml-2">
          <FormLabel className="mr-2">Dishes:</FormLabel>
          {"  "}
          <FormControl
            type="text"
            placeholder="pizza"
            onChange={(event) =>
              this.setState({
                dish: event.target.value,
              })
            }
          />{" "}
        </FormGroup>
        {"  "}
        <Button className="ml-2" onClick={() => this.search()}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default SearchRecipes;
