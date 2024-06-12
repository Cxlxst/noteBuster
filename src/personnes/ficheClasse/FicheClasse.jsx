
import "./FicheClasse.css"

export const FicheClasse = ({ id, titre}) => {
    return (
        <div className="classe">
            <h3>
                {titre} 
            </h3>
            <p>{id}</p>
          
        </div>
    ); 
}

