import React from "react";

export default function NavLogin() {
  return (
    <>
      <li className="nav-item dropdown main-nav-7">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="hover"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Signup
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">
            Register
          </a>
          <a className="dropdown-item" href="/login">
            Login
          </a>
        </div>
      </li>
    </>
  );
}
