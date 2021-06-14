import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "name must be at least 2 characters"),
  size: yup.string().oneOf(["small", "medium", "large"]),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  olives: yup.boolean(),
  roastedbellpepper: yup.boolean(),
  specialinstructions: yup.string(),
});

export default schema;
