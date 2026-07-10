import { useState } from "react";
import "./Auth.css";

function Auth({ setIsLoggedIn }) {
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  
  
const handleAuth = async () => {

  const url = isSignup
    ? "http://localhost:8080/api/signup"
    : "http://localhost:8080/api/login";

  try {

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await response.json();

    console.log(data);

    
    if (!response.ok) {

      alert(data.error);

      return;
    }

    // LOGIN
    if (!isSignup) {

      localStorage.setItem("token", data.token);
      console.log(data.token);

      setIsLoggedIn(true);

    }

    // SIGNUP
    else {

      alert("Signup successful. Please login.");

      setIsSignup(false);

    }

  } catch (err) {

    console.log(err);

    alert("Something went wrong");

  }
};
return (
  <div className="authContainer">
    <div className="authBox">

      <div className="projectName">IntelliGuide AI 🚀</div>

      <h2>{isSignup ? "Signup" : "Login"}</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleAuth}>
        {isSignup ? "Signup" : "Login"}
      </button>

      <p className="switchText" onClick={() => setIsSignup(!isSignup)}>
        {isSignup
          ? "Already have an account? Login"
          : "New user? Signup"}
      </p>

    </div>
  </div>
);
}

export default Auth;