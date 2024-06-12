import { FicheClasse} from "./ficheClasse/FicheClasse"

export const ListeClasse = ({liste}) => {

    return (
        
        <div>
            {
                liste.map((value, index)=>{
                    return <FicheClasse key={index} id={value.id} titre={value.titre} />
                })
            }
        </div>
        
    )

}