// import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleList from "./components/ArticleList";
import TopicList from "./components/TopicList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <TopicList />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/api/articles" element={<ArticleList />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
