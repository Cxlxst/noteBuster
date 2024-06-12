import { FicheNote } from "./ficheNote/FicheNote"
import "./listeNotes.css"

export const ListeNotes = ({liste}) => {


    console.log(liste)


    return (
        <div className="listeNotes">
            {
                liste.map((value, index)=>{
                    return <FicheNote idPersonne={value.idPersonne} idMatiere={value.idMatiere} bareme={value.bareme} note={value.note}/>
                })
            }
        </div>
    )

}