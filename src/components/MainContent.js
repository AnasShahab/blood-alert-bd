import React from 'react'
import logo from '/home/mr_white/blood-alert-bd/blood-alert-bd/src/images/Logo-Draft.png'
import { Header, Container, Image } from 'semantic-ui-react'

function MainContent(){
    return(
/*         <div>
<h1 class="ui center aligned header">Blood Alert BD</h1>
    <img class="ui centered medium image" src={logo} alt="logo" />


<div class="ui segment">
    <h2>Why Donate?</h2>
    <p>Helping people is a noble job</p>
</div>

</div> */
        <div>
            <Header as='h1' textAlign='center'>
                <Header.Content>Blood Alert BD</Header.Content>
             </Header>
            <Image
                centered
                size='medium'
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
