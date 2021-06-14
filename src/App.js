import React, { useState } from "react";
import Pizza from "./components/Pizza";
import Form from "./components/Form";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";

const initialFormValues = {
  name: "",
  size: "",
  toppings: "",
  specialinstructions: "",
};

const initialFromErrors = {
  name: "",
  size: "",
  pepperoni: false,
  sausage: false,
  olives: false,
  roastedbellpepper: false,
  specialinstructions: false,
};

const API_URL = `https://reqres.in/api/orders`;

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [pizzas, setPizzas] = useState([]);
  const [formErrors, setFormErrors] = useState(initialFromErrors);

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value, // NOT AN ARRAY, nice little syntax: dynamic property, computed property
    });
  };

  const postNewPizza = (newPizza) => {
    axios
      .post(API_URL, newPizza)
      .then((res) => {
        // 2. Add our newFriend to state
        setPizzas([...pizzas, newPizza]);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setFormValues(initialFromErrors);
      });
  };

  const formSubmit = () => {
    console.log("trying to submit the form");
    const newPizza = {
      name: formValues.name.trim(),
      // email: formValues.email.trim(),
      // role: formValues.role.trim(),
      specialinstructions: formValues.specialinstructions.trim(),
      // 🔥 STEP 7- WHAT ABOUT HOBBIES?
      // hobbies: ["hiking", "reading", "coding"].filter(
      //   (hobby) => formValues[hobby]
      // ),
    };
    // 🔥 STEP 8- POST NEW FRIEND USING HELPER
    postNewPizza(newPizza);
  };

  return (
    <>
      <h1>This is the Home page!</h1>
      {
        <>
          <Link to="/">Home</Link>
          <Link to="/pizza" id="order-pizza">
            Order Pizza!
          </Link>
        </>
      }
      {pizzas.map((pizza) => {
        return <Pizza name={pizza.name} />;
      })}

      <Switch>
        <Route path="/pizza">
          <Form
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            // errors={formErrors}
          />
        </Route>
      </Switch>
    </>
  );
};
export default App;
