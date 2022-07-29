import { render, screen } from "@testing-library/react";
import Todos from "./Todos";

describe('TodosComponent', () => {

  it('fetches todos via rest api call', async() => {
    render(<Todos/>);
    // getByText will not work as the data is coming late from rest api
    expect(await screen.findByText('quis ut nam facilis et officia qui')).toBeInTheDocument();
  });
  
});

/* Challenges / Disadv of API Testing 
  1. Time consuming 
  2. Availability of REST API (may be down, may be still in dev)
  3. No guarantee for the sample data like the above to be available all the time

  Solution is to Mock. Refer Users.js 
*/

