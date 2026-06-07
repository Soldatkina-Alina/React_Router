import { Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import withAuth from "./hoc/withAuth";
import Registr from "./pages/Registr";
import HomePage from "./pages/HomePage";

const ProtectedHomePage = withAuth(HomePage);

function App() {

  return (
    <>
    <nav style={{ display: 'flex', gap: '20px', padding: '15px', backgroundColor: '#f0f0f0' , justifyContent: 'center'}}>
      <Link to="/" style={{ textDecoration: 'none', color: '#333', fontSize: '18px' }}>
        Главная
      </Link>
      <Link to="/login" style={{ textDecoration: 'none', color: '#333', fontSize: '18px' }}>
        Вход
      </Link>
      <Link to="/registr" style={{ textDecoration: 'none', color: '#333', fontSize: '18px' }}>
        Регистрация
      </Link>
    </nav>
      <Routes>
        <Route path="/" element={<ProtectedHomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registr" element={<Registr />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App;


