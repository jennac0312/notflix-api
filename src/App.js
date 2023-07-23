import './App.css';
import { useContext } from 'react';
import { ApiContext } from './contexts/api_context';

function App() {

  let { test } = useContext(ApiContext)
  console.log(test)

  return (
    <div className="App">
    </div>
  );
}

export default App;
