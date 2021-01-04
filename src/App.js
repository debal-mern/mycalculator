import logo from './logo.svg';
import './App.css';
// Import Modules
import { Operation } from './nodes/Operation';
function App() {
  return (
    <div className="App">
      <h1>
        Simple Addition
        </h1>
       <Operation />
    </div>
  );
}

export default App;
