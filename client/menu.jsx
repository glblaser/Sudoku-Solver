import React from "react";
import Button from "react-bootstrap/Button";

const Menu = props => (
  <div className="menu">
    <Button variant="primary" onClick={props.getPuzzle}>
      New Game
    </Button>
    <Button variant="primary" onClick={props.resetPuzzle}>
      Reset
    </Button>
    <Button variant="primary" onClick={props.solvePuzzle}>
      Solve
    </Button>
    <Button id="customGameButton" variant="primary" onClick={props.createCustomGame}>
      Custom Game
    </Button>
    {props.setCustomGame ? (
      <Button variant="primary" onClick={props.startCustomGame}>
        Start Custom Game
      </Button>
    ) : null}
  </div>
);

export default Menu;
