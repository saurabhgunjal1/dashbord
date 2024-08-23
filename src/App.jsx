import { createContext, useState, useEffect } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import "./App.css";
import Login from "./components/login/login";
import Button from "./components/button/button";
import Dashbord from "./components/dashbord/dashbord";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashbord />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
