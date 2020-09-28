import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../data/UserKit";
import Login from "../components/Login";

export default function ActivateAccount() {
  const history = useHistory();
  const searchString = history.location.search;
  const urlParameters = new URLSearchParams(searchString);
  const [uid, setUid] = useState(urlParameters.get("uid"));
  const [token, setToken] = useState(urlParameters.get("token"));

  const userKit = new UserKit();
  console.log(uid, token);

  function handleActivateUser() {
    userKit.activateUser(uid, token).then(() => {
      setUid(null)
      setToken(null)
      history.push("/login");
    });
  }

  return (
    <div>
      {uid && token ? (
        <div>
          <h1>Activate Account</h1>
          <button onClick={handleActivateUser}>Activate User</button>
        </div>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </div>
  );
}
