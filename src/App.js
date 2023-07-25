import { useContext, useEffect } from 'react';
import { AppContext } from './contexts/app_context';
import './App.css';
import SignIn from './pages/SignIn';
import Home from './pages/Home'
// import CategoriesList from './pages/CategoriesList';
import CategoriesList from './pages/CategoriesList';
import { Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Search from './pages/Search';
import Category from './pages/Category';
import Cast from './pages/Cast';
import New from './pages/New';
import Downloads from './pages/Downloads';
import EditSignIn from './pages/EditSignIn';
import MyList from './pages/MyList';
import ShowDetails from './pages/ShowDetails';

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
        <Route path="/cast" element={<Cast />} />
        <Route path="/search" element={<Search />} />
        <Route path="/new" element={<New />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/signin/edit" element={<EditSignIn />} />
        <Route path="categories/mylist" element={<MyList />} />
        <Route path="/details" element={<ShowDetails />} />

        { allGenres.map((genre, index) => {
          return (
            <Route path={`/categories/${genre.toLowerCase().replaceAll(' ', '')}`} element={<Category genre={genre}/>} key={index}/>
          )
        })}
        <Route path="*" element={<h1>you are lost</h1>} />
        <Route/>
      </Routes>
    </div>
  );
}

export default App;
