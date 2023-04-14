import React from 'react';

const arrayColor = ['orange', 'yellow', 'deeppink', 'green', 'blue'];

function TotalInfo(props) {
    return (
        <div style={{ width: '200px', height: '100px', backgroundColor: arrayColor[Math.floor(Math.random() * 4)], margin: '20px' }}>
            <p>total {props.name}</p>
            <p>{props.amount}</p>
        </div>
    );
}

export default TotalInfo;