import './App.css';
import HomePage from './homepage/homepage';
import Writing from './writing/writing';
import Term from './termpage/term';
import TagPage from './tagpage/tagpage';
import ProjectPage from "./projectspage/projectspage";

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path="/about" element={<HomePage/>}></Route>
        <Route path="/writing" element={<Writing/>}></Route>
        <Route path="/projects" element={<ProjectPage/>}></Route>
        <Route path="/record" element={<HomePage/>}></Route>
        <Route path="/categories/:category" element={<Term/>}></Route>
        <Route path="/tag/:tagname" element={<TagPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
