import React from 'react'
import logo from '/home/mr_white/blood-alert-bd/blood-alert-bd/src/images/Brand-Logo-V3.png'
import { Header, Container, Image } from 'semantic-ui-react'

function MainContent(){
    return(
        <div>
            <Header as='h1' textAlign='center'>
                <Header.Content>Blood Alert BD</Header.Content>
             </Header>
            <Image
                centered
                size='large'
                src={logo}
              />
              <Container text>
                <Header as='h2'>Why Donate?</Header>
                <p>Helping people is a noble job</p>
              </Container>
        </div>
    )
}

export default MainContent
