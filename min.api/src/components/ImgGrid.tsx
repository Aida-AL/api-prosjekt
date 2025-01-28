import { useEffect, useState } from "react";
import {CompodiumList } from "../types/types.ts";

/*import CoCard from "./CoCard";*/

function ImgGrid(){

    const [material, setMaterial] = useState<CompodiumList [] | null>(null);

        useEffect(() => {
            fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials')
            .then(response => response.json())
            .then((data) => {
                setMaterial(data.data);
            })
            
        }, []);
           
        if (!material) {
            return <div>Loading...</div>;}
        
        

        return (
            <div className="flex flex-wrap">
                {material.map((material) => (
                    <>
                    <div key={material.name}>{material.name}</div>
                    <img src={material.image}/>
                    </>
               ))}
            </div>
            
        );

}

export default ImgGrid;