import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice.js";
import { auth } from "./firebase.js";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  const isregistering = () => {
    setIsRegistering(true);
  };

  const register = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please enter your full name!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.id,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <img
        src="https://scontent.fstv8-1.fna.fbcdn.net/v/t39.30808-6/278674300_7616605528381681_4102128770784915401_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=8adx-14sKUcAX9BtzOv&_nc_ht=scontent.fstv8-1.fna&oh=00_AT-04Bbp8O9KpND6rK0mBFUCm36cehclP5b-VNWOhl7jaA&oe=626B5343"
        alt="Logo"
      />
      <form>
        {isRegistering ? (
          <>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name (Required If Registering)"
            />
            <input
              value={profilePic}
              onChange={(e) => setProfilePic(e.target.value)}
              type="text"
              placeholder="Profile Picture URL (optional)"
            />{" "}
          </>
        ) : (
          <></>
        )}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={isRegistering ? register : loginToApp}>
          {isRegistering ? "Register now" : "Sign In"}
        </button>
      </form>
      {isRegistering ? (
        <></>
      ) : (
        <p>
          Not a member?{" "}
          <span className="login__register" onClick={isregistering}>
            Register Now
          </span>
        </p>
      )}
    </div>
  );
}

export default Login;
