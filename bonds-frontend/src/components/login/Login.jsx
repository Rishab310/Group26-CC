import './Login.css';
import profile from "./image/a.png";
import email from "./image/email.jpg";
import pass from "./image/pass.png";

function Login() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             <img src={email} alt="email" className="email"/>
             <input id='input' type="text" placeholder="User Name" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input id='input' type="password" placeholder="Password" className="name"/>
           </div>
          <div className="login-button">
          <button id='button'>Login</button>
          </div>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default Login;