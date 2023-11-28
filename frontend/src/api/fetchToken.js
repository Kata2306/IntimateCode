const fetchToken = async (user) => {
  try {
    const response = await fetch(`http://localhost:8080/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching token:", error);
  }
};

export default fetchToken;