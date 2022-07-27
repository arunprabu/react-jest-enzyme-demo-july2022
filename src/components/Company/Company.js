import React from 'react'

const Company = () => {
  return (
    <div>
      <h2>Company | Testing html element, css, props, states, events, JSX and snapshot</h2>
      <h4>Welcome to My Company's Official Website!</h4>
      <p>Total Employees: </p>
      <p 
      data-testid="employeeCountEl" 
      style={{color:'green', 
      padding:'30px'}}>340000</p>
    </div>
  )
}

export default Company