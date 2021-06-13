import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;
  return (
    <form id="pizza-form">
      <label class="input-label">
        {" "}
        Name
        <input type="text" name="name" id="name-input" />
      </label>
      <br />
      {/* this is the dropdown for the pizza size */}
      <label class="input-label">
        {" "}
        Size
        <select id="size-dropdown">
          <option value="">- please select -</option>
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
        </select>
      </label>
      <br />
      <label>
        Pepperoni
        <input
          type="checkbox"
          name="Pepperoni"
          // checked={values.hiking}
          // onChange={onChange}
        />
      </label>
      <br />
      <label>
        Sausage
        <input
          type="checkbox"
          name="Sausage"
          // checked={values.hiking}
          // onChange={onChange}
        />
      </label>
      <br />
      <label>
        Olives
        <input
          type="checkbox"
          name="Olives"
          // checked={values.hiking}
          // onChange={onChange}
        />
      </label>
      <br />
      <label>
        Roasted Bell Pepper
        <input
          type="checkbox"
          name="Roasted Bell Pepper"
          // checked={values.hiking}
          // onChange={onChange}
        />
      </label>
      <br />
      <label class="input-label">
        {" "}
        Special Instructions
        <input type="text" name="name" id="special-text" />
      </label>
    </form>
  );
}
