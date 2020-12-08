import React from 'react'
import logo from '/home/mr_white/blood-alert-bd/blood-alert-bd/src/images/Logo-Draft.png'
//import './App.css'

function MainContent(){
    return(
        <div>
            <h1>Blood Alert BD</h1>
            <img src={logo} alt="logo" />
            <section>
                <h2>This is a section.Why Donate?</h2>
                <p>Helping people is a noble job</p>
                </section>

            <section>
                <h2>This is a section. Effect of Donating</h2>
                <p>Body remains fit</p>
            </section>

            <article>
                <h3>This is an article. Some forum post or blog post</h3>
                <p>Blah blah</p>
            </article>

            <article>
                <h3>This is an article. Some Newspaper article</h3>
                <p>Blah blah</p>
            </article>

            <aside>
                <h4>This is aside</h4>
            </aside>
        </div>
    )
}

export default MainContent