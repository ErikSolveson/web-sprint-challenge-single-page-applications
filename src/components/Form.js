import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;

    const valueToUse = type === "checkbox" ? checked : value;

    change(name, valueToUse);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form id="pizza-form" onSubmit={onSubmit}>
      <label class="input-label">
        Name
        <input
          type="text"
          name="name"
          id="name-input"
          value={values.name}
          onChange={onChange}
        />
      </label>
      <br />

      {/* this is the dropdown for the pizza size */}
      <label class="input-label">
        Size
        <select
          value={values.size}
          onChange={onChange}
          id="size-dropdown"
          name="size"
        >
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
          name="pepperoni"
          checked={values.pepperoni}
          onChange={onChange}
        />
      </label>
      <br />
      <label>
        Sausage
        <input
          type="checkbox"
          name="sausage"
          checked={values.sausage}
          onChange={onChange}
        />
      </label>
      <br />
      <label>
        Olives
        <input
          type="checkbox"
          name="olives"
          checked={values.olives}
          onChange={onChange}
        />
      </label>
      <br />
      <label>
        Roasted Bell Pepper
        <input
          type="checkbox"
          name="roastedbellpepper"
          checked={values.roastedbellpepper}
          onChange={onChange}
        />
      </label>
      <br />
      <label class="input-label">
        Special Instructions
        <input
          type="text"
          name="specialinstructions"
          id="special-text"
          onChange={onChange}
          value={values.specialinstructions}
        />
      </label>
      <button id="order-button" disabled={disabled}>
        Order
      </button>

      <div className="errors">
        {/* RENDER THE VALIDATION ERRORS HERE */}
        <div>{errors.name}</div>
        <div>{errors.size}</div>
      </div>
    </form>
  );
}
