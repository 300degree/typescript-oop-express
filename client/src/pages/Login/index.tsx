import { useNavigate } from "react-router-dom";
import React from "react";

import "./style.sass";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <form>
        <div className="col ch">
          <div>

            <div className="row input">
              <input placeholder="Email" name="email" />
              <div />
            </div>

            <div className="row input">
              <input placeholder="Password" name="password" />
              <div />
            </div>
          </div>
          <button type="submit">Login</button>
          <a href="#/ms/password-reset" className="accent">
            Forgot password?
          </a>

          <div className="mt-l">
            <p>Don't have an account?</p>
            <p
              onClick={() => navigate("?auth=sign")}

            >
              Sign Up for free
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
