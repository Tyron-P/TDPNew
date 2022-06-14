// import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Team from './Team';
import MilesAhead from './MilesAhead';
import Login from './Login';


function App() {
  // const element = <h1> this is an HTML element stored instide a cosntant </h1>
  return (
    <div className="App">
      <Heading/>
      <Team names="Tyron" age={26} background="Nationwide"/>
      <Team names="Niki" age={31} background="Nationwide"/>
      <Team names="Michal" age={30} background="Graduate"/>
      <br/>
      <MilesAhead/>
      <br/>
      <Login/>
    </div>
  );
}

export default App;
