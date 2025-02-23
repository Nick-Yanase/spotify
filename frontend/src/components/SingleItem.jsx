import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";


const SingleItem = ({id, name, image, banner, artist, idPath}) => {
  return (
    <a href={`${idPath}/${id}`} className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img
            className="single-item__image"
            src={image}
            alt={`imagem do artista ${name}`}
          />
        </div>
        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
      </div>
      <div className="single-item__text">
        <div className="single-item__2lines">
          <p className="single-item__title ">{name}</p>
        </div>

        <p className="single-item__type">{artist ?? "Artista"}</p>
      </div>
    </a>
  );
};
{/*Quando temos o export default, no componente ItemList podemos chamar SingleItem de qualquer nome
  
  Por exemplo: import Single from "../SingleItem"

  agora, quando temos APENAS o export, temos que exportar o componente SingleItem como objeto

  Por exemplo: export { SingleItem }

  E ao chamar o componente no ItemList, temos que importar assim:

  import { SingleItem } from "../SingleItem"
  */}

export default SingleItem; 
