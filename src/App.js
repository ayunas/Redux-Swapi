import React, { Component } from "react";

import { CharacterListView } from "./views";
import "./styles/App.css";
import axios from "axios";
import {connect} from 'react-redux';

import {getStarWarsApi} from './actions';

class App extends Component {

  // fetchAPI = (url) => {
  //   axios.get(url)
  //     .then( res => {
  //       console.log(res.data);
  //     })
  //     .catch( err => {
  //       console.log(err);
  //     })
  // }

  componentDidMount() {
      this.props.getStarWarsApi('https://swapi.co/api/people/')
  }

  render() {
    return <CharacterListView />;
  }
}

export default connect(null,{getStarWarsApi})(App);
