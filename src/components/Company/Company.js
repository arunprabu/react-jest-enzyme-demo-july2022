import React, { useState } from 'react'

const Company = (props) => {
  const [ myCountry, setMyCountry ] = useState('');

  const handleCountryNameChange = (event) => {
    console.log(event.target.value);
    setMyCountry(event.target.value);
  }
  
  return (
    <div>
      <h2>Company | Testing html element, css, props, states, events, JSX and snapshot</h2>
      <h4>Welcome to My Company's Official Website!</h4>
      <p data-testid="companyName">{props.name}</p>

      <p>Total Employees:</p>
      <p 
      data-testid="employeeCountEl" 
      style={{color:'green', 
      padding:'30px'}}>340000</p>
      <a href="/" role="button">JOIN NOW</a>
      <br/>
      <br/>

      <input type="text" placeholder="Enter Country" 
        value={myCountry} 
        onChange={handleCountryNameChange}/>
      <p>Head over to Cognizant {myCountry} Website</p>
    </div>
  )
}

export default Company