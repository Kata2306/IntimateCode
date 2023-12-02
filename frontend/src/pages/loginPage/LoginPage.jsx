import { useEffect, useState } from "react";
import Login from "../../components/login/Login";
import UserLogin from "../../components/userLogin/UserLogin";
import MainLayout from "../../layout/MainLayout";

export default function LoginPage() {
  const [loggedIn, setLoggedIn] = useState();

  console.log("loginPAge");
  const handleRedirect = (value) => {
    console.log(value);
    value === "toUserLogin" ? setLoggedIn(true) : setLoggedIn(false);
  }

  useEffect(() => {
    const userLoggedIn = () => {
      const token = localStorage.getItem("jwt");
      if (token && token.length > 0) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    };
    userLoggedIn();
  }, []);

  return <MainLayout>{loggedIn ? <UserLogin handleRedirect={handleRedirect}/> : <Login handleRedirect={handleRedirect} />}</MainLayout>;
}
