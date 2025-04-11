import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ items, title, itemsArray,  path, idPath }) => {
  const {pathname} = useLocation() //pega o caminho do arquivo para podemos renderizar mais itens nesta url

  const isHome = pathname === "/"; 

  const finalItems = isHome ? items : Infinity;
  return (
    <div className="item-list">
      {isHome && (
          <div className="item-list__header">
            <h2>{title}</h2>
            <Link className="item-list__link" to={path}>
              Mostrar tudo
            </Link>
          </div>
      )}

      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => 
            index < finalItems
          )
          .map((currObj, index) => (
            <SingleItem
              key={`${index}-${title}`}
              idPath={idPath}
              {...currObj}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
