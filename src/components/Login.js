import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="signup">
        <form>
          <h3>Register</h3>

          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="btnSignup">
            Register
          </button>
          <p className="forgot-password text-right">
            Already registered <Link to="#">log in?</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
