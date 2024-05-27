// This is auth page
import { useState } from "react";
import "../../style.css";

// `onSignIn` which is a function that presumably gets called when the user signs in successfully
// Inside `Auth` component, it initializes two state variables using the `useState` hook
// (1) `username` and `password` 
//     -> These variables are used to store the valued entered by the user into the username and password
export const Auth = ({onSignIn}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  
  
// Function `handleSign` to handle the sign-in process
// Then we use localStorage to store username & password
// `onSignIn` function is called to signal that the sign-in process has been initialed and completed successfully
  const handleSign = () => {
    localStorage.setItem('username', username)
    localStorage.setItem('password', password)
    
    if(username && password) {
      onSignIn()
    } else {
      alert ("Please sign in with username and password");
    }
  }



// What will return
// Noted: onChange Attribute -> The onchange attribute fires the moment when the value of the element is changed.
// Both state of `username` and `password` will change when the value of the element is changed 

  return (
    <div className="login-page">
     <form className="first-form">
      <p className="login">USERNAME</p>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        type="text"
        placeholder="Type your username"
        autocomplete="off" 
        className="btn-username"
      />
       <p className="login">PASSWORD</p>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Type your password"
        autocomplete="off" 
        className="btn-password"
      />

      <button 
        onClick={handleSign}
        type="submit"
        className="btn-login"
      >LOG IN</button>
      </form>
    </div>
  );
};

// When button `Sign in` is clicked, it triggers the `handleSign` function