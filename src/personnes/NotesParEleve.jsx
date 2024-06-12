import { useParams } from 'react-router-dom';

import { FichePersonne } from "./fichePersonne/FichePersonne"
import { personne } from './personnes'; 
import { notes } from '../notes/notes'; 
import { FicheNoteEleve } from '../notes/ficheNote/FicheNoteEleve';
import { FicheNote } from '../notes/ficheNote/FicheNote';

export const NotesParEleve = () => {

    const { id } = useParams(); // Obtenez les paramètres de l'URL, dans ce cas l'ID

    const eleve = personne.find(personne => personne.id.toString() === id);
    const notesEleve = notes.filter(notes => notes.idPersonne.toString() === id);

    console.log(notesEleve)

    
    return (
        <div>
            <div key={eleve.id}>
                <FichePersonne key={eleve.id} nom={eleve.nom} prenom={eleve.prenom} image={eleve.image} dateNaissance={eleve.dateNaissance} genre={eleve.genre}/>
            </div>
            {notesEleve.map(notes => (
                
                <div key={notes.id}>
                    { <FicheNoteEleve idPersonne={notes.idPersonne} idMatiere={notes.idMatiere} note={notes.note} bareme={notes.bareme} /> }
                </div>

            ))}
        </div>
    );
}

export default NotesParEleve;