import "./FicheMatiere.css"

export const FicheMatiere = ({ id, nom }) => {
    return (
        <div className="matiere">
            <h3>{nom}</h3>
            <p>{id}</p>            
        </div>
    ); 
}

