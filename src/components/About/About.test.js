// TEST PATTERN: AAA
import About, { add } from "./About";

describe('AboutComponent', () => {
  
  it('should be rendered', () => {
    expect(About).toBeDefined();
  });

  it('should add two numbers properly', () => {
    // sometimes multiple expectations are needed
    expect(add(10, 20)).toEqual(30);
    expect(add(5, 2)).toEqual(7);
  });

  // testing whether add receives only numbers as inputs
  it('handles invalid inputs', () => {
    expect(add('ABC', 50)).toEqual('Invalid Input(s)');
  });

  // let's check the return type 
  it('should add properly and return number as datatype', () => {
    expect(add(10, 20)).not.toBeNaN();
  });

});
