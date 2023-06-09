import './App.css';
import HomePage from './homepage/homepage';
import Writing from './writing/writing';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path="/about" element={<HomePage/>}></Route>
        <Route path="/writing" element={<Writing/>}></Route>
        <Route path="/record" element={<HomePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
