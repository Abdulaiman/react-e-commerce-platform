import { async } from "@firebase/util";
import "./sign-in-form.styles.scss";
import { Link } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import { useState, useContext } from "react";
import {
  createUserDocumentFromAuth,
  SignInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";

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
    <div className="sign-in-container">
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
        <div className="buttons-container">
          <Button type="submit">sign In</Button>
          <Button
            type="button"
            buttonType={"google"}
            onClick={GoogleSignInHandler}
          >
            google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
