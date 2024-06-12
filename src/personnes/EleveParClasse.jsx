import { useParams } from 'react-router-dom';

import { FichePersonne } from "./fichePersonne/FichePersonne"
import { personne } from './personnes'; 
import { classe } from './classe'; 
import "./EleveParClasse.css"

export const EleveParClasse = () => {

    const { id } = useParams(); // Obtenez les paramètres de l'URL, dans ce cas l'ID

    const classeTitre = classe.find(classe => classe.id.toString() === id);
    const elevesClasse = personne.filter(eleve => eleve.idClasse.toString() === id);


    return (
        <div>
            {classeTitre && <h1>{classeTitre.titre}</h1>}

            <div class="listeEleveParClasse">
                {elevesClasse.map(eleve => (
                    
                    <div key={eleve.id} >
                        <FichePersonne key={eleve.id} nom={eleve.nom} prenom={eleve.prenom} image={eleve.image} dateNaissance={eleve.dateNaissance} genre={eleve.genre}/>
                        <a href={`/eleve-par-classe/${eleve.id}`}>
                            Voir les notes de {eleve.prenom} {eleve.nom}
                        </a>
                    </div>

                ))}
            </div>
            
        </div>
    );
}

export default EleveParClasse;
