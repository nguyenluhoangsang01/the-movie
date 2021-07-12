import React, { useState, useContext } from "react";
// Routing
import { useNavigate } from "react-router-dom";
// API
import API from "../API";
// Components
import Button from "./Button";
// Styles
import { Wrapper } from "./Login.styles";
// Context
import { Context } from "../context";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [_user, setUser] = useContext(Context);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(false);

    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(
        requestToken,
        username,
        password
      );

      setUser({ sessionId: sessionId.session_id, username });

      navigate("/");
    } catch (error) {
      setError(true);
    }
  };

  const handleInput = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };

  return (
    <Wrapper>
      {error && <div className="error">There was an error!</div>}
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={handleInput}
      />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handleInput}
      />
      <Button text="Login" callback={handleSubmit} />
    </Wrapper>
  );
};

export default Login;
