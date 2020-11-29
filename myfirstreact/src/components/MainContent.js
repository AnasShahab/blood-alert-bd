import React from "react"

function MainContent(){
    const  firstName="Anas"
    const lastName="Shahab"
    const date=new Date(1993, 9, 24, 10)
    const hours=date.getHours()

    let timeOfDay

    const styles = {
        color: "orange",
        backgroundColor: "silver", 
        fontSize: 24
    }

    if (hours<12){
        timeOfDay="morning"
        styles.color="yellow"
    }
    else if (hours>=12 && hours <17){
        timeOfDay="afternoon"
        styles.color="orange"
    }
    else {
        timeOfDay="night"
        styles.color="purple"
    }



    return (<div>
        <main>This is the main content. I am {`${firstName} ${lastName}`}</main>
        <p>It is currently about {date.getHours() % 12}</p>
        <p style={styles}>Which means it is {timeOfDay}!</p>
        </div>
    )
}

export default MainContent