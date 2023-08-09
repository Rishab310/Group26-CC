import "./Login.css";
import profile from "./image/a.png";
import email from "./image/email.jpg";
import pass from "./image/pass.png";
import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onLoginClick = () => {
    axios.post("http://localhost:5000/auth/signin", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("userToken",res.data.token);
        localStorage.setItem("userEmail",res.data.userEmail);
        localStorage.setItem("userId",res.data.userId);
        if(res.data.isAdmin){
          navigate('/adminDashboard')
        }
        else{
          navigate('/managerDashboard')
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src={email} alt="email" className="email" />
              <input
                id="input"
                type="text"
                placeholder="User Name"
                className="name"
                onChange={onEmailChange}
                value={email}
              />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input
                id="input"
                type="password"
                placeholder="Password"
                className="name"
                onChange={onPasswordChange}
                value={password}
              />
            </div>
            <div className="login-button">
              <button id="button" onClick={onLoginClick}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
