import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import NewsBox from "./components/NewsBox/NewsBox";
import { HashRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [mode, setMode] = useState("light");
  const [progress, setProgress] = useState(0);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#282828";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <HashRouter>
      <div>
        <LoadingBar color="#f11946" height={3} progress={progress} />
        <NavBar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route
            path="/"
            element={
              <NewsBox
                mode={mode}
                toggleMode={toggleMode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            path="/business"
            element={
              <NewsBox
                mode={mode}
                toggleMode={toggleMode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <NewsBox
                mode={mode}
                toggleMode={toggleMode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            path="/general"
            element={
              <NewsBox
                mode={mode}
                toggleMode={toggleMode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            path="/health"
            element={
              <NewsBox
                mode={mode}
                toggleMode={toggleMode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          ></Route>
          <Route
            path="/science"
            element={
              <NewsBox
                mode={mode}
                toggleMode={toggleMode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <NewsBox
                mode={mode}
                toggleMode={toggleMode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          ></Route>
          <Route
            path="/technology"
            element={
              <NewsBox
                mode={mode}
                toggleMode={toggleMode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </div>
    </HashRouter>
  );
};
export default App;
