import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast as Toast } from "react-toastify";

import Button from "@mui/material/Button";
import { Login as LoginIcon } from "@mui/icons-material";

import config from "../../../config/app.config";
import { login } from "../../../redux/authSlice";
import { isEmpty } from "../../utils/validation/Validation";

const configToast = config.CONFIG_TOAST;

const Login = () => {
  const [userUUID, setUserUUID] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      if (isEmpty(userUUID))
        return Toast.error("Please Fill Valid Data In The Field!", configToast);

      new Promise.then((res) =>
        Toast.success(`Welcome ${res.username}`, configToast)
      );
      localStorage.setItem("firstLogin", true);
      localStorage.setItem("userUUID", userUUID);
      dispatch(login());
    } catch (err) {
      err.response.data.msg && Toast.error(err.response.data.msg, configToast);
    }
  };

  return (
    <div className="d-flex-center" style={{ minHeight: "80vh" }}>
      <div className="authFormContainer">
        <h2>Login</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div>
            <label htmlFor="userUUID">UUID</label>
            <input
              type="text"
              placeholder="Enter UUID"
              id="userUUID"
              value={userUUID}
              name="email"
              onChange={({ target }) => setUserUUID(target.value)}
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            color="inherit"
            endIcon={<LoginIcon />}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
