import React, { useContext, useEffect } from "react";
import UserKit from "../data/UserKit";
import CreateCustomerForm from "./CreateCustomerForm";
import { CustomerListContext } from "../contexts/CustomerListContext";
import { Link } from "react-router-dom";

export default function CustomerList() {
  // const [customerList, setCustomerList] = useState ([])
  const userKit = new UserKit();
  const { customerList1, setCustomerList } = useContext(CustomerListContext);

  function getCustomerList() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCustomerList(data.results);
      });
  }

  useEffect(() => {
    getCustomerList();
    //eslint-disable-next-line
  }, []);

  console.log(customerList1);
  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customerList1 &&
          customerList1.map((customer) => {
            return (
              <li key={customer.id}>
                <Link to={`customer/${customer.id}`}>{customer.name}</Link>
              </li>
            );
          })}
      </ul>
      
      <div>
        <CreateCustomerForm />
      </div>
    </div>
  );
}
