import { FichePersonne } from "./fichePersonne/FichePersonne"

export const ListePersonne = ({liste}) => {

    return (
        
        <div>
            {
                liste.map((value, index)=>{
                    return <FichePersonne key={index} nom={value.nom} prenom={value.prenom} image={value.image} dateNaissance={value.dateNaissance} genre={value.genre}/>
                })
            }
        </div>
        
    )

}