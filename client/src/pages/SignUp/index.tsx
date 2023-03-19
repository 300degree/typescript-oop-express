import { useNavigate } from "react-router-dom";
import React from "react";

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <form method="post">
        
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
          </div>

          <div>
            <p>Already have an account?</p>
            <p onClick={() => navigate("?auth=login")}>Log In</p>
          </div>

      </form>
    </div>
  );
};

export default SignUpPage;
