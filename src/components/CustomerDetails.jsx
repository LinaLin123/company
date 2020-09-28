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
      <h5>{name}</h5>
      <p>{organisationNr}</p>
      <p>{vatNr}</p>
      <p>{reference}</p>
      <p>{paymentTerm}</p>
      <p>{website}</p>
      <p>{email}</p>
      <p>{phoneNumber}</p>
      <h1>Hej2</h1>
    </div>
  );
}
