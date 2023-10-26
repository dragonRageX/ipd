import React from 'react'
import { NavLink } from 'react-router-dom';
import '../style.css'; // or import './styles.scss';

const Header = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" style={({isActive}) => isActive ? activeStyles : null}>Home</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/register" style={({isActive}) => isActive ? activeStyles : null}>Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login" style={({isActive}) => isActive ? activeStyles : null}>Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link disabled" aria-disabled="true" to="/features" style={({isActive}) => isActive ? activeStyles : null}>Features</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;
