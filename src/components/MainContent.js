import React from 'react'
import logo from '/home/mr_white/blood-alert-bd/blood-alert-bd/src/images/192x192.png'
import { Radio, Header, Statistic, Image, Grid, Segment, Container, Button, Icon, List, Item } from 'semantic-ui-react'


const items = [
    { key: 'donors', label: 'Donors', value: 100 },
    { key: 'helped', label: 'Helped', value: 20 },
  ]
/* const blogItems = [
    {
        childKey: 0,
        image: {size: 'tiny', src: {logo}},
        header: {as : 'a', content: 'Header of Blog A'},
        description: 'Description of Blog A',
        meta: 'Metadata or sub heading of Blog A',
        extra: 'Extra',
    },
    {
        childKey: 1,
        image: {size: "tiny", src: {logo}},
        header: 'Header of Blog B',
        description: 'Description of Blog B',
        meta: 'Metadata or sub heading of Blog B',
        extra: 'Extra',
    },
    {
        childKey: 2,
        image: {size: "tiny", src: {logo}},
        header: 'Header of Blog C',
        description: 'Description of Blog C',
        meta: 'Metadata or sub heading of Blog C',
        extra: 'Extra',
    },
    {
        childKey: 3,
        image: '/192x192.png',
        header: 'Header of Blog D',
        description: 'Description of Blog D',
        meta: 'Metadata or sub heading of Blog D',
        extra: 'Extra',
    },
      
] */


function MainContent(){
    return(
        <div>
            <Header as='h1' textAlign='center'>
                <Header.Content>Blood Alert BD</Header.Content>
            </Header>
            
            <Grid stackable>
                <Grid.Column width={5}>
                </Grid.Column>
                <Grid.Column className="test" width={6}>
                  <Image className='App-logo'
                     centered
                     size='small'
                     src={logo}
                    />
                </Grid.Column>

                <Grid.Column className="test1" textAlign='right' width={5}>

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
    

 {/*            <Grid stackable divided='vertically'>
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
            </Grid>  */}

<Segment.Group compact raised >
<Segment>  
            <Item.Group>
 
                <Item>
                    <Item.Image size='tiny' src={logo}/>
                    <Item.Content>
                        <Item.Header as='a'>Blog Title A</Item.Header>
                        <Item.Meta>Some sub-heading</Item.Meta>
                        <Item.Description>
                            Content of the Blog A
                        </Item.Description>
                        <Item.Extra>Additional Details</Item.Extra>
                    </Item.Content>
                  
                </Item>
       <hr/>
             
                <Item>

               
                    <Item.Image size='tiny' src={logo}/>
                    <Item.Content>
                        <Item.Header as='a'>Blog Title B</Item.Header>
                        <Item.Meta>Some sub-heading</Item.Meta>
                        <Item.Description>
                            Content of the Blog B
                        </Item.Description>
                        <Item.Extra>Additional Details</Item.Extra>
                    </Item.Content>
                   
                </Item>
                <hr/>
         
                <Item>

            
                    <Item.Image size='tiny' src={logo}/>
                    <Item.Content>
                        <Item.Header as='a'>Blog Title C</Item.Header>
                        <Item.Meta>Some sub-heading</Item.Meta>
                        <Item.Description>
                            Content of the Blog C
                        </Item.Description>
                        <Item.Extra>Additional Details</Item.Extra>
                    </Item.Content>
                   
                </Item>
<hr/>
                <Item>

            
                <Item.Image size='tiny' src={logo}/>
                <Item.Content>
                    <Item.Header as='a'>Blog Title D</Item.Header>
                    <Item.Meta>Some sub-heading</Item.Meta>
                    <Item.Description>
                        Content of the Blog D
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                </Item.Content>

                </Item>
        
              
            </Item.Group>
            </Segment>
            </Segment.Group>
            
         {/*    <Item.Group items={blogItems} /> */}

        </div>
    )
}

export default MainContent
