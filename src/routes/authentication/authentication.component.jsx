import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
  // useEffect(() => {
  //   const fetch = async () => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //     if (response) {
  //       console.log(response.user);
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };
  //   fetch();
  // }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log(user);
  // };

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};
export default Authentication;
