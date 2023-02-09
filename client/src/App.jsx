import React, { useState } from "react";
import TestingArea from "./components/TestingArea";
import UserAuthentication from "./components/UserAuthentication/UserAuthentication";
import "./App.css";

function App() {
  const [logInToken, setLogInToken] = useState("");


  const submitLogInHandler = (logInData, token) => {
    setLogInToken(token);
    console.log("user logged in with token:", token);
    console.log(logInData);

    const signUpModalInst = document.getElementById("signUpModal");
    const myModal = bootstrap.Modal.getOrCreateInstance(signUpModalInst);
    myModal.hide();
  }

  const handleLogOut = () => {
    setLogInToken("");
    console.log("user logged out");

    const signUpModalInst = document.getElementById("signUpModal");
    const myModal = bootstrap.Modal.getOrCreateInstance(signUpModalInst);
    myModal.hide();
  };


  return (
    <div>
      <UserAuthentication
        submitHandler = {submitLogInHandler}
        logInToken={logInToken}
        handleLogOut={handleLogOut}
      />
      <TestingArea
        logInToken={logInToken}
      />
    </div>
  );
}

export default App;
