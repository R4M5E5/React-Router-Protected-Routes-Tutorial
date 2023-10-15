import { HomePage } from './components/pages/home';
import { DashboardPage } from './components/pages/dashboard';
import { RegistrationPage } from './components/pages/registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar';
import { Protected } from './components/protected';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route
              path="/dashboard"
              element={
                <Protected>
                  <DashboardPage />
                </Protected>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
