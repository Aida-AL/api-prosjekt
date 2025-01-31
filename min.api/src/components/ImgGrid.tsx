import {CompodiumList } from "../types/types.ts";
import CompediumCard from "./CoCard";
import { useItems } from "../hooks/useItems.ts";

function ImgGrid(){

 const {data: material, isLoading, isPending, isError} = useItems();

    if (isError) {
        return <div>Error</div>}

   if (isLoading || isPending) {
      return <div>Loading...</div>;
    }

    return (
      <div id = "myGrid" className="grid grid-cols-4 gap-6">
         {material.data.map((object:CompodiumList) => (
         <CompediumCard key={object.name} object={object}/>
        ))}
        </div>
        );

}


export default ImgGrid;