import React, { useState, useContext } from "react";
import UserKit from "../data/UserKit";
import { CustomerListContext } from "../contexts/CustomerListContext";

export default function CreateCustomerForm() {
  const userKit = new UserKit();
  const { setCustomerList } = useContext(CustomerListContext);

  const [name, setName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [reference, setReference] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("2"); // ska vara nr
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
    <div>
      <h2>Register new customer</h2>
      <form>
        <label>Name</label>
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Organisation Number</label>
        <input
          value={organisationNr}
          type="number"
          onChange={(e) => setOrganisationNr(e.target.value)}
        />
        <label>VAT number</label>
        <input
          value={vatNr}
          name="vatNr"
          type="text"
          onChange={handleChange}
        />
        {error}

        <label>Reference</label>
        <input
          value={reference}
          onChange={(e) => setReference(e.target.value)}
        />
        <label>Payment Term</label>
        <input
          value={paymentTerm}
          type="number"
          onChange={(e) => setPaymentTerm(e.target.value)}
        />
        <label>Website</label>
        <input
          value={website}
          type="text"
          onChange={(e) => setWebsite(e.target.value)}
        />

        <label>Email</label>
        <input
          value={email}
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Phone Number</label>
        <input
          value={phoneNumber}
          type="number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button onClick={createCustomer}>Register</button>
      </form>
    </div>
  );
}
