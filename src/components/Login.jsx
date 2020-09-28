import React, { useState } from "react";
import UserKit from "../data/UserKit";
import { useHistory } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState("jlina.lin+test+1@gmail.com");
  const [password, setPassword] = useState("kompis123");
  const userKit = new UserKit();
  const history = useHistory();

  function handleLogin() {
      userKit.login(email, password)
      .then(res=> res.json())
      .then(data=> {
          userKit.setToken(data.token);
          history.push('/home')
      })

  }

  return (
    <div>
      <h2>Login</h2>
      <label>Email</label>
      <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} />
      <label>Password</label>
      <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
