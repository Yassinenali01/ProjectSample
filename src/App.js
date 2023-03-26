import {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SearchPopUp from './components/SearchPopUp';
import Home  from './components/Home';
import Menu from './components/Menu';

function App() {
  const [page, setPage] = useState('home');
  return (
    <div >
    
      
      <NavBar setPage={setPage} /> {/* pass setPage function as a prop to NavBar */}
        {page === 'home' && <Home />} {/* render Home component only if page state is 'home' */}
        {page === 'menu' && <Menu />} {/* render Menu component only if page state is 'menu' */}
    </div>
  );
}  

export default App