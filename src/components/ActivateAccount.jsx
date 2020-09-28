import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../data/UserKit";
import Login from "../components/Login";
import styled from 'styled-components'

export default function ActivateAccount() {
  const history = useHistory();
  const searchString = history.location.search;
  const urlParameters = new URLSearchParams(searchString);
  const [uid, setUid] = useState(urlParameters.get("uid"));
  const [token, setToken] = useState(urlParameters.get("token"));

  const userKit = new UserKit();
  console.log(uid, token);

  function handleActivateUser() {
    userKit.activateUser(uid, token).then(() => {
      setUid(null)
      setToken(null)
      history.push("/login");
    });
  }

  return (
    <Wrapper>
      {uid && token ? (
        <div>
          <h1>Activate Account</h1>
          <ButtonWrapper><Button onClick={handleActivateUser}>Activate User</Button></ButtonWrapper>
        </div>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const ButtonWrapper = styled(Wrapper)`
align-items:center;
`

const Button = styled.button`
  background-color:orange;
  font-size: 1em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color:white;
  
  :hover {
    background-color: grey;
    color: white;
  }
`;