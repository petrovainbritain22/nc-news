// import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useEffect, useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleList from "./components/ArticleList";

function App() {
  const [topic, setTopic] = useState(undefined);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("DESC");

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <ArticleList sortBy={sortBy} order={order} topic={topic} />
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
