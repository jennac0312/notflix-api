import { useContext, useEffect } from 'react';
import { AppContext } from './contexts/app_context';
import './App.css';
import SignIn from './components/SignIn';
import Home from './pages/Home'
// import CategoriesList from './pages/CategoriesList';
import CategoriesList from './pages/CategoriesList';
import { Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Search from './pages/Search';
import Category from './pages/Category';

function App() {

  let { currentProfile, allGenres } = useContext(AppContext)

  return (
    <div className="App">
        {/* <LoadingScreen parent="app" /> */}

      {/* {currentProfile ? <HomeScreen /> : <SignIn />} */}

      <Routes>
        <Route path="/" element={<LoadingScreen />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/categories" element={<CategoriesList />} />
        <Route path="/search" element={<Search />} />

        { allGenres.map((genre) => {
          return (
            <Route path={`/categories/${genre.toLowerCase().replaceAll(' ', '')}`} element={<Category genre={genre}/>}/>
          )
        })}
        <Route path="*" element={<h1>you are lost</h1>} />
        <Route/>
      </Routes>
    </div>
  );
}

export default App;
