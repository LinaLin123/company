import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

export default function Test() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <div>
        <h2>Kompis</h2>
        <h3>{user.firstName}</h3>
      </div>
    </div>
  );
}
