import { render, screen, waitFor } from "@testing-library/react";
import { fetchAPI } from "../../utils/fetchAPI";
import Users from "./Users";

jest.mock('../../utils/fetchAPI');

describe('UsersComponent', () => {

  const mockUserList = [
    {
      id: 1,
      name: "Leanne Graham",
      phone: "1-770-736-8031 x56442"
    },
    {
      id: 2,
      name: "Ervin Howell",
      phone: "010-692-6593 x09125"
    }
  ];
  
  it('renders users comp properly with API data - [MOCKING API]', async() => {

    // let's have sample data
    // as the n/w call will get data after sometime, it should have async... await 
    // instead we can mock. 
    // mocking successful api call
    // TODO: Try mocking error case
    fetchAPI.mockResolvedValue(mockUserList);
    render(<Users />);
    await waitFor( () => {
      expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    });

  });

});