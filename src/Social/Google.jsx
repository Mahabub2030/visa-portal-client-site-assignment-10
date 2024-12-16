import React from "react";
import { useContext } from "react";

import AuthProvider, { Authcontext } from "../AuthProvider.jsx/AuthProvider";
import { use } from "react";

const Google = () => {
const { userRegister, userGoogleLogin } = useContext(Authcontext);

  const handelGoogleLogin = () => {
    console.log("button click");
    userGoogleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <div></div>;
};

export default Google;
