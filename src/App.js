import { Example1 } from "./Components/Example1";

function App() {
  console.log(Example1());
  console.log(<Example1 name='abhinav'/>);
  return (
    <div className="App">
      <header className="App-header">
        <Example1/>
      </header>
    </div>
  );
}

export default App;

// Behind the scenes of react
// functional comp ---> react calls it directly with the props given
// class comp ---> react created an instance of it and then calls the render method of the class