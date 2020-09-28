import React, { useState } from "react";
import UserKit from "../data/UserKit";
import styled from "styled-components";

export default function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [organisationKind, setorganisationKind] = useState("0");
  const userKit = new UserKit();

  function handleRegister() {
    userKit.register(
      firstName,
      lastName,
      email,
      password,
      organisationName,
      organisationKind
    );
  }

  return (
    <Wrapper>
      <Heading>Register</Heading>
      <p>Enter details to register</p>
      <FormWrapper>
        <label>First Name</label>
        <Input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name</label>
        <Input value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <label>Email</label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <Input value={password} onChange={(e) => setPassword(e.target.value)} />
        <label>Company</label>
        <Input
          value={organisationName}
          onChange={(e) => setOrganisationName(e.target.value)}
        />
        <label>Company kind</label>
        <Input
          value={organisationKind}
          onChange={(e) => setorganisationKind(e.target.value)}
        />
        <Button onClick={handleRegister}>Register</Button>
      </FormWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;

const Heading = styled.h1`
color: white;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  background-color:white;
  padding:1em 2em 1em 2em;
  border-radius: 20px;

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

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
