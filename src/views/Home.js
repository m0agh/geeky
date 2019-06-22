import React, { Component } from 'react'
import { Btn } from '../components/Button'
import { Avatar } from '../components/Avatar'


class Home extends Component {
  render(){
    return (
      <React.Fragment>
        <Avatar src="/img/avatar.jpeg" />
        <h1>Hello World!</h1>
        <Btn 
          onClick={() => { 
            alert("Great interacting with you, dude!")
          }}>
          I'm Morteza!
        </Btn>
        <p>An ambitious Experienced and Creative Front-End Developer with more than 5 years of experience of working.</p>
      </React.Fragment>
    )
  }
}

export default Home;