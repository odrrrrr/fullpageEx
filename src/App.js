import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainPage />} path="/" />
      </Routes>
    </>
  );
}

export default App;
