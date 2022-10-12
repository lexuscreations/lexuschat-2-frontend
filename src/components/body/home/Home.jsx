import { useSelector } from "react-redux";
import Login from "../auth/Login";
import Chat from "../chat/Chat";

const Home = () => {
  const auth = useSelector((state) => state.auth);
  return <>{auth.isLogged ? <Chat /> : <Login />}</>;
};

export default Home;
