import React from "react"
import Carousel from "semantic-ui-carousel-react"
import { Image, Button } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import pic0 from "/home/mr_white/blood-alert-bd/blood-alert-bd/src/images/0.jpeg"
import pic1 from "/home/mr_white/blood-alert-bd/blood-alert-bd/src/images/1.jpeg"
import pic2 from "/home/mr_white/blood-alert-bd/blood-alert-bd/src/images/2.jpg"
const MainSlide = () => {
  let elements = [
    {
      render: () => {
        return (
          <Image 
            centered
            className='imgslide'
            src={pic0} 
            />
        )
      }
    },
    {
      render: () => {
        return (
          <Image 
            centered
            className='imgslide'
            src={pic1} 
          />
        )
      }
    },
    {
      render: () => {
        return (
          <Image 
            centered
            className='imgslide'
            src={pic2} 
            />
        )
      }
    }
  ]
  return (
    <div>
      <div style={{ width:'100%', height: '100%', textAlign: 'right', border: '10px solid black', margin: '5px'}}>
        <Carousel
          elements={elements}
          duration={3000}
          animation="fade right"
          showNextPrev={false}
          showIndicators={true}
        />

      </div>
      
      <Button color='red' size='large'>Donate now!</Button>
    </div>
  )
  
}
//zoom jiggle flash shake pulse tada bounce glow
//browse browse right drop fade fade up fade down fade left fade right fly up fly down fly left fly right horizontal flip vertical flip scale slide up slide down slide left slide right swing up swing down swing left swing right zoom jiggle flash shake pulse tada bounce glow
export default MainSlide
