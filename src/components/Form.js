import React from "react";

export default function Form(props) {
  const { values, submit, change } = props;
  return (
    <form id="pizza-form" onSubmit={submit}>
      <label class="input-label">
        Name
        <input type="text" name="name" id="name-input" />
      </label>
      <br />
      {/* this is the dropdown for the pizza size */}
      <label class="input-label">
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
          name="pepperoni"
          // checked={values.hiking}
          // onChange={onChange}
        />
      </label>
      <br />
      <label>
        Sausage
        <input
          type="checkbox"
          name="sausage"
          // checked={values.hiking}
          // onChange={onChange}
        />
      </label>
      <br />
      <label>
        Olives
        <input
          type="checkbox"
          name="olives"
          // checked={values.hiking}
          // onChange={onChange}
        />
      </label>
      <br />
      <label>
        Roasted Bell Pepper
        <input
          type="checkbox"
          name="roastedbellpepper"
          // checked={values.hiking}
          // onChange={onChange}
        />
      </label>
      <br />
      <label class="input-label">
        Special Instructions
        <input type="text" name="name" id="special-text" />
      </label>
      <button>Submit</button>
    </form>
  );
}
