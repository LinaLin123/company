import React, { useState } from "react";
import UserKit from "../data/UserKit";
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

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
    <Wrapper>
      <h2>Login</h2>
      <LoginWrapper>
      <label>Email</label>
      <Input value={email} type="email" onChange={(e) => setEmail(e.target.value)} />
      <label>Password</label>
      <Input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleLogin}>Login</Button>
      </LoginWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div `
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
`
const LoginWrapper = styled(Wrapper) `
background-color:white;
padding:1em 2em 1em 2em;
border-radius: 20px;
`
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  font-size:12pt;
`;


const Button = styled.button`
  background-color:orange;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  
  :hover {
    background-color: grey;
    color: white;
  }
`;

