import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Login = () => {
  return (
    <div className="login-page">
      <div className="container">
        <form className="isLogin">
          <div className="logo__img">
            <img src={logo} alt="logo" />
          </div>
          <label htmlFor="email">Email Address*</label> <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            required
          />
          <br />
          <label htmlFor="password">Password*</label>
          <br />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Enter Your password "
            required
          />
          <div className="login__about">
            <p>
              <input type="checkbox" name="checkbox" id="checkbox" />
              Remember Me
            </p>

            <div>
              <Link className="isPassword">Forgot Password?</Link>
            </div>
          </div>
          <div className="submit__btns">
            <button type="submit" className="btnSubmit">
              Login
            </button>
            <button className="signInBtn">
              <Link className="signInBtnLink">Signup?</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
