import React, { Component } from "react";
import { Link } from "react-router-dom";

class CharBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {name, films} = this.props.character;
    return (
      <div className="charBox">
        <Link to={`/char/${name}`}> {name} </Link>
        <p> Movies: </p>
        {
          films && films.length > 0 && films.map((film, idx) => <p key={idx}> {this.props.getData('films', film).title} </p>)
        }
      </div>
    )
  }
}

export default CharBox;

// exibir films link
