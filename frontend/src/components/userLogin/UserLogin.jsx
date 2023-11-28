import { useEffect, useState } from "react";

export default function UserLogin() {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("jwt");
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
                    //const parsedData = data ? JSON.parse(data) : null;
                    setUserData(data);
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

    // Assuming userData contains the username
    return (
        <div>
            <div>Welcome, {userData}</div>
            {/* Other components or data to render */}
        </div>
    );
}
