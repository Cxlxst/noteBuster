
import "./FichePersonne.css"

export const FichePersonne = ({ nom, prenom, image, dateNaissance, genre }) => {
    return (
        <div className="personne">
            <img src={image}></img>
            <h3>
                {nom} {prenom}
            </h3>
            <p>{genre}</p>
            <p>Né.e le {dateNaissance}</p>
            
        </div>
    ); 
}

