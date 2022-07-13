import { async } from "@firebase/util";
import "./sign-in-form.styles.scss";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
const SignInForm = () => {
  const defaultFormField = {
    email: "",
    password: "",
  };
  const [formField, setFormField] = useState(defaultFormField);
  const { displayName, email, password, comfirmPassword } = formField;
  console.log(formField);
  const resetFormField = () => {
    setFormField(defaultFormField);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      resetFormField();
    } catch (error) {}
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  console.log(formField);
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>sign in with Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label={"Password"}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <button type="submit">sign In</button>
      </form>
    </div>
  );
};
export default SignInForm;
