import React from 'react'

const About = () => {

  return (
    <div>
      <h2>About Unit Testing | Testing a simple fn</h2>
    </div>
  )
}

export const add = (a, b) => {
  if(typeof a === 'number' && typeof b === 'number'){
    return a + b;  
  }else{
    return 'Invalid Input(s)';
  }
}

export default About;