import { FicheMatiere } from "./ficheMatiere/FicheMatiere"
import "./listeMatieres.css"

export const ListeMatieres = ({liste}) => {

    return (
        <div className="listeMatieres">
            {
                liste.map((value, index)=>{
                    return <FicheMatiere key={index} idMatiere={value.id} nom={value.nom}/>
                })
            }
        </div>
    )

}