import './App.css';
import { personne } from './personnes/personnes';
import { ListePersonne } from './personnes/listePersonne';
import { classe } from './personnes/classe';
import { ListeClasse } from './personnes/listeClasse';
import { matieres } from './matieres/matieres';
import { ListeMatieres } from './matieres/listeMatieres';
import { notes } from './notes/notes';
import { ListeNotes } from './notes/listeNotes';


function App() {
  return (
    <>
      <h1>Liste de personnes</h1>
      <p>{personne.length} personne.s dans cette liste</p>
      <ListePersonne liste={personne}/>
      
      <h1>Liste des classes</h1>
      <p>{classe.length} classe </p>
      <ListeClasse liste={classe}/>
    

      <h1>Les matières</h1>
      <p>{matieres.length} matières disponibles</p>
      <ListeMatieres liste={matieres}/>

      <h1>Les notes</h1>
      <p>{notes.length} notes disponibles</p>
      <ListeNotes liste={notes}/>

      <a href={`/eleve`}>
        Voir la liste des élèves
      </a>

      <a href={`/professeur`}>
        Voir la liste des professeurs
      </a>

    </>
  );
}

export default App;
