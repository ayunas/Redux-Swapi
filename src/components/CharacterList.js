import React from "react";
import {connect} from 'react-redux';
import Character from "./Character";
import Loader from 'react-loader-spinner';


const CharacterList = props => {
  console.log("CharacterList props: ", props);

  return (
    <ul>
      {props.starwars.map( jedi => {
        return <Character key={jedi.name} character={jedi} />;
      })}
      {/* <Loader type="Ball-Triangle" color="#00BFFF" height="100"	width="100"/> */}
      { props.fetching && <Loader type="ThreeDots" color="#00BFFF" height="50"	width="50"/> }
      {props.fetching && <span>Loading... Please Wait...</span>}
      {/* <Loader type="ThreeDots" color="#00BFFF" height="50"	width="50"/> */}
      {/* if fething is true , render loader.
      props.isFetching && Loader Spinner */}
    </ul>
  );
};

function mapStateToProps(state) {
    console.log(state);
    return {
      starwars : state.charsReducer.characters,
      fetching : state.charsReducer.fetching
    }
}

export default connect(mapStateToProps,{})(CharacterList);
