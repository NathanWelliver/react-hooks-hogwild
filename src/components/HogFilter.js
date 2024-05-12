import React from "react";

function HogFilter({onCategoryChange}){
    return (
        <div>
            <h4>Piggy Filter</h4>
            <select name="filter" onChange={onCategoryChange}>
                <option value="All">All Piggy's</option>
                <option value="Greased">Greased</option>
                <option value="Not Greased">Not Greased</option>
            </select>
        </div>
    )
}

export default HogFilter;