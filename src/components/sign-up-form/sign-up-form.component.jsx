import { async } from "@firebase/util";
import "./sign-up-form.styles.scss";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
const SignUpForm = () => {
  const defaultFormField = {
    displayName: "",
    email: "",
    password: "",
    comfirmPassword: "",
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
      if (password !== comfirmPassword)
        throw new Error("password do not match");
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      if (!user) return;
      user.displayName = displayName;
      const ref = await createUserDocumentFromAuth(user, displayName);
      if (!ref) return;
      resetFormField();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert(
          "email already exist, cannot create multiple users using one email address"
        );
        return;
      }
      alert(error.message);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  console.log(formField);
  return (
    <div className="sign-up-container">
      <h2>don't have an account?</h2>
      <span>sign in with userName and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label={"Comfirm password"}
          type="password"
          required
          onChange={handleChange}
          name="comfirmPassword"
          value={comfirmPassword}
        />
        <Button type="submit">sign up</Button>
      </form>
    </div>
  );
};
export default SignUpForm;
