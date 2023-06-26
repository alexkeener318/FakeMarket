import "./Header.css";
import Menu from "../assets/menu.svg";
import { auth, googleProvider } from "../firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";

const Header = () => {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      console.log("SUCCESS");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <div className="menu">
        <img src={Menu} height="40px" />
      </div>
      <h1 className="title">Yerrrr</h1>
      <button onClick={signInWithGoogle}>Sign In</button>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default Header;
