
import { FichePersonne } from "./fichePersonne/FichePersonne"
import { personne } from './personnes'; 
import "./EleveParClasse.css"

export const Eleve = () => {

    const listeEleve = personne.filter(eleve => eleve.role.toString() === "1");
    
    return (
        <div>
            
            
            <h1>Liste des élèves</h1>

            <div class="listeEleveParClasse">
                {listeEleve.map(eleve => (
                    
                    <div key={eleve.id} >
                        <FichePersonne key={eleve.id} nom={eleve.nom} prenom={eleve.prenom} image={eleve.image} dateNaissance={eleve.dateNaissance} genre={eleve.genre}/>
                    </div>

                ))}
            </div>

           
            
        </div>
    );
}

export default Eleve;
