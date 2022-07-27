// write the test specs here 
// Testing Pattern: AAA (Arrange, Act, Assert)

import { render, screen } from '@testing-library/react';
import App from './App'; // taking up the comp testing

// group of related test spec -- TEST SUITE 
describe('AppComponent', () => {

  // test spec 
  test('should have Welcome text', ()=> {
    // Arrange 
    render(<App/>); 

    // ACT
    const welcomeEl = screen.getByText(/Welcome to Unit Testing!!!/);

    // Assert
    // expect is from JEST 
    // toBeInTheDocument - is from @testing-library/jest-dom
    expect(welcomeEl).toBeInTheDocument();
  });

  it('should render app comp', () => { // it -is an alias of test
    expect(App).toBeTruthy();
  });

});





















// // test spec 
// test('Learn React link', () => {
//   // Arrange
//   render(<App />); // rendering the app comp 

//   // Act
//   // only after rendering we can query thru the dom element 
//   const linkEl = screen.getByText(/learn react/i);

//   // Assert 
//   expect(linkEl).toBeInTheDocument();
// });
















// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });