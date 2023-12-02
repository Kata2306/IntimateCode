import { useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';
import MainLayout from "../../layout/MainLayout";

export default function UserLogin() {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [decodedToken, setDecodedToken] = useState(); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("jwt");
                setDecodedToken(jwtDecode(token));
                console.log(decodedToken);
                console.log(token);
                if (token) {
                    const response = await fetch("http://localhost:8080/user/all", {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });

                    if (!response.ok) {
                        throw new Error('Failed to fetch user info');
                    }

                    const data = await response.text(); // Get the response as text
                    console.log('Response Text:', data); // Log the response text

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

    console.log(typeof userData);
    const user = userData.find((user) => user.username === decodedToken.sub);
    console.log(user);
    
    // Assuming userData contains the username
    return (
        <div>
            <h1>Welcome, {decodedToken.sub}</h1>
            <div>
            <button>My Profile</button>
            <button>My Orders</button>
            <button>My Wishlist</button>
            </div>
            <div>
                {user.associatedProduct && user.associatedProduct.map((product) => <div>{product}</div>)}
            </div>
            </div>
    );
}
