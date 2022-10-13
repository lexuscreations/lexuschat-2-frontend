import React, { Suspense } from "react";
import { useDispatch } from "react-redux";

import { login } from "../../redux/authSlice";
import Loader from "../../components/utils/loader/Loader";
import { Toast } from "../../components/utils/toast/Toast";
import { isEmpty } from "../../components/utils/validation/Validation";

const LoginForm = React.lazy(() => import("./LoginForm"));

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (userUUID) => {
    try {
      if (isEmpty(userUUID))
        return Toast.warning("Please Fill Valid Data In The Field!");

      new Promise((resolve, reject) => {
        if (userUUID === "26111999") return resolve();
        reject("Invalid Credentials!");
      })
        .then((res) => {
          Toast.success(`Welcome Lokesh`);
          dispatch(login(userUUID));
        })
        .catch((err) => {
          Toast.error(err);
        });
    } catch (err) {
      err.message && Toast.error(err.message);
    }
  };

  return (
    <>
      <Suspense fallback={<Loader />}>
        <LoginForm handleSubmit={handleSubmit} />
      </Suspense>
    </>
  );
};

export default Login;
