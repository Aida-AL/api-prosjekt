import { useEffect, useState } from "react";
import {CompodiumList } from "../types/types.ts";
import CompediumCard from "./CoCard";

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
                <div id = "myGrid" className="grid grid-cols-4 gap-3">
                {material.map((object) => (
                        <CompediumCard key={object.id} object={object}/>
                ))}
                </div>
        );

}


export default ImgGrid;