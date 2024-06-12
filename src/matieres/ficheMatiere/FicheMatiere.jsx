import "./FicheMatiere.css"

export const FicheMatiere = ({ id, nom }) => {
    return (
        <div class="matiere">
            <h3>{nom}</h3>
            <p>{id}</p>            
        </div>
    ); 
}

