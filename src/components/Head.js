import React, { Component } from 'react'
import { Button, Dropdown, Menu, Image, Icon } from 'semantic-ui-react'
import logo from '/home/mr_white/blood-alert-bd/blood-alert-bd/src/images/64x64.png'
import ToggleSwitch from "./ToggleSwitch"
import { Link, withRouter  } from "react-router-dom"


/* class Head extends Component{
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name }) 
    handleItemClick = (e, { name }) => alert(e.type)
    render(){
       const { activeItem } = this.state
    }
  }  */

function Head(props) {
  return( 
    <Menu pointing inverted size='large'>

      <Menu.Item
        as={Link} to='/'
        /* active={activeItem === 'home'}
        onClick={this.handleItemClick}  */
        active={props.location.pathname === '/'}
        link
      >
          <Image 
            rounded
            src={logo}
            size='mini'
            spaced='right'
          />Home

      </Menu.Item>

      <Dropdown 
        item text='Blood Services' 
        name='Blood Services'        
        /* active={activeItem === 'Blood Services'}
        onClick={this.handleItemClick} */
      >
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to='/donate'>
            Donate
          </Dropdown.Item>
          <Dropdown.Item>Request</Dropdown.Item>
          <Dropdown.Item>Blood Centers</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown 
        item text='About Us'
        name='About Us'
        /* active={activeItem === 'About Us'}
        onClick={this.handleItemClick} */ 
      > 
        <Dropdown.Menu>
          <Dropdown.Item>Our Mission</Dropdown.Item>
          <Dropdown.Item>Members</Dropdown.Item>
          <Dropdown.Item>Contact Us</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Menu.Item
        as={Link} to='/faq'
        active={props.location.pathname === '/faq'}
        content='FAQ'
        link
/*      name='FAQ'
        active={activeItem === 'FAQ'}
        onClick={this.handleItemClick} */
      >
        </Menu.Item>

      <Menu.Menu position='right'>
        
        <Menu.Item
          as={Link} to='/blog'
          /* name='Blog' */
          content='Blog'
          icon='blogger b'
          active={props.location.pathname === '/blog'}
          link
          /* active={activeItem === 'Blog'} */
          /* onClick={this.handleItemClick} */                
        >
        </Menu.Item>

        <Menu.Item>
          <ToggleSwitch />
        </Menu.Item>

        <Menu.Item>
          <Button color="instagram">Sign In <Icon name='sign-in' fitted/></Button>
        </Menu.Item>

      </Menu.Menu>

    </Menu>
  )
}
  
export default withRouter(Head)