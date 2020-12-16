import React from 'react'
import logo from '/home/mr_white/blood-alert-bd/blood-alert-bd/src/images/192x192.png'
import { Radio, Header, Statistic, Image, Grid, Segment, Container, Button, Icon } from 'semantic-ui-react'


const items = [
    { key: 'donors', label: 'Donors', value: 100 },
    { key: 'helped', label: 'Helped', value: 20 },
  ]


function MainContent(){
    return(
        <div>
            <Header as='h1' textAlign='center'>
                <Header.Content>Blood Alert BD</Header.Content>
                
             </Header>
            

             <Grid stackable>
             <Grid.Column width={5}>
                </Grid.Column>
                <Grid.Column width={6}>
                  <Image className='App-logo'
                     centered
                     size='small'
                     src={logo}
                    />
                </Grid.Column>

                <Grid.Column textAlign='right' width={5}>

                       <Statistic>
                            <Statistic.Value>100</Statistic.Value>
                            <Statistic.Label>Donors</Statistic.Label>
                        </Statistic>
                        <Statistic>
                            <Statistic.Value>50</Statistic.Value>
                            <Statistic.Label>Helped</Statistic.Label>
                        </Statistic>
                        <div>
                            <a href='https://www.facebook.com/groups/bloodalertbd' target='_blank'>
                            <Button circular color='facebook'>
                                <Icon name='facebook' />Join us on Facebook</Button> 
                            </a>
                        </div>
                        
               
                
      
                   </Grid.Column>
             </Grid>
        
          {/*    <a href='https://www.facebook.com/groups/bloodalertbd' target='_blank'>
                  <Button color='facebook'>
                    <Icon name='facebook' />Facebook
                  </Button> 
                </a> */}
    

            <Grid stackable divided='vertically'>
                <Grid.Row columns={3}>
                    <Grid.Column textAlign='center'>
                        <Header as='h2'>Why Donate?</Header>
                        <p>Helping people is a noble job</p>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Header as='h2'>Types of Blood</Header>
                        <p>A-, A+, B-, B+, AB-, AB+, O-, O+</p>
                    </Grid.Column>

                </Grid.Row>

                <Grid.Row columns={3}>
                    <Grid.Column textAlign='center'>
                        <p>Let's all donate blood</p>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <p>What's your blood type?</p>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <p>Join the noble cause now!</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid> 
            
        </div>
    )
}

export default MainContent
