import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Chat from "../../../pages/chat/Chat";
import Login from "../../../pages/login/Login";
import Loader from "../../utils/loader/Loader";
import { login } from "../../../redux/authSlice";

const MainController = () => {
  const [isLoading, setIsLoading] = useState(true);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const userUUID = localStorage.getItem("userUUID");
    userUUID === "26111999" && dispatch(login());
    setIsLoading(false);
  }, [dispatch]);

  if (isLoading) return <Loader />;
  return <>{auth.isLogged ? <Chat /> : <Login />}</>;
};

export default MainController;
