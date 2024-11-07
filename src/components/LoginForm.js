// src/components/LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css';
import FormHeader from './FormHeader';
import InputField from './InputField';
import ErrorMessage from './ErrorMessage';
import SubmitButton from './SubmitButton';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Both fields are required.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email.");
    } else {
      setError("");
      alert("Login successful!");
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <FormHeader title="Login" />
      {error && <ErrorMessage message={error} />}
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SubmitButton text="Login" />
      <h6 className='create-account'>or <a href='https//createaccount.com'>create account</a></h6>
    </form>
  );
}

export default LoginForm;
