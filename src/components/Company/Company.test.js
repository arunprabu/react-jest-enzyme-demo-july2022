import { fireEvent, render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer';
import Company from "./Company";

describe('CompanyComponent', () => {
  
  // setup -- beforeAll and beforeEach 
  // tear down -- afterAll and afterEach 

  // test spec #1
  it('should be rendered', () => {
    expect(Company).toBeDefined();
  });

  // test spec #2 
  it('has Welcome to My Company\'s Official Website!', () => {
    render( <Company/>);
    const welcomeEl = screen.getByText('Welcome to My Company\'s Official Website!');
    expect(welcomeEl).toBeInTheDocument();
  });

  // test spec #3
  it('has an element with css style -- color:green',  () => {
    render( <Company/>);
    expect(screen.getByTestId('employeeCountEl')).toHaveStyle('color: green');
  });

  // test spec #4
  // TODO: learn about finding a paragraph element and check whether it has css class 'myPara' 

  // test spec #5
  it('has a button with role button', () => {
    render( <Company/>);
    expect(screen.getByRole('button')).toBeTruthy();
  });

  // test spec #6
  it(`has an element with placeholder 'Enter Country'`, () => {
    render( <Company/>);
    expect(screen.getByPlaceholderText('Enter Country')).toBeTruthy();
  });

  // test spec #7 -- let's test the props 
  it('receives props and displays them properly', () => {
    // take up the comp to put under test with props
    // we will re-render with different prop soon
    const { rerender } = render(<Company name='Cognizant Tech Pvt Ltd'/>); 
    // fetching the element by an attribute data-testid from the JSX 
    // checking if the props are received and displayed properly inside JSX
    expect(screen.getByTestId('companyName')).toHaveTextContent('Cognizant Tech Pvt Ltd');

    // re-rendering with different props now
    rerender(<Company name='Cognizant Technologies Pvt Ltd'/>);    
    expect(screen.getByTestId('companyName')).toHaveTextContent('Cognizant Technologies Pvt Ltd');
  });

  // test spec #8 -- checking if the input element works with onChange event 
  it('should update country onChange event', () => {
    render( <Company/>);
    // finding an element with placeholder -- this will have onChange event 
    const countryInput = screen.getByPlaceholderText('Enter Country');
    // now checking if the onChange works or not
    // mock fire the change event with mock value 
    fireEvent.change(countryInput, { target: {value: 'Canada'}});
    // finally checking if the input element is showing the entered country
    expect(countryInput.value).toBe('Canada');
  });

  // test spec #9 let's try snapshot testing
  it('has right company component snapshot', () => {
    // to take a snapshot we need a tool - react-test-renderer (npm i react-test-renderer)
    // taking snapshot and convert into json 
    // [RECOMMENDED]: Take snapshot with necessary props
    const snapshotJSON = renderer.create(<Company name='Cognizant Tech Pvt Ltd'/>).toJSON();
    // now let's assert 
    expect(snapshotJSON).toMatchSnapshot();
  });


});
