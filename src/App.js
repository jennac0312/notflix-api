import { useContext } from 'react';
import { AppContext } from './contexts/app_context';
import './App.css';
import SignIn from './components/SignIn';
import HomeScreen from './components/HomeScreen'

function App() {

  let { currentProfile } = useContext(AppContext)

  return (
    <div className="App">

      { currentProfile ? <HomeScreen /> : <SignIn /> }
      
    </div>
  );
}

export default App;
