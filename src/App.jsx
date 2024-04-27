import "./App.css";

import { Routes, Route } from "react-router-dom";

import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import Navbar from "./components/Header/Navbar";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "../src/components/footer/Footer";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
