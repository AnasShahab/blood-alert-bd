import React, { Component } from 'react';
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
class BlogSlide extends Component {
    render() {
        return (
            <div>
                <Segment.Group compact raised >
<Segment>  
            <Item.Group>
 
                <Item>
                    <Item.Image className='blogimg' size='tiny' src={logo}/>
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

               
                    <Item.Image className='blogimg' size='tiny' src={logo}/>
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

            
                    <Item.Image className='blogimg' size='tiny' src={logo}/>
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

            
                <Item.Image className='blogimg' size='tiny' src={logo}/>
                <Item.Content>
                    <Item.Header as='a'>Blog Title D</Item.Header>
                    <Item.Meta>Some sub-heading</Item.Meta>
                    <Item.Description>
                        Content of the Blog D
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                </Item.Content>

                </Item>
                <hr/>
                <Item>

            
                <Item.Image className='blogimg' size='tiny' src={logo}/>
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
        );
    }
}

export default BlogSlide;