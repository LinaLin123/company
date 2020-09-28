import React, { useState, useEffect, useCallback } from "react";
import UserKit from "../data/UserKit";
import CustomerDetails from "../components/CustomerDetails";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

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

  const handleOnClick = useCallback(() => history.push("/home"), [history]);

  return (
    <Wrapper>
      <ButtonWrapper>
      <ButtonDelete onClick={handleDeleteCustomer}>Delete</ButtonDelete>
      <Button onClick={handleOnClick}>Back</Button>
      </ButtonWrapper>

      <ContainerWrapper>
        <FormWrapper>
          <h2>Update customer details</h2>
          <label>Id</label>
          <Input
            defaultValue={customerId}
            onChange={(e) => setId(e.target.value)}
            disabled
          />

          <label>Name</label>
          <Input
            defaultValue={customerData.name}
            type="text"
            onChange={(e) => setUpdateName(e.target.value)}
          />

          <label>Organisation Number</label>
          <Input
            defaultValue={customerData.organisationNr}
            onChange={(e) => setUpdateOrganisationNr(e.target.value)}
          />

          <label>VAT number</label>
          <Input
            defaultValue={customerData.vatNr}
            type="text"
            onChange={(e) => setUpdateVatNr(e.target.value)}
          />

          <label>Reference</label>
          <Input
            defaultValue={customerData.reference}
            type="text"
            onChange={(e) => setUpdateReference(e.target.value)}
          />

          <label>Payment Term(days)</label>
          <Input
            defaultValue={customerData.paymentTerm}
            type="number"
            onChange={(e) => setUpdatePaymentTerm(e.target.value)}
          />

          <label>Website</label>
          <Input
            defaultValue={customerData.website}
            type="text"
            onChange={(e) => setUpdateWebsite(e.target.value)}
          />

          <label>Email</label>
          <Input
            defaultValue={customerData.email}
            type="email"
            onChange={(e) => setUpdateEmail(e.target.value)}
          />

          <label>Phone Number</label>
          <Input
            defaultValue={customerData.phoneNumber}
            type="number"
            onChange={(e) => setUpdatePhoneNumber(e.target.value)}
          />

          <Button onClick={UpdateCreateCustomer}>Update</Button>
        </FormWrapper>

        <CustomerDetailsWrapper>
          <h2>Customer Details</h2>
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
        </CustomerDetailsWrapper>
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

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 3em;
  margin: 1em;
  border-radius: 0 50px 0 50px;
`;

const CustomerDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 0 1em 0 1em;
  margin: 1em;
  border-radius: 50px 0 50px 0;
`;

const Input = styled.input`
  padding: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  font-size: 10pt;
`;

const ButtonWrapper = styled(ContainerWrapper)`
  flex-direction:row;
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

const ButtonDelete = styled(Button)`
background-color:red;
color: white; 

:hover {
  background-color: white;
  color: red;
}
`;

