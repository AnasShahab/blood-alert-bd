import React from 'react';
import ReactDOM from 'react-dom';

//const myfirstelement = <h1>Hello React!</h1>

function MyInfo(){
    return (<div>
        <h1>Anas Shahab</h1>
        <p>I am a master's student at TUD</p>
        <ul>
            <li>Eating</li>
            <li>Sleeping</li>
            <li>Reading</li>
        </ul>
    </div>)
}
ReactDOM.render(<MyInfo/>, document.getElementById("root"));
