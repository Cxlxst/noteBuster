import { FichePersonne } from "./fichePersonne/FichePersonne"
import { personne } from './personnes'; 
import "./EleveParClasse.css"

export const Professeur = () => {

    const listeProfesseur = personne.filter(eleve => eleve.role.toString() === "2");
    

    return (
        <div>
            
            
            <h1>Liste des professeurs</h1>

            <div className="listeEleveParClasse">
                {listeProfesseur.map(eleve => (
                    
                    <div key={eleve.id} >
                        <FichePersonne key={eleve.id} nom={eleve.nom} prenom={eleve.prenom} image={eleve.image} dateNaissance={eleve.dateNaissance} genre={eleve.genre}/>
                    </div>

                ))}
            </div>

           
            
        </div>
    );
}

export default Professeur;
