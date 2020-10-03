import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap";

class SearchRecipes extends Component {
  render() {
    return (
      // <div className="container">
      <Form inline>
        <FormGroup>
          {" "}
          <FormLabel className="mr-2">Ingredients:</FormLabel>
          <FormControl type="text" placeholder="garlic, chicken" />{" "}
        </FormGroup>{" "}
        <FormGroup className="ml-2">
          <FormLabel className="mr-2">Dishes:</FormLabel>
          {"  "}
          <FormControl type="text" placeholder="adobo"></FormControl>{" "}
        </FormGroup>
        {"  "}
        <Button className="ml-2">Submit</Button>
      </Form>
      // </div>
    );
  }
}

export default SearchRecipes;
