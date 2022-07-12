import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1> sign in Page</h1>
      <button onClick={logGoogleUser}>sign in with google</button>
    </div>
  );
};
export default SignIn;
