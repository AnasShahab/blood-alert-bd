import React from "react"
import ContactCard from "./components/ContactCard"

function App2(){
    return (
        <div>
{/*             <ContactCard 
                name="Mr. White"
                imgUrl="https://img1.looper.com/img/gallery/did-the-breaking-bad-finale-give-walt-what-he-deserved/intro-1566848074.jpg"
                phone="016272727272"
                email="aas.s@gmail.com"/> */}
            
            <ContactCard 
                contact={{name:"Mr. White", 
                imgUrl:"https://img1.looper.com/img/gallery/did-the-breaking-bad-finale-give-walt-what-he-deserved/intro-1566848074.jpg",
                phone:"016272727272",
                email:"aas.s@gmail.com"}}/>

            <ContactCard  
                contact={{name:"Ross",
                imgUrl:"https://cdn02.plentymarkets.com/embsowjb9n82/item/images/30365/full/Breaking-Bad-Heisenberg-Pic-Herren-T-Shirt-schwarz-30365_4.jpg",
                phone:"01627332327272",
                email:"aasw.s@gmail.com"}}/>

             <ContactCard  
                contact={{name:"Boss",
                imgUrl:"https://i.insider.com/5d5dad0a510fc0044b707609?width=1100&format=jpeg&auto=webp",
                phone:"01627322327272",
                email:"dasw.s@gmail.com"}}/>

            <ContactCard  
                contact={{name:"Matt",
                imgUrl:"https://www.pngfind.com/pngs/m/125-1253259_heisenberg-breaking-bad-tee-lets-cook-heisenberg-breaking.png",
                phone:"05555322327272",
                email:"cook.s@gmail.com"}}/>
            </div>
    )
}

export default App2