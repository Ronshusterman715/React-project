import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Cards from "./components/Cards";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Cardform from "./components/Cardform";
import Businessinfo from "./components/Businessinfo";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import Mycards from "./components/Mycards";
import Favoritecards from "./components/Favoritecards";
import About from "./components/About";
import NotFound from "./components/NotFound";
import { useJwtDecoder } from "./hooks/useJwtDecoder";

function App() {
  const [jwtToken, setJwtToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  useJwtDecoder(jwtToken);

  useEffect(() => {}, [jwtToken]);
  const loginEvent = () => {
    setJwtToken(localStorage.getItem("token"));
  };

  const logoutEvent = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setJwtToken(null);
    window.location.href = "/login";
  };

  return (
    <>
      <ToastContainer />

      <Router>
        <ThemeProvider>
          <Navbar logoutEvent={logoutEvent} />
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/cards" element={<Cards />} />
            <Route
              path="/register"
              element={<RegisterForm isCreateMode={true} />}
            />
            <Route
              path="/users/:id/edit"
              element={<RegisterForm isCreateMode={false} />}
            />
            <Route
              path="/login"
              element={<LoginForm loginEvent={loginEvent} />}
            />
            <Route
              path="/cards/create"
              element={<Cardform isCreateMode={true} />}
            />
            <Route
              path="/cards/:id/edit"
              element={<Cardform isCreateMode={false} />}
            />
            <Route path="/businessinfo/:id/" element={<Businessinfo />} />
            <Route path="/mycards" element={<Mycards />} />
            <Route path="/favcards" element={<Favoritecards />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
