import React, { Component } from "react";
import { Link } from 'react-router-dom';

class CharDetails extends Component {
  constructor(props) {
    super(props);

    this.getCurrentChar = this.getCurrentChar.bind(this);
    this.getCharPlanet = this.getCharPlanet.bind(this);
  }

  getCurrentChar() {
    return this.props.characters.length > 0 && this.props.characters.filter(character => character.name === this.props.match.params.name)[0];
  }

  getCharPlanet(currentChar) {
    if (this.props.getData('homeworld', currentChar.homeworld)) {
      return this.props.getData('homeworld', currentChar.homeworld).name;
    } else {
      // caso não tenha sido baixado pela API
      return 'no planet mapped';
    }
  }

  render() {
    // colocar condicao de array nao nulo
    const currentChar = this.getCurrentChar();
    const charPlanet = this.getCharPlanet(currentChar);

    return (
      <div>
      <div className="charDetails">
        <h1>{currentChar.name}</h1>
        <p>Height: {currentChar.height}</p>
        <p>Mass: {currentChar.mass}</p>
        <p>Hair Color: {currentChar.hair_color}</p>
        <p>Skin Color: {currentChar.skin_color}</p>
        <p>Eye Color: {currentChar.eye_color}</p>
        <p>Birth Year: {currentChar.birth_year}</p>
        <p>Gender: {currentChar.gender}</p>
        <p>Home World: {charPlanet}</p>
      </div>
      <Link to={'/'}>Back</Link>
      </div>
    )
  }
}

export default CharDetails;
