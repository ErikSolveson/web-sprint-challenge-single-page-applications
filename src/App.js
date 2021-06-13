import React, { useState } from "react";
import Pizza from "./components/Pizza";
import Form from "./components/Form";
import { Link, Route, Switch } from "react-router-dom";

initialFromValues = {
  name: "",
  size: "",
  toppings: "",
  specialinstructions: "",
};
initialFromErrors = {
  name: "",
  size: "",
  pepperoni: false,
  sausage: false,
  olives: false,
  roastedbellpepper: false,
  specialinstructions: false,
};
const App = () => {
  const [formValues, setFormValues] = useState(initialFromValues);
  const [pizzas, setPizzas] = useState([]);
  const [formErrors, setFormErrors] = useState(initialFromErrors);

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value, // NOT AN ARRAY, nice little syntax: dynamic property, computed property
    });
  };
  return (
    <>
      <h1>This is the Home page!</h1>
      {
        <Link to="/pizza" id="order-pizza">
          Order Pizza!
        </Link>
      }

      <Switch>
        <Route path="/pizza">
          <Form
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
      </Switch>
    </>
  );
};
export default App;
