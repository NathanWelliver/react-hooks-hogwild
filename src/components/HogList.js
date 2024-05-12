import React from "react";
import Hog from "./Hogs";

function HogList({hogs, selectCategory, selectSort}){

    const filteredHogs = hogs.filter((hog) => {
        if(selectCategory === "All")return true;
        if(selectCategory === "Greased") return hog.greased === true;
        if(selectCategory === "Not Greased")return hog.greased === false;
        return null;
    });

    const sortedHogs = [...filteredHogs];
    if(selectSort === "Name"){
        sortedHogs.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectSort === "Weight"){
        sortedHogs.sort((a, b) => a.weight - b.weight);
    }

    return (
        <div className="ui grid container">
            {sortedHogs.map((hog, index) => (
                <Hog 
                key={index}
                name={hog.name}
                image={hog.image}
                specialty={hog.specialty}
                weight={hog.weight}
                greased={hog.greased}
                highestMedal={hog.highestMedal}
                />
            ))}
        </div>
    )
}

export default HogList;