import './App.css';
import About from './components/About/About';
import Company from './components/Company/Company';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import Todos from './components/Todos/Todos';
import Users from './components/Users/Users';

function App() {
  return (
    <div>
      <h1>Welcome to Unit Testing!!!</h1>

      <hr />
      <About />

      <hr/>
      <Company name="Cognizant Ltd"/>

      <hr/>
      <Todos />

      <hr/>
      <Users />

      <hr/>
      <ThemeSwitcher />
    </div>
  );
}

export default App;
