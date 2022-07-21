import "./sign-in-form.styles.jsx";

import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import { SignInUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";
import {
  ButtonsContainer,
  SignInContainer,
  Click,
} from "./sign-in-form.styles.jsx";
const SignInForm = () => {
  const defaultFormField = {
    email: "",
    password: "",
  };
  const [formField, setFormField] = useState(defaultFormField);

  const { email, password } = formField;

  const resetFormField = () => {
    setFormField(defaultFormField);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await SignInUserWithEmailAndPassword(email, password);

      resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for this email");
          break;
        case "auth/user-not-found":
          alert("no user found. create a NEW account");
          break;
        default:
          console.error(error.code);
      }
    }
  };
  const GoogleSignInHandler = async (e) => {
    try {
      await signInWithGooglePopUp();
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  console.log(formField);
  return (
    <SignInContainer>
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
        <ButtonsContainer>
          <Click>
            <Button type="submit">sign In</Button>
            <Button
              type="button"
              buttonType={BUTTON_TYPE_CLASSES.google}
              onClick={GoogleSignInHandler}
            >
              google sign in
            </Button>
          </Click>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};
export default SignInForm;
