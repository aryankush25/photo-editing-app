import React from "react";
import LoginSignUpTemplate from "../../components/LoginSignUpTemplate";
import { reduxForm } from "redux-form";
import { formConstants } from "../../utils/constants";

let Login = () => {
  const onSubmit = event => {
    console.log("event", event);
  };

  return <LoginSignUpTemplate formName="Login" onSubmit={onSubmit} />;
};

Login = reduxForm({
  form: formConstants.loginFormConst
})(Login);
export default Login;
