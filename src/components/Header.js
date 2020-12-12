import React, { Component } from 'react'
import { Button, Dropdown, Menu, Image, Icon } from 'semantic-ui-react'
import logo from '/home/mr_white/blood-alert-bd/blood-alert-bd/src/images/Brand-Logo-V3.png'

class Header extends Component{
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render(){
        const { activeItem } = this.state
        return(
          <Menu inverted size='large'>

            <Menu.Item>
              <Image 
                src={logo}
                size='tiny' 
              />
            </Menu.Item>

            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />

            <Menu.Item
              name='contact'
              active={activeItem === 'contact'}
              onClick={this.handleItemClick}
            />

            <Dropdown item text='Blood Services'>
              <Dropdown.Menu>
                <Dropdown.Item>Donate</Dropdown.Item>
                <Dropdown.Item>Request</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text='Initiative'>
              <Dropdown.Menu>
                <Dropdown.Item>Motive</Dropdown.Item>
                <Dropdown.Item>Members</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Menu position='right'>

              <Dropdown item text='Language'>
                <Dropdown.Menu>
                  <Dropdown.Item>English</Dropdown.Item>
                  <Dropdown.Item>Bengali</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            <Menu.Item>
              <a href='https://www.facebook.com/groups/bloodalertbd' target='_blank'>
                <Button color='facebook'>
                  <Icon name='facebook' />Facebook
                </Button> 
              </a>
            </Menu.Item>



              <Menu.Item>
                <Button primary>Register</Button>
              </Menu.Item>
              
              <Menu.Item>
                <Button primary>Login</Button>
              </Menu.Item>

            </Menu.Menu>

          </Menu>
    )
  }
}

export default Header