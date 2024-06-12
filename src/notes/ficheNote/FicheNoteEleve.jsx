import { personne } from '../../personnes/personnes';
import { matieres } from '../../matieres/matieres';
import "./FicheNote.css"

export const FicheNoteEleve = ({ idPersonne, idMatiere, bareme, note }) => {

    
    const getMatiereById = (idMatiere) => {
        return matieres.find(matieres => matieres.id === idMatiere);
    };

    const Matiere = getMatiereById(idMatiere);


    return (
        <div className="note">
            <h4>Matière : {Matiere.nom}</h4>
            <p>{note}/{bareme}</p>            
        </div>
    ); 
}