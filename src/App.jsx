import './App.css';
import HomePage from './homepage/homepage';
import Writing from './writing/writing';
import Term from './termpage/term';
import TagPage from './tagpage/tagpage';
import ProjectPage from "./projectspage/projectspage";
import ArticlePage from './article_page/article_page';
import { Route, Routes } from 'react-router-dom';
import Nav from './nav/nav';
import ServerError from './common/server_error';

function App() {
  return (
    <div className="App container">
      <div className="layout">
        <Nav />
        
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<HomePage />}></Route>
          <Route path="/writing" element={<Writing />}></Route>
          <Route path="/projects" element={<ProjectPage />}></Route>
          <Route path="/record" element={<HomePage />}></Route>
          <Route path="/categories/:category" element={<Term />}></Route>
          <Route path="/tag/:tagname" element={<TagPage />}></Route>
          <Route path="post/:title" element={<ArticlePage />}></Route>
          <Route path="/500" element={<ServerError/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
