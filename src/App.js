import './App.css';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <div className="container">
        <PostList />
      </div>
    </div>
  );
}

export default App;
