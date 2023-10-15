import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FakeAuthService } from '../utils/fake-auth-service';

export const Navbar = () => {
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('is_logged_in') === 'true'
  );
  useEffect(() => {
    FakeAuthService.isLoggedIn().then((result) => {
      console.log(result);
      setLoggedIn(result);
    });
  }, []);

  function getNavbarItemClass(routeName) {
    return `navbar-item ${location.pathname === routeName && `selected`}`;
  }

  return (
    <div className="navbar">
      <Link to="/" className={getNavbarItemClass('/')}>
        Home
      </Link>
      <Link to="/dashboard" className={getNavbarItemClass('/dashboard')}>
        Dashboard
      </Link>
      <Link to="/registration" className={getNavbarItemClass('/registration')}>
        Registration
      </Link>

      <div className="navbar-item">
        <span>Logged In</span>
        <input
          type="checkbox"
          checked={loggedIn}
          onChange={(e) => {
            e.target.checked
              ? FakeAuthService.logIn()
              : FakeAuthService.logOut();
            setLoggedIn(e.target.checked);
          }}
        />
      </div>
    </div>
  );
};
