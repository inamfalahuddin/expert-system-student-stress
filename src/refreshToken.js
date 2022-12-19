const refreshToken = async () => {
  try {
    const endpoint = "http://localhost:5000/user/token";
    const { data } = await axios.get(endpoint);

    const decoded = jwt_decode(data.payload.data.accessToken);
    setToken(data.payload.data.accessToken);
    setName(decoded.nama_user.split(" ")[0]);
    setUsername(decoded.username);
    setExpToken(decoded.exp);

    dispatch({ type: "SET_LOADING", payload: false });
  } catch (err) {
    dispatch({ type: "SET_AUTH", payload: true });
    // navigate("/");
  }
};

export default refreshToken;
