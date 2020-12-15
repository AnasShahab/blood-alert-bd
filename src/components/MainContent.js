import React from 'react'
import logo from '/home/mr_white/blood-alert-bd/blood-alert-bd/src/images/Brand-Logo-V3.png'
import { Radio, Header, Statistic, Image, Grid, Segment, Container } from 'semantic-ui-react'


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

             <Grid>
                <Grid.Column width={10}>
                  <Image
                     floated='right'
                     size='large'
                     src={logo}
                    />
                </Grid.Column>

                <Grid.Column floated='right' width={2}>
                   <Statistic.Group items={items} />
                   </Grid.Column>
             </Grid>


       
{/*             <Image
                centered
                size='large'
                src={logo}
              /> */}

{/* <Statistic.Group items={items} /> */}
          

{/*             <Grid textAlign='center' stackable columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h2'>Why Donate?</Header>
                        <p>Helping people is a noble job</p>
                    </Grid.Column>

                    <Grid.Column>
                        <Header as='h2'>Types of Blood</Header>
                        <p>A-, A+, B-, B+, AB-, AB+, O-, O+</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            

            <Grid textAlign='center' stackable columns={3}>
                <Grid.Row >
                    <Grid.Column>
                        <p>Let's all donate blood</p>
                    </Grid.Column>

                    <Grid.Column>
                        <p>What's your blood type?</p>
                    </Grid.Column>

                    <Grid.Column>
                        <p>Join the noble cause now!</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

 */}


            <Grid stackable divided='vertically'>
                <Grid.Row columns={2}>
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
