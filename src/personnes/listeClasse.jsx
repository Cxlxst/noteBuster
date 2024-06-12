import { FicheClasse} from "./ficheClasse/FicheClasse"

export const ListeClasse = ({liste}) => {


    return (
        
        <div className="listePersonne">
            {
                liste.map((value, index)=>{
                    return (
                        <div key={index}>
                            <FicheClasse id={value.id} titre={value.titre} />
                            <a href={`/eleve-par-classe/${value.id}`}>
                                Go to Page {value.id}
                            </a>
                        </div>
                    );
                })
            }
        </div>
        
    )

}