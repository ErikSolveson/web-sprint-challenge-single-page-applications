import React, { useState, useEffect } from "react";
import Pizza from "./components/Pizza";
import Form from "./components/Form";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import schema from "./validation/formSchema";

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
  specialinstructions: "",
};

const initialDisabled = true;

const API_URL = `https://reqres.in/api/orders`;

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [pizzas, setPizzas] = useState([]);
  const [formErrors, setFormErrors] = useState(initialFromErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.message });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const postNewPizza = (newPizza) => {
    console.log("posting a new pizza");
    axios
      .post(API_URL, newPizza)
      .then((res) => {
        // 2. Add our newFriend to state
        setPizzas([...pizzas, newPizza]);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  const formSubmit = () => {
    console.log("trying to submit the form");
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),

      toppings: ["pepperoni", "sausage", "olives", "roastedbellpepper"].filter(
        (topping) => formValues[topping]
      ),
      specialinstructions: formValues.specialinstructions.trim(),
    };

    postNewPizza(newPizza);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

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

      <Switch>
        <Route path="/pizza">
          <Form
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            errors={formErrors}
            disabled={disabled}
          />
        </Route>
      </Switch>

      {pizzas.map((pizza) => {
        return (
          <Pizza
            name={pizza.name}
            toppings={pizza.toppings}
            size={pizza.size}
          />
        );
      })}
    </>
  );
};
export default App;
