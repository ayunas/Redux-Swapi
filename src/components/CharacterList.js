import React from "react";
import {connect} from 'react-redux';
import Character from "./Character";


const CharacterList = props => {
  return (
    <ul>
      {/* {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })} */}
      <p>testing startwars SWAPI</p>
    </ul>
  );
};

function mapStateToProps(state) {

    return null;
}


export default connect(mapStateToProps,null)(CharacterList);
