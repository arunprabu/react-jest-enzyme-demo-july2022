// For enzyme to work... setup enzyme adapter -- Refer setupTests.js file
import { shallow } from "enzyme";
import ThemeSwitcher from "./ThemeSwitcher";

describe('ThemeSwitcher', () => {
  
  it('should have para tag', () => {
    // shallow rendering will render parent comp only not its children comp
    const wrapper = shallow(<ThemeSwitcher />);
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('should have h2 tag', () => {
    // shallow rendering will render parent comp only not its children comp
    const wrapper = shallow(<ThemeSwitcher />);
    expect(wrapper.find('h2')).toHaveLength(1);
  });

  it('has h2 with ThemeSwitcher text', () => {
    const wrapper = shallow(<ThemeSwitcher />);
    expect(wrapper.find('h2').contains('ThemeSwitcher | Enzyme Demo')).toEqual(true);
  });

});