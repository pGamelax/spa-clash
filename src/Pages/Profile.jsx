import React from "react";
import SearchForm from '../Components/Form'
import Cabecalho from "../Components/Cabecalho";
import CurrentDeck from "../Components/CurrentDeck";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerData: undefined,
    };
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm(result) {
    this.setState({ playerData: result });
  }

  render() {
    return (
      <div className="container mt-4">
        <SearchForm handleForm={this.handleForm} />
        <Cabecalho playerData={this.state.playerData} />
        <hr></hr>
        <CurrentDeck playerData={this.state.playerData} />
      </div>
    );
  }
}

export default Profile;
