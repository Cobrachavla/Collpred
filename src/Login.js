import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaQuestionCircle } from 'react-icons/fa';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f0f0f0;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0;
`;

const Input = styled.input`
  padding: 10px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background: ${(props) => (props.primary ? '#007bff' : '#ccc')};
  color: white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: ${(props) => (props.primary ? '#0056b3' : '#999')};
  }
`;

const HelpIcon = styled(FaQuestionCircle)`
  margin-left: 10px;
  cursor: pointer;
  color: #007bff;
  &:hover + div {
    visibility: visible;
    opacity: 1;
  }
`;

const Tooltip = styled.div`
  visibility: hidden;
  width: 200px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  top: 125%; /* Position below the icon */
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 1;
`;

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/login-by-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: username, password }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Login successful:', result);
        setIsAuthenticated(true); // Update authentication state
        navigate('/'); // Navigate to the desired page after login
      } else {
        const errorText = await response.text();
        console.error('Login failed:', errorText);
        alert('Login failed: ' + errorText);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h2>Login</h2>
        <InputContainer>
          <Input
            type="text"
            placeholder="Username (Email)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <HelpIcon />
          <Tooltip>Enter your registered email address.</Tooltip>
        </InputContainer>
        <InputContainer>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <HelpIcon />
          <Tooltip>Your password should be at least 8 characters long.</Tooltip>
        </InputContainer>
        <Button type="submit" primary>
          Login
        </Button>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
