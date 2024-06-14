import { FicheClasse} from "./ficheClasse/FicheClasse"

export const ListeClasse = ({liste}) => {


    return (
        
        <div>
            {
                liste.map((value, index)=>{
                    return (
                        <div key={index}>
                            <FicheClasse id={value.id} titre={value.titre} />
                            <a href={`/eleve-par-classe/${value.id}`}>
                                Voir les élèves de {value.titre} 
                            </a>
                        </div>
                    );
                })
            }
        </div>
        
    )

}