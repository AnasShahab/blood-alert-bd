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
            checked: true
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
                    offColor="#085" //green
                    onColor="#B20000" //red
                    offHandleColor="#000000" //cyan
                    onHandleColor="#ffffff" //green
                    height={40}
                    width={80}
                    checkedIcon={
                        <div style={textSwitch}>ENG</div>
                    }
                    uncheckedIcon={
                        <div style={textSwitch}>BNG</div>
                    }
                />
                {/* <p>The switch is <b>{this.state.checked ? 'on' : 'off'}</b>.</p> */}
            </div>
        );
    }
}

export default ToggleSwitch