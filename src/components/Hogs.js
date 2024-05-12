import React, {useState} from "react";

function Hog({name, image, specialty, weight, greased, highestMedal}){
    const [showDetails, setShowDetails] = useState(false)

    function toggleDetails(){
        setShowDetails(!showDetails)
    }

    return (
        <div className="ui raise link card" onClick={toggleDetails}>
            <div className="image">
                <img className="image" src={image} alt={name}/>
            </div>
            <div className="content">
                <p className="header">{name}</p>
            </div>
            <div>
                {showDetails && (
                <div className="extra content">
                    <p>Specialty: {specialty}</p>
                    <p>Weight: {weight}</p>
                    <p>Greased: {greased ? "Yes" : "No"}</p>
                    <p>Highest Medal Achieved: {highestMedal}</p>
                </div>
                )}
            </div>
        </div>
    )
}

export default Hog;