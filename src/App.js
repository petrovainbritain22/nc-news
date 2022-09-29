// import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SingleArticle from "./components/SingleArticle";
import ArticleList from "./components/ArticleList";
import CommentList from "./components/CommentList";

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
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
