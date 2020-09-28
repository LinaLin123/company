import React, { useContext, useEffect } from "react";
import UserKit from "../data/UserKit";
import CreateCustomerForm from "./CreateCustomerForm";
import { CustomerListContext } from "../contexts/CustomerListContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
    <Wrapper>
      <ContainerWrapper>
        <CustomerWrapper>
          <Heading>Customers</Heading>
          <Ul>
            {customerList1 &&
              customerList1.map((customer) => {
                return (
                  <Li key={customer.id}>
                    <Link to={`customer/${customer.id}`}>{customer.name}</Link>
                  </Li>
                );
              })}
          </Ul>
        </CustomerWrapper>

        <CustomerFormWrapper>
          <CreateCustomerForm />
        </CustomerFormWrapper>
      </ContainerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;
const ContainerWrapper = styled(Wrapper)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  padding-right: 10em;
  padding-top: 2em;
  padding-bottom: 3em;
`;

const CustomerWrapper = styled(Wrapper)`
  background-color: white;
  padding: 0 1em 0 1em;
  border-radius: 50px 0 50px 0;
`;

const CustomerFormWrapper = styled(CustomerWrapper)`
  margin-left: 2em;
  border-radius: 20px;
`;

const Heading = styled.h2`
  margin: 0.5em 0 0.5em 0;
  font-size: 20px;
`;
const Ul = styled.ul`
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  border: solid 1px pink;
  border-left: 5px solid pink;
  margin: 10px 0;

  a {
    display: block;
    color: #333;
    text-decoration: none;
  }

  a:hover {
    background: #e3e3e3;
    color: orange;
    text-decoration: none;
  }
`;
