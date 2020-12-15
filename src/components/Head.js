import React, { Component } from 'react'
import { Button, Dropdown, Menu, Image, Icon, Grid } from 'semantic-ui-react'
import logo from '/home/mr_white/blood-alert-bd/blood-alert-bd/src/images/Brand-Logo-V3.png'

class Head extends Component{
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render(){
        const { activeItem } = this.state
        return(
              <Menu inverted size='large'>

                <Menu.Item name='home'>
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

{/*               <Menu.Item
                name='contact'
                active={activeItem === 'contact'}
                onClick={this.handleItemClick}
              /> */}

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

                <Menu.Item
                  name='Blood Facts'
                  active={activeItem === 'Blood Facts'}
                  onClick={this.handleItemClick}
                />

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
                name='F A Qs'
                active={activeItem === 'F A Qs'}
                onClick={this.handleItemClick}
              />

              <Menu.Menu position='right'>
                <Menu.Item
                  name='Blog'
                  active={activeItem === 'Blog'}
                  onClick={this.handleItemClick}
                />

                <Dropdown 
                  item text='Language'
                  name='Language'
                  active={activeItem === 'Language'}
                  onClick={this.handleItemClick}>
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
                  <Button primary>Sign In</Button>
                </Menu.Item>

              </Menu.Menu>

            </Menu>

    )
  }
}

export default Head