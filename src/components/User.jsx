import React, { useContext, useEffect } from "react";
import UserKit from "../data/UserKit";
import { UserContext } from "../contexts/UserContext";
import styled from 'styled-components'

export default function User() {
  const userKit = new UserKit();
  let { user, setUser } = useContext(UserContext);

  function getLoginUser() {
    userKit
      .getUser()
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      });
  }

  useEffect(() => {
    getLoginUser();
    //eslint-disable-next-line
  }, []);

  console.log(user);
  console.log(setUser);

  return (
    <div>
      <Paragraf>
        Login as {user && user.firstName} {user && user.lastName}
      </Paragraf>
      <Paragraf>Email:{user && user.email}</Paragraf>
    </div>
  );
}

const Paragraf = styled.p `
margin:0.5em 0 0.5em 0;
font-size:15px;
`
