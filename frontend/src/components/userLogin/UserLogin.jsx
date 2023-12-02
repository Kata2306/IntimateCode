import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import "./UserLogin.css";

export default function UserLogin(props) {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [decodedToken, setDecodedToken] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("jwt");
        setDecodedToken(jwtDecode(token));
        if (token) {
          const response = await fetch("http://localhost:8080/user/all", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error("Failed to fetch user info");
          }

          const data = await response.text(); // Get the response as text
          console.log("Response Text:", data); // Log the response text

          // Attempt parsing the response as JSON
          const parsedData = data ? JSON.parse(data) : null;
          setUserData(parsedData);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error fetching user info: {error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  const user = userData.find((user) => user.username === decodedToken.sub);

  const logout = () => {
    localStorage.clear();
    props.handleRedirect("toLogin");
  }

  // Assuming userData contains the username
  return (
    <div className="userLoginClass">
        <button className="logoutButton" onClick={logout}>Logout</button>
      <h1>Welcome, {decodedToken.sub}!</h1>
      <div className="userLogin">
        <div className="userLoginButtons">
          <button className="menuButton">My Profile</button>
          <button className="menuButton">My Orders</button>
          <button className="menuButton">My Wishlist</button>
        </div>
        <div className="userLoginDisplay">
          {user.associatedProduct ? (
            user.associatedProduct.map((product) => <div>{product}</div>)
          ) : (
            <div className="placeholderUserLogin">
              Welcome to your account! This space could be filled with unicorns
              and rainbows, but for now, it's just a placeholder for all the
              amazing things you'll do when you log in in the future! 🦄🌈😄
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
