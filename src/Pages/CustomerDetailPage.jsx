import React, { useState, useEffect } from "react";
import UserKit from "../data/UserKit";
import CustomerDetails from "../components/CustomerDetails";
import { useHistory } from "react-router-dom";

export default function CustomerDetailPage(props) {
  const userKit = new UserKit();
  const [customerData, setCustomerData] = useState({});

  // console.log(props.match.params.id);
  const history = useHistory();
  const customerId = props.match.params.id;

  function getCustomer() {
    console.log(customerId);
    userKit
      .getCustomerDetails(customerId)
      .then((res) => res.json())
      .then((data) => {
        setCustomerData(data);
        console.log(data);
      });
  }

  useEffect(() => {
    getCustomer();
    //eslint-disable-next-line
  }, []);

  function handleDeleteCustomer() {
    if (window.confirm("One last change, are you sure?")) {
      userKit.deleteCustomer(customerId).then((res) => {
        history.push("/home");
      });
    }
  }

  const [setId] = useState();
  const [updateName, setUpdateName] = useState();
  const [updateOrganisationNr, setUpdateOrganisationNr] = useState();
  const [updateVatNr, setUpdateVatNr] = useState();
  const [updateReference, setUpdateReference] = useState();
  const [updatePaymentTerm, setUpdatePaymentTerm] = useState();
  const [updateWebsite, setUpdateWebsite] = useState();
  const [updateEmail, setUpdateEmail] = useState();
  const [updatePhoneNumber, setUpdatePhoneNumber] = useState();

  function UpdateCreateCustomer() {
    userKit
      .UpdateCreateCustomer(
        customerId,
        updateName,
        updateOrganisationNr,
        updateVatNr,
        updateReference,
        updatePaymentTerm,
        updateWebsite,
        updateEmail,
        updatePhoneNumber
      )
      .then(() => {
        userKit
          .getCustomerList()
          .then((res) => res.json())
          .then((data) => setCustomerData(data.results));
        history.push("/home");
      });
  }

  return (
    <div>
      <button onClick={handleDeleteCustomer}>Delete</button>
      <button> Update</button>
      <label>Name</label>
      <input
        defaultValue={customerId}
        onChange={(e) => setId(e.target.value)}
        disabled
      />
      <input
        defaultValue={customerData.name}
        onChange={(e) => setUpdateName(e.target.value)}
      />
      <input
        defaultValue={customerData.organisationNr}
        onChange={(e) => setUpdateOrganisationNr(e.target.value)}
      />
      <input
        defaultValue={customerData.vatNr}
        onChange={(e) => setUpdateVatNr(e.target.value)}
      />
      <input
        defaultValue={customerData.reference}
        onChange={(e) => setUpdateReference(e.target.value)}
      />
      <input
        defaultValue={customerData.paymentTerm}
        onChange={(e) => setUpdatePaymentTerm(e.target.value)}
      />
      <input
        defaultValue={customerData.website}
        onChange={(e) => setUpdateWebsite(e.target.value)}
      />
      <input
        defaultValue={customerData.email}
        onChange={(e) => setUpdateEmail(e.target.value)}
      />
      <input
        defaultValue={customerData.phoneNumber}
        onChange={(e) => setUpdatePhoneNumber(e.target.value)}
      />
      <button onClick={UpdateCreateCustomer}>Update</button>

      <CustomerDetails
        name={customerData.name}
        organisationNr={customerData.organisationNr}
        vatNr={customerData.vatNr}
        reference={customerData.reference}
        paymentTerm={customerData.paymentTerm}
        website={customerData.website}
        email={customerData.email}
        phoneNumber={customerData.phoneNumber}
      />
    </div>
  );
}
