import React, { Component } from "react";
import CharBox from './CharBox';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {
              this.props.characters.map((character, idx) => <CharBox key={idx} getData={this.props.getData} character={character} films={this.props.films} />)
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Home;