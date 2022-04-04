import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import PostList from './components/PostList';
import Profile from './components/Profile';
import data from './data/data.json';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <SearchBar />
//       <div className="container">
//         <PostList />
//       </div>
//     </div>
//   );
// }
const App = () => {
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const [section, setSection] = useState('home');

  const onLogoClick = () => setSection('home');
  const onProfileClick = () => setSection('profile');

  useEffect(() => {
    if (search === '') setPosts([...data]);
    else setPosts([
      ...data
        .filter(post => post.user
          .toLowerCase()
          .includes(search.toLowerCase())
        )]
    );
  }, [search]);

  return (
    <main>
      <div className="App">
        <Navbar onLogoClick={onLogoClick} onProfileClick={onProfileClick}/>
        {section === 'home' && (
        <>
          <div className="container">
            <SearchBar value={search} onSearch={setSearch} />
            <PostList posts={posts} />
          </div>
        </>
      )}

      {section === 'profile' &&
        <Profile
          logo="./img/avatar.png"
          username="@César"
          biography="Hola, esta es mi biografía. Bienvenido a mi perfil."
      />}
      </div>
    </main>
  );
}

export default App;
