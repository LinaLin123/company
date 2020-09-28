import React, { useContext } from "react";
import CustomerList from "../components/CustomerList";
import User from "../components/User";
import { UserContext } from "../contexts/UserContext";

export default function CustomersPage() {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div>
      <h1>Welcome{user.firstName}</h1>
      <div>
        <User />
      </div>
      <CustomerList />
    </div>
  );
}
