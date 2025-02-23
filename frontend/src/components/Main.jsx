import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = () => {
  return (
    <main className="main">
      <ItemList title="Artistas populares" items={5} itemsArray={artistArray} path="/artists" idPath="/artist"/>

      <ItemList  title="Musicas populares" items={10} itemsArray={songsArray} path="/songs" idPath="/song"/> 
    </main>
  );
};

export default Main; 
