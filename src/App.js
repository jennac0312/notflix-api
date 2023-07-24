import { useContext, useEffect } from 'react';
import { AppContext } from './contexts/app_context';
import './App.css';
import SignIn from './components/SignIn';
import Home from './pages/Home'
import Categories from './pages/Categories';
import { Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';

function App() {

  let { currentProfile } = useContext(AppContext)

  return (
    <div className="App">
        {/* <LoadingScreen parent="app" /> */}

      {/* {currentProfile ? <HomeScreen /> : <SignIn />} */}

      <Routes>
        <Route path="/" element={<LoadingScreen />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<h1>you are lost</h1>} />
        <Route/>
      </Routes>
    </div>
  );
}

export default App;
