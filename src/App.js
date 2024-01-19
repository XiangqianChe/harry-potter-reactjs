import { Routes, Route } from 'react-router-dom';
import './App.css';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<CharacterList />} />
        <Route path='/characters/:id' element={<CharacterDetail />} />
      </Routes>
    </div>
  );
}

export default App;
