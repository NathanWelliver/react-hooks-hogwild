import React from "react";

function HogSort({onSortChange, selectSort}) {
    return (
        <div>
            <h4>Sort Piggy's?</h4>
            <select onChange={onSortChange}>
                <option value="None">None</option>
                <option value="Name">Name</option>
                <option value="Weight">Weight</option>
            </select>
        </div>
    )
}

export default HogSort;