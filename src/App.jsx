import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);

  const [passward, setPassward] = useState("");
  const [passwardValid, setPasswardValid] = useState(true);

  const [passwardConfirm, setPasswardConfirm] = useState("");
  const [passwardConfirmValid, setPasswardConfirmValid] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailValid(validEmailText(e.target.value));
  };

  const handlePassword = (e) => {
    setPassward(e.target.value);
    setPasswardValid(e.target.value.length >= 8);
  };

  const handleConfirmPassword = (e) => {
    setPasswardConfirm(e.target.value);
    setPasswardConfirmValid(e.target.value === passward);
  };

  const validEmailText = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (emailValid && email && passwardValid && passward && passwardConfirmValid && passwardConfirm) {
      alert("form submmitted successfully");
    } else {
      alert("can't submitted");
    }
  };

  return (
    <form>
      <div>Email :</div>
      <input
        type="text"
        value={email}
        onChange={handleEmail}
        style={{ borderColor: emailValid ? "green" : "red" }}
      ></input>
      {!emailValid && <p className="errorMessage">Invalid Email format</p>}

      <div>Password :</div>
      <input
        type="password"
        value={passward}
        onChange={handlePassword}
        style={{ borderColor: passwardValid ? "green" : "red" }}
      ></input>
      {!passwardValid && (
        <p className="errorMessage">Password must be at least 8 characters</p>
      )}

      <div>Confirm Password :</div>
      <input
        type="password"
        value={passwardConfirm}
        onChange={handleConfirmPassword}
        style={{ borderColor: passwardConfirmValid ? "green" : "red" }}
      ></input>
      {!passwardConfirmValid && (
        <p className="errorMessage">Password do not match</p>
      )}

      <button onClick={handleSubmit}>Sign Up</button>
    </form>
  );
}

export default App;
