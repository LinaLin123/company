import React, { useState } from "react"
import { Switch, Route } from "react-router-dom"
import RegisterPage from "./Pages/RegisterPage"
import ActivateAccountPage from "./Pages/ActivateAccountPage"
import CustomerPage from "./Pages/CustomerPage"
import CustomerDetailPage from "./Pages/CustomerDetailPage"
import { CustomerListContext } from "./contexts/CustomerListContext"
import { UserContext } from "./contexts/UserContext"
import CheckYourEmail from "./Pages/CheckYourEmail"
import './App.css';


function App() {
  const [customerList1, setCustomerList] = useState([])
  const [user, setUser] = useState("")

  return (
    <div className="App-header">
      <CustomerListContext.Provider value={{ customerList1, setCustomerList }}>
      <UserContext.Provider value={{ user, setUser }}>

        <Switch>
          <Route path="/home" component={CustomerPage}>
          </Route>

          <Route path="/customer/:id" component={CustomerDetailPage} />

          <Route path="/check">
          <CheckYourEmail />
          </Route>

          <Route path="/login">
            <ActivateAccountPage />
          </Route>

          <Route path="/">
            <RegisterPage />
          </Route>

        </Switch>
        </UserContext.Provider>
      </CustomerListContext.Provider>
    </div>
  );
}

export default App;
