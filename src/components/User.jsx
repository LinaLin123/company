import React, { useContext, useEffect } from 'react'
import UserKit from '../data/UserKit'
import { UserContext } from '../contexts/UserContext'
import Test from '../components/Test'

export default function User() {
const userKit = new UserKit()
let {user,setUser} = useContext(UserContext)

function getLoginUser() {
    userKit
      .getUser()
      .then((res) => res.json())
      .then((data) => 
        {setUser(data)
         console.log(data)});
  }


  useEffect(() => {
    getLoginUser();
    //eslint-disable-next-line
  }, []);

  console.log(user);
  console.log(setUser);
  
    return (
        <div>
    <h2>Välkommen {user && user.firstName} {user && user.lastName}</h2>
    <h2>Email:{user && user.email}</h2>
<Test />
        </div>
    )
}
