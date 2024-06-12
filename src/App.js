import './App.css';
import { FichePersonne } from './personnes/fichePersonne/FichePersonne';
import { ListePersonne } from './personnes/listePersonne';
import { personne } from './personnes/personnes';
import { classe } from './personnes/classe';
import { ListeClasse } from './personnes/listeClasse';


function App() {
  return (
    <>

      <h1>Liste 1</h1>
      <p>{personne.length} personne.s dans cette liste</p>
      <ListePersonne liste={personne}/>
      
      <h1>Liste des clones</h1>
      <p>{classe.length} personne.s dans cette liste</p>
      <ListeClasse liste={classe}/>
    
    </>
  );
}

export default App;
