import React, { Component } from 'react';
import Switch from "react-switch";

const textSwitch = {
    display: "flex",
    justtifyContent: "center",
    alignItems: "center",
    height: "100%",
    fontSize: "15px",
    color: "#fff",
    paddingLeft: 7
}

class ToggleSwitch extends Component {
    constructor(){
        super()
        this.state={
            checked: false
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(checked){
        this.setState({checked})
    }
    render() {
        return (
            <div>
                <Switch 
                    className="react-switch"
                    onChange={this.handleChange}
                    checked={this.state.checked}
                    handleDiameter={30}
                    offColor="#085" 
                    onColor="#B20000" 
                    offHandleColor="#000000"
                    onHandleColor="#ffffff" 
                    height={40}
                    width={80}
                    checkedIcon={
                        <div style={textSwitch}>ENG</div>
                    }
                    uncheckedIcon={
                        <div style={textSwitch}>বাংলা</div>
                    }
                />
            </div>
        );
    }
}

export default ToggleSwitch