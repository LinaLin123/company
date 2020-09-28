import React, { useContext } from "react";
import CustomerList from "../components/CustomerList";
import User from "../components/User";
import { UserContext } from "../contexts/UserContext";
import styled from 'styled-components'

export default function CustomersPage() {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <Wrapper>
      <UserContainer>
      <Heading>Welcome {user.firstName}</Heading>
     
      <UserWrapper>
        <User />
      </UserWrapper>
      
      </UserContainer>


      <CustomerList />
    </Wrapper>
  );
}

const Wrapper = styled.div `
display: flex;
flex-direction: column;
`
const Heading = styled.h2 `
margin:0.5em 0 0.5em 0;
font-size:30px;
padding-right:1em;
`
const UserContainer = styled.div`
display:flex;
flex-direction: column;
align-items: flex-end;
`

const UserWrapper = styled(Wrapper) `
background-color:white;
border-radius: 20px 0 0 20px;
padding-left:2em;
padding-right:1em;
`
