import React from "react";
import {connect} from 'react-redux';
import Character from "./Character";


const CharacterList = props => {
  console.log("CharacterList props: ", props);

  return (
    <ul>
      {props.starwars.map( jedi => {
        return <Character key={jedi.name} character={jedi} />;
      })}
    </ul>
  );
};

function mapStateToProps(state) {
    console.log(state);
    return {
      starwars : state.charsReducer.characters
      // starwars : state.characters
    }
}

export default connect(mapStateToProps,{})(CharacterList);
