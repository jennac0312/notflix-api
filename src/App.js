import { useContext, useEffect } from 'react';
import { AppContext } from './contexts/app_context';
import './App.css';
import SignIn from './components/SignIn';
import HomeScreen from './components/HomeScreen'
import LoadingScreen from './components/LoadingScreen';

function App() {

  let { currentProfile } = useContext(AppContext)

  return (
    <div className="App">
        {/* <LoadingScreen parent="app" /> */}

      {currentProfile ? <HomeScreen /> : <SignIn />}
    </div>
  );
}

export default App;
