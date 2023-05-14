import React, { useState, useRef } from "react";
import "./App.css";

import places from "./data";

function App() {
  const [showTile, setShowTile] = useState(['treehouse', 'wagon']);
  const [numTiles, setNumTiles] = useState(2);
  const [passwords, setPasswords] = useState({});
  const [unlockedTiles, setUnlockedTiles] = useState(['treehouse'])

  const handlePasswordSubmit = (id) => {
    const index = places.findIndex((place) => place.id === id);
    const place = places.find((place) => place.id === id);
    const enteredPassword = passwords[places[index].id];
    if (enteredPassword === places[index].password) {
      /* if (!('unlocks' in places[index]) {
        return;
      } */
      const unlockedIds = places[index].unlocks;
      //const updatedUnlockedTiles = [...showTile, ...unlockedTiles, ...unlockedIds.map((id) => places.findIndex((place) => place.id === id))];
      const updatedUnlockedTiles = [...showTile, ...unlockedTiles, ...unlockedIds];
      const uniqueUpdatedUnlockedTiles = [... new Set(updatedUnlockedTiles)]
      console.log(uniqueUpdatedUnlockedTiles);
      setShowTile(uniqueUpdatedUnlockedTiles);
  
      if (showTile.length + 1 === numTiles && numTiles < places.length) {
        setNumTiles(numTiles + 2);
      }
    }
  };

  const handlePasswordChange2 = (index, password) => {
    const updatedPasswords = [...passwords];
    updatedPasswords[index] = password;
    setPasswords(updatedPasswords);
  };

  const handlePasswordChange = (id, password) => {
    console.log(passwords);
    setPasswords((prevPasswords) => ({ ...prevPasswords, [id]: password }));
  };

  const challengeDiv = (place) => {
    if (!('Challenge' in place)) return;
    return <p><b>Challenge: </b>{place.Challenge}</p>;
  };

  const riddleDiv = (place) => {
    return ('prompt' in place) && (
      <div className="passwordInput">
        <p><b>Question: </b>{place.prompt}</p>
        <label htmlFor={`passwordInput-${place.id}`}>Answer: </label>
        <input
          type="password"
          id={`passwordInput-${place.id}`}
          onChange={(e) => handlePasswordChange(place.id, e.target.value)}
        />
        <button onClick={() => handlePasswordSubmit(place.id)}>Submit</button>
      </div>
    )
  };

  const renderPlaces = () => {
    const tiles = [];    
    for (const id of showTile) {
      if (!places.some((place) => place.id === id)) {
        continue;
      }
      const place = places.find((x) => x.id === id);
      const isShown = showTile.includes(place.id);
      const hasUnlocked = ('unlocks' in place) && place.unlocks.every((id) => showTile.includes(id));

      tiles.push(
        <div className="tile" key={place.id}>
          <div className="tileTitle" onClick={() => setShowTile([...showTile, place.id])}>
            <b>{place.Bar}</b>
          </div>
          {isShown && (
            <div className="tileDescription">
              {challengeDiv(place)}
              {riddleDiv(place)}
            </div>
          )}
        </div>
      );
    }
    return tiles;
  };
  

  return <div className="tilesContainer"><h1>CHICKEN GAME Q2</h1>{renderPlaces()}</div>;
}

export default App;
