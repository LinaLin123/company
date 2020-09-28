import React from "react";

export default function CustomerDetails({
  name,
  organisationNr,
  vatNr,
  reference,
  paymentTerm,
  website,
  email,
  phoneNumber,
}) 
{


  return (
    <div>
      <p>Name: {name}</p>
      <p>OrganisationsNr: {organisationNr}</p>
      <p>VatNr: {vatNr}</p>
      <p>Reference: {reference}</p>
      <p>Payment Term: {paymentTerm}</p>
      <p>Website: {website}</p>
      <p>Email: {email}</p>
      <p>Phone number: {phoneNumber}</p>
    </div>
  );
}
