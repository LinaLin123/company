import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

export default function ClientPage() {
  const { user } = useContext(UserContext);


  return (
    <div>
      <div>
        <h2>Hej</h2>
        <h3>{user.firstName}</h3>
      </div>
    </div>
  );
}
