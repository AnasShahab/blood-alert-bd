import React from "react"
import Joke from "./components/Joke"

function App3(){
    return (
        <div>
            <Joke question="Have you eaten?" answer="I just ate your food!"/>
            <Joke question="Have you showered?" answer="Once since birth."/>
            <Joke question="Do you smoke?" answer="Smoke smokes me."/>
            <Joke question="Have you driven?" answer="I drive you everyday."/>
            <Joke answer="You know you're drunk when you talk to me."></Joke>
        </div>
    )
}

export default App3