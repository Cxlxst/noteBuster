import './App.css';
import { FichePersonnage } from './personnages/fichePersonnage/FichePersonnage';
import { ListePersonnage } from './personnages/listePersonnage';
import { personnage } from './personnages/personnages';
import { personnageClone } from './personnages/personnages';


function App() {
  return (
    <>

      <h1>Liste 1</h1>
      <p>{personnage.length} personne.s dans cette liste</p>
      <ListePersonnage liste={personnage}/>
      
      <h1>Liste des clones</h1>
      <p>{personnageClone.length} personne.s dans cette liste</p>
      <ListePersonnage liste={personnageClone}/>
     
      {/* {
        personnage.map((value, index) => {
          return (
            <FichePersonnage key={index} nom={value.nom} prenom={value.prenom}/>
          )
        })
      } */}
    </>
  );
}

export default App;
