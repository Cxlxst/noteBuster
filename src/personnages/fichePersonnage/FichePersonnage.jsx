
import { Statistique } from "../statistique/Statistique";
import "./FichePersonnage.css"

export const FichePersonnage = ({ nom, prenom, image, dateNaissance, genre }) => {
    return (
        <div className="personnage">
            <img src={image}></img>
            <h3>
                {nom} {prenom}
            </h3>
            <p>{genre}</p>
            <p>Né.e le {dateNaissance}</p>
            
        </div>
    ); 
}

