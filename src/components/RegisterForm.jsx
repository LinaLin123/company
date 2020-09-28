import React, { useState } from "react";
import UserKit from "../data/UserKit";
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

export default function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [organisationKind, setorganisationKind] = useState("0");
  const userKit = new UserKit();
  const history = useHistory()

  function handleRegister() {
    userKit.register(
      firstName,
      lastName,
      email,
      password,
      organisationName,
      organisationKind
    )
    .then(
      history.push('/check')
    )
  }

  return (
    <Wrapper>
      <h2>Register</h2>
      <Paragraf>Enter details to register</Paragraf>

      <FormWrapper>
        <label>First Name</label>
        <Input
          value={firstName}
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name</label>
        <Input value={lastName} type="text" onChange={(e) => setLastName(e.target.value)} />
        <label>Email</label>
        <Input value={email} type="email" onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <Input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
        <label>Company</label>
        <Input
          value={organisationName}
          type="text"
          onChange={(e) => setOrganisationName(e.target.value)}
        />
        <label>Company kind</label>
        <Input
          value={organisationKind}
          disabled
          onChange={(e) => setorganisationKind(e.target.value)}
        />
        <Button onClick={handleRegister}>Register</Button>
      </FormWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div `
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
`
const FormWrapper = styled.form `
display: flex;
flex-direction: column;
background-color:white;
padding:1em 2em 1em 2em;
border-radius: 20px;
box-shadow: 11px 10px 20px -2px rgba(133,131,133,0.46);

`
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  font-size:10pt;
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
    background-color: #e3e3e3;
  }
`;

const Paragraf = styled.p`
font-weight: bold;
`;