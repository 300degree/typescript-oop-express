import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";

import Navbar from "./components/navbar";

function App() {
  const navigate = useNavigate();

  return (
    // <div className="App">
    //   <Navbar />
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      <form method="post" action="/api/auth/register">
        <div>
          <div className="row input">
            <input placeholder="Username" name="username" />
            <div />
          </div>

          <div className="row input">
            <input placeholder="Email" name="email" />
            <div />
          </div>

          <div className="row input">
            <input placeholder="Password" name="password" />
            <div />
          </div>

          <button type="submit" name="submit">
            Sign Up
          </button>
        </div>

        <div>
          <p>Already have an account?</p>
          <p onClick={() => navigate("/api/auth/signup")}>Log In</p>
        </div>
      </form>
    </div>
  );
}

export default App;
