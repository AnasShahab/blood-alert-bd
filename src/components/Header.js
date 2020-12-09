import React, { Component } from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

class Header extends Component{
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render(){
        const { activeItem } = this.state
        return(
        <Menu size='large'>
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
          <Menu.Menu position='right'>
          <Menu.Item>
            <Button primary>Sign Up</Button>
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