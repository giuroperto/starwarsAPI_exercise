import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import axios from "axios";
import { Switch, Route } from 'react-router-dom';
import CharDetails from './components/CharDetails';
import Navbar from './components/Navbar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      films: [],
      planets: [],
    }
    this.getDataFromURL = this.getDataFromURL.bind(this);
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people/")
      .then(response => this.setState({
        characters: response.data.results}))
      .catch(err => console.log(err))

    axios.get("https://swapi.co/api/films/")
      .then(response => this.setState({
        films: response.data.results}))
      .catch(err => console.log(err))

    axios.get("https://swapi.co/api/planets/")
      .then(response1 => {
        let planetsArr = response1.data.results;
        axios.get("https://swapi.co/api/planets/1/")
          .then(response2 => {
            planetsArr.unshift(response2.data);
            this.setState({
              planets: planetsArr,
            })
          })
          .catch(err => console.log(err))
        })
      .catch(err => console.log(err))
  }
  
  getDataFromURL(type, url) {
    if (type === 'homeworld') {
      return this.state.planets.length > 0 && this.state.planets.filter(planet => planet.url === url)[0];
    } else if (type === 'films') {
      return this.state.films.length > 0 && this.state.films.filter(movie => movie.url === url)[0];
    } else {
      return 'error';
    }
  }
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={(props) => <Home characters={this.state.characters} getData={this.getDataFromURL} films={this.state.films} {...props} /> } />
          <Route exact path="/char/:name" render={(props) => <CharDetails characters={this.state.characters} getData={this.getDataFromURL} films={this.state.films} {...props} /> } />
        </Switch>
      </div>
    )
  }
}

export default App;
