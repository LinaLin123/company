import React, { useContext }  from "react";
import { UserContext } from '../contexts/UserContext'

export default function UpdateCustomer() 
{
  let { user } = useContext(UserContext)

  console.log(user);
console.log(useContext(UserContext));

  return (
    <div>
   <h2>Hej</h2>
  <h3>{user && user.firstName}</h3>
    </div>
  );
}

