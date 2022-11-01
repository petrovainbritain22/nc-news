import "./App.css";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import ArticleList from "./components/Main/ArticleList";
import SingleArticle from "./components/Main/SingleArticle";
import CommentList from "./components/Main/CommentList";
import UserList from "./components/Main/UserList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/topics/:slug" element={<ArticleList />} />
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
            <Route
              path="/articles/:article_id/comments"
              element={<CommentList />}
            />
            <Route path="/users" element={<UserList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
