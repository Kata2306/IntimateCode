import { useEffect, useState } from "react";
import Login from "../../components/login/Login";
import UserLogin from "../../components/userLogin/UserLogin";
import MainLayout from "../../layout/MainLayout";

export default function LoginPage() {
  const [loggedIn, setLoggedIn] = useState();

  const handleRedirect = () => {
    setLoggedIn(true);
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

  return <MainLayout>{loggedIn ? <UserLogin /> : <Login handleRedirect={handleRedirect} />}</MainLayout>;
}
