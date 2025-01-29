import { CompodiumList } from "../types/types";
import {useEffect, useState} from "react";


function compediumCard({material}: {material: CompodiumList}){
    const [materialCard, setCard] = useState<CompodiumList [] | null>(null);


    useEffect(() => {
        fetch('materialCard')
        .then(response => response.json())
        .then((data) => {
            setCard(data.data);
        });
        
    }, []);

    return (
        <>
                {materialCard && materialCard.map((material: { image: any; name: any; }) => (
                    <div key={material.name}>
                        <img src={material.image} alt={material.name} />
                        <p>{material.name}</p>
                    </div>
                ))}

        </>
    );
}

export default compediumCard;