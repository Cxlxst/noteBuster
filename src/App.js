import './App.css';
import { FichePersonne } from './personnes/fichePersonne/FichePersonne';
import { ListePersonne } from './personnes/listePersonne';
import { personne } from './personnes/personnes';
import { classe } from './personnes/personnes';


function App() {
  return (
    <>

      <h1>Liste 1</h1>
      <p>{personne.length} personne.s dans cette liste</p>
      <ListePersonne liste={personne}/>
      
      <h1>Liste des clones</h1>
      <p>{classe.length} personne.s dans cette liste</p>
      <ListePersonne liste={classe}/>
     
      {/* {
        personne.map((value, index) => {
          return (
            <FichePersonne key={index} nom={value.nom} prenom={value.prenom}/>
          )
        })
      } */}
    </>
  );
}

export default App;
