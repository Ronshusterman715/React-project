import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import CardsItem from "./components/cards/CardsItem";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<CardsItem />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
