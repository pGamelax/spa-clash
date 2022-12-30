import axios from "axios";
import React from "react";

const baseURL = "http://localhost:3333/player/";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value.toUpperCase() });
  }

  handleSubmit(event) {
    axios
      .get(`${baseURL}${encodeURIComponent(this.state.value)}`)
      .then((response) => {
        const respData = response.data;
        this.props.handleForm(respData);
      });

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="🔎" />
      </form>
    );
  }
}

export default SearchForm;
