import { render, screen } from "@testing-library/react";
import Company from "./Company";

describe('CompanyComponent', () => {
  
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
    expect(screen.getByTestId('employeeCountEl'))
      .toHaveStyle('color: green');
  });

});
