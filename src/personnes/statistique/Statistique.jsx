export const Statistique = () =>{

    let force =0;

    const augmentationForce = () => {
        force = force+1;
    }

    const diminutionForce = () => {
        force = force-1;
    }


    return(
        <div>
            <span>
               Force
            </span>
            <button onClick={diminutionForce}>-</button>
            <button onClick={augmentationForce}>+</button>
        </div>
    )

}