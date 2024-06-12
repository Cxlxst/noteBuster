import { personne } from '../../personnes/personnes';
import { matieres } from '../../matieres/matieres';
import "./FicheNote.css"


export const FicheNote = ({ idPersonne, idMatiere, bareme, note }) => {
    const getEleveById = (idPersonne) => {
        return personne.find(personne => personne.id === idPersonne);
    };
    
    const getMatiereById = (idMatiere) => {
        return matieres.find(matieres => matieres.id === idMatiere);
    };

    const Eleve = getEleveById(idPersonne);
    const Matiere = getMatiereById(idMatiere);


    return (
        <div className="note">
            <h3>Élève : {Eleve.nom} {Eleve.prenom}</h3>
            <h4>Matière : {Matiere.nom}</h4>
            <p>{note}/{bareme}</p>            
        </div>
    ); 
}