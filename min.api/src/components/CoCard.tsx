import { CompodiumList } from "../types/types";
import {useEffect, useState} from "react";


function CompediumCard({object}: {object: CompodiumList}){
    const [materialCard, setCard] = useState<any>(null);


    useEffect(() => {
        fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${object.id}`)
            .then(response => response.json())
            .then((data) => {
                setCard(data.data);
            });
    }, []);

    if (!materialCard) {
        return <div>Loading...</div>;}

    return <div id="card">
        <img src={materialCard.image} alt={materialCard.name}/>
        {materialCard.name};
        </div>

    
}

export default CompediumCard;