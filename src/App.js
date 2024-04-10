import logo from './logo.svg';
import './App.css';
import {Greet} from './components/greet'
import Welcome from './components/Welcome';
import Hello from './components/hello';
import Message from './components/Message';
import Counter from './components/counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      <EventBind/>
      {/* <ClassClick/> */}
      {/* <FunctionClick/> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
        </Greet>
      <Greet name="Clark" heroName="Superman"> </Greet>
      <Greet name="Diana" heroName="Wonder Woman"/> 
      <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Clark" heroName="Superman"/>
      <Welcome name="Diana" heroName="Wonder Woman" />

      <Hello></Hello> */}
    </div>
  );
}

export default App;
