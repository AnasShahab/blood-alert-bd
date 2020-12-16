import React from 'react'
import { Segment, Container, Grid, Header, List, Divider, Image } from 'semantic-ui-react'
import logo from '/home/mr_white/blood-alert-bd/blood-alert-bd/src/images/64x64.png'

function Foot(){
    return(
        <div>
            <div className='footer'>
                <Segment inverted padded textAlign='center'>
{/*                     <Grid divided inverted stackable>
                         <Grid.Column width={3}>
                            <Header inverted as='h4' content='Group 1' />
                                <List link inverted>
                                    <List.Item as='a'>Link One</List.Item>
                                    <List.Item as='a'>Link Two</List.Item>
                                    <List.Item as='a'>Link Three</List.Item>
                                    <List.Item as='a'>Link Four</List.Item>
                                </List>
                        </Grid.Column>  

                       <Grid.Column width={3}>
                          <Header inverted as='h4' content='Group 2' />
                              <List link inverted>
                                <List.Item as='a'>Link One</List.Item>
                                <List.Item as='a'>Link Two</List.Item>
                                <List.Item as='a'>Link Three</List.Item>
                                <List.Item as='a'>Link Four</List.Item>
                            </List>
                        </Grid.Column>

                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Group 3' />
                                <List link inverted>
                                    <List.Item as='a'>Link One</List.Item>
                                    <List.Item as='a'>Link Two</List.Item>
                                    <List.Item as='a'>Link Three</List.Item>
                                    <List.Item as='a'>Link Four</List.Item>
                                 </List>
                        </Grid.Column>

                        <Grid.Column width={7}>
                            <Header inverted as='h4' content='Feedback'/>

                        </Grid.Column>
                    </Grid>
  
                    <Divider inverted section /> */}
                    <Image centered size='mini' src={logo} />
                    <List horizontal inverted divided link size='small'>
                        <List.Item as='a' href='#'>
                            Site Map
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Contact Us
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Terms and Conditions
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Privacy Policy
                        </List.Item>
                    </List>
                </Segment>
            </div>
        </div>
    )
}

export default Foot