import { FicheNote } from "./ficheNote/FicheNote"
import "./listeNotes.css"

export const ListeNotes = ({liste}) => {

    return (
        <div class="listeNotes">
            {
                liste.map((value, index)=>{
                    return <FicheNote key={index} idEleve={value.idPersonne} idMatiere={value.id} bareme={value.bareme} note={value.note}/>
                })
            }
        </div>
    )

}