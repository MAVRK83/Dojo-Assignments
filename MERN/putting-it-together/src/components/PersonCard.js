import React, { useState } from "react";

const PersonCard = (props) => {
    const{ firstName, lastName, age, hairColor } = props;
    const [stateAge, setStateAge] = useState (age);
    return (
        <div>
            <h2>
                {lastName}, {firstName}
            </h2>
            <p>Age: {stateAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={() => setStateAge(stateAge + 1)}>
                Birthday for {firstName} {lastName}
            </button>
        </div>
    );
};

export default PersonCard;

