import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = ({type}) => {
  return (
    <main className="main">
      { type === "artists" || type === undefined ?
        (
          <ItemList title="Artistas populares" items={5} itemsArray={artistArray} path="/artists" idPath="/artist"/>
        ) 
        : 
        <></>
      }

      { type === "songs" || type === undefined ? 
        (
          <ItemList  title="Musicas populares" items={10} itemsArray={songsArray} path="/songs" idPath="/song"/>
        )
        :
        <></>
      }
    </main>
  );
};

export default Main; 
