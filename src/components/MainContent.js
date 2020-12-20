import React from 'react'
import logo from '/home/mr_white/blood-alert-bd/blood-alert-bd/src/images/192x192.png'
import pic3 from '/home/mr_white/blood-alert-bd/blood-alert-bd/src/images/3.png'
import pic4 from '/home/mr_white/blood-alert-bd/blood-alert-bd/src/images/4.png'
import { Header, Statistic, Image, Grid, Segment, Button, Icon, Item, Reveal, Placeholder, Container } from 'semantic-ui-react'
import MainSlide from './MainSlide'


const items = [
    { key: 'donors', label: 'Donors', value: 100 },
    { key: 'helped', label: 'Helped', value: 20 },
  ]



function MainContent(){
    return(
        <div>
            <Container style={{width:'97%'}}>
            <Header size='huge' textAlign='center'>
                <Header.Content>Blood Alert BD</Header.Content>
                <Header.Subheader><strong>A Blood Donation Service</strong></Header.Subheader>
            </Header>
            
            <Grid stackable>
                <Grid.Column className='test1' width={5}>
                </Grid.Column>
                <Grid.Column className='test' width={6}>
                  <Image className='App-logo'
                     centered
                     size='small'
                     src={logo}
                    />
                </Grid.Column>

                <Grid.Column className='test1' textAlign='right' width={5}>

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
                            <Button floated='right' circular color='facebook'>
                                <Icon name='facebook' />Join us on Facebook</Button> 
                            </a>
                        </div>
                        
                </Grid.Column>
            </Grid>

            <Grid stackable>
                <Grid.Column className='test' width='5'></Grid.Column>
                <Grid.Column  textAlign='center' className='tes' width='6'>
                    <MainSlide />
                </Grid.Column>
                <Grid.Column className='test' width='5'></Grid.Column>
    
            </Grid>

            <Grid stackable divided='vertically'>
                <Grid.Row columns={3}>
                    <Grid.Column width={6} textAlign='center' >
                        <Header as='h2'>Why Donate?</Header>
                            <Container text textAlign='justified'>
                                <h4>Helping people is a noble job. Do blah Lorem ipsum dolor sit amet, consectetuer 
                                    adipiscing elit. Aenean comm ligula eget dolor. Aenean massa strong. Cum sociis 
                                    natoque penatibus et ,consectetuer lah blah blah good and good
                                    when push comes to shove
                                    you have to deal... <a href="">Read more</a></h4>
                            </Container>
                    </Grid.Column>
                    <Grid.Column width={4} className='test'>
                        </Grid.Column>
                    <Grid.Column width={6} className='test1' textAlign='center'>
                    <Container text textAlign='center'>
                        <Header as='h2'>Types of Blood &amp; their possible effects </Header>
                        <h4>A-, A+, B-, B+, AB-, AB+, O-, O+</h4>
                        <h4>A+ causes this and that. B+ causes...<a href="">Read more</a></h4>
                    </Container>
                    </Grid.Column>

                </Grid.Row>

                <Grid.Row columns={3}>
                    <Grid.Column textAlign='center'>
                        <h3>Let's all donate blood</h3>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <h4>What's your blood type?</h4>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <h3>Join the noble cause now!</h3>
                    </Grid.Column>
                </Grid.Row>
            </Grid> 

            <Grid>
                <Grid.Column textAlign='center' className='test1' width={8}>
                    <Image 
                        className='reqimg'
                        centered
                        src={pic3}
                    />
                    <Button color='green' size='large'>Request Blood</Button>
                </Grid.Column>
                <Grid.Column textAlign='center' className='test' width={8}>
                <   Image 
                        className='reqimg' 
                        centered
                        src={pic4}
                    />
                    <Button color='blue' size='large'>Our Mission</Button>
                </Grid.Column>
            </Grid>
    


            </Container>

        </div>
    )
}

export default MainContent
