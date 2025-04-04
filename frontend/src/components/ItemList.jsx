import React from "react";
import SingleItem from "./SingleItem";
import { Link } from "react-router-dom";

const ItemList = ({ items, title, itemsArray,  path, idPath }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title}</h2>
        <Link className="item-list__link" to={path}>
          Mostrar tudo
        </Link>
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => 
            index < items
          )
          .map((currObj, index) => (
            <SingleItem
              key={`${index}-${title}`}
              idPath={idPath}
              {...currObj}
              // id={artist.id}
              // name={artist.name}
              // image={artist.image}
              // banner={artist.banner}

            />
          ))}
        {/* 
        essa função servia para renderizar os componentes com dados fixos, só para preencher espaço no front

        com essa função Criamos um array com numero de Items passado como props, .fill fazemos com que esse array fique preechido com valores "undefined e .map() renderiza cada singleItem no array, sobrepondo os valores undefined" 

        {Array(items)
          .fill()
          .map((__, index) => (
            <SingleItem key={`${title}-${index}`} />
          ))}
        
        a "key" auxilia o react em rederizações, Ficará artista10, */}
      </div>
    </div>
  );
};

export default ItemList;
