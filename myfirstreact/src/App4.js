import React from "react"
import Joke from "./components/Joke"
import jokesData from "./jokesData"

function App4(){
/*     const jokeComponents = jokesData.map(function(joke){
       return  <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
        
   }) */
   const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

    return (
        <div>
            {jokeComponents}
        </div>
    )
}

export default App4