import React, { useState, useContext } from "react";
import UserKit from "../data/UserKit";
import { CustomerListContext } from "../contexts/CustomerListContext";
import styled from "styled-components";

export default function CreateCustomerForm() {
  const userKit = new UserKit();
  const { setCustomerList } = useContext(CustomerListContext);

  const [name, setName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [reference, setReference] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function createCustomer() {
    userKit
      .createCustomer(
        name,
        organisationNr,
        vatNr,
        reference,
        paymentTerm,
        website,
        email,
        phoneNumber
      )
      .then(() => {
        userKit
          .getCustomerList()
          .then((res) => res.json())
          .then((data) => setCustomerList(data.results));
        setError(null);
      });
    setName("");
    setEmail("");
    setOrganisationNr("");
    setVatNr("");
    setReference("");
    setPaymentTerm("");
    setWebsite("");
    setPhoneNumber("");
  }

  const [error, setError] = useState(null);

  function handleChange(event) {
    const value = event.target.value;
    let numbers = /^[0-9]+$/;
    let length = value.length <= 12;
    if (value.match(numbers && length && "SE")) setError(null);
    else setError("You must start with SE and with 10 numbers");
    setVatNr(event.target.value);
  }

  return (
    <Wrapper>
      <Heading>Register new customer</Heading>
      <FormWrapper>
        <label>Name</label>
        <Input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Organisation Number</label>
        <Input
          value={organisationNr}
          type="number"
          onChange={(e) => setOrganisationNr(e.target.value)}
        />
        <label>VAT number</label>
        <Input value={vatNr} name="vatNr" type="text" onChange={handleChange} />
        <Paragraf>{error}</Paragraf>

        <label>Reference</label>
        <Input
          value={reference}
          onChange={(e) => setReference(e.target.value)}
        />
        <label>Payment Term(days)</label>
        <Input
          value={paymentTerm}
          type="number"
          onChange={(e) => setPaymentTerm(e.target.value)}
        />
        <label>Website</label>
        <Input
          value={website}
          type="text"
          onChange={(e) => setWebsite(e.target.value)}
        />

        <label>Email</label>
        <Input
          value={email}
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Phone Number</label>
        <Input
          value={phoneNumber}
          type="number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Button onClick={createCustomer}>Register</Button>
      </FormWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;
const Heading = styled.h2`
  margin: 0.5em 0 0.5em 0;
  font-size: 20px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  padding: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  font-size: 12pt;
`;

const Button = styled.button`
  background-color: orange;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: grey;
    color: white;
  }
`;

const Paragraf = styled.p`
color: red;
font-size: 10px;
`