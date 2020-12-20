import React, { Component } from 'react'
import { Button, Dropdown, Menu, Image, Icon } from 'semantic-ui-react'
import logo from '/home/mr_white/blood-alert-bd/blood-alert-bd/src/images/64x64.png'
import ToggleSwitch from "./ToggleSwitch"

class Head extends Component{
/*   constructor(){
    super()
    this.state={ activeItem: 'home' }
  }
  function handleItemClick(name){
    return(
      this.setState({ activeItem: name })
    )    
  } */
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render(){
        const { activeItem } = this.state
        return(
          <Menu inverted size='large'>

            <Menu.Item
              name='home' 
              active={activeItem === 'home'}
              onClick={this.handleItemClick} >
                <Image 
                  rounded
                  src={logo}
                  size='mini'
                  spaced='right'
                />
                 Home
                </Menu.Item>

            <Dropdown 
              item text='Blood Services' 
              name='Blood Services'
              active={activeItem === 'Blood Services'}
              onClick={this.handleItemClick}>
                <Dropdown.Menu>
                  <Dropdown.Item>Donate</Dropdown.Item>
                  <Dropdown.Item>Request</Dropdown.Item>
                  <Dropdown.Item>Blood Centers</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            <Dropdown 
              item text='About Us'
              name='About Us'
              active={activeItem === 'About Us'}
              onClick={this.handleItemClick}>
                <Dropdown.Menu>
                  <Dropdown.Item>Our Mission</Dropdown.Item>
                  <Dropdown.Item>Members</Dropdown.Item>
                  <Dropdown.Item>Contact Us</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Menu.Item
              name='F A Q'
              active={activeItem === 'F A Q'}
              onClick={this.handleItemClick}
            />

            <Menu.Menu position='right'>
              <Menu.Item
                name='Blog'
                content='Blog'
                icon='blogger b'
                active={activeItem === 'Blog'}
                onClick={this.handleItemClick}
              />

            <Menu.Item>
              <ToggleSwitch />
            </Menu.Item>

            <Menu.Item
              icon='sign in'>
              <Button color="instagram">Sign In <Icon name='sign-in'/></Button>
            </Menu.Item>
            </Menu.Menu>

          </Menu>
            
    )
  }
}

export default Head