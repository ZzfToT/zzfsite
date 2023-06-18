import "./App.css";
import HomePage from "./homepage/homepage";
import Writing from "./writing/writing";
import Term from "./termpage/term";
import TagPage from "./tagpage/tagpage";
import ProjectPage from "./projectspage/projectspage";
import ArticlePage from "./article_page/article_page";
import { Route, Routes } from "react-router-dom";
import Nav from "./nav/nav";
import ServerError from "./common/server_error";
import { Component, useEffect, useState } from "react";
import NotFound from "./common/not_found";

function App() {
  const [tagsandcates, setTagsAndCates] = useState({"categoryDict":{}, "tags":[]});

  useEffect(() => {
    fetch("http://175.178.214.71:8000/zzfsite/tagsandcates/")
      .then((response) => response.json())
      .then((js) => setTagsAndCates(js))
      .catch((error) => console.log(error));
  }, []);

  return (
    tagsandcates.status_code === 500?
    <NotFound/>:
    <div className="App container">
      <div className="layout">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<HomePage />}></Route>
          <Route path="/writing" element={<Writing tags={tagsandcates.tags} categoryDict={tagsandcates.categoryDict} />}></Route>
          <Route path="/projects" element={<ProjectPage />}></Route>
          <Route path="/record" element={<HomePage />}></Route>
          <Route path="/categories/:category" element={<Term tags={tagsandcates.tags} categoryDict={tagsandcates.categoryDict} />}></Route>
          <Route path="/tag/:tagname" element={<TagPage tags={tagsandcates.tags} categoryDict={tagsandcates.categoryDict} />}></Route>
          <Route path="post/:title" element={<ArticlePage />}></Route>
          <Route path="/500" element={<ServerError />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
