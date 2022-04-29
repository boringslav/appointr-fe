import React, {useContext} from "react";
import UserContext from "../../context/UserContext";

function Home() {
  const {user, setUser} = useContext(UserContext);
  return <pre>{JSON.stringify(user)}</pre>;
}

export default Home;
