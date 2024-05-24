import React, { useState } from 'react';
import useLogin from '../hooks/useLogin';
// import './Login.css';

const Login = () => {
  const { login, isLoading, error } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    if (!username || !password) {
      setFormError('Both fields are required');
      return;
    }

    setFormError('');
    login({ username, password });
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      {error && <p className="error-message">{error}</p>}
      {formError && <p className="error-message">{formError}</p>}
      <form onSubmit={handleLogin} className="form-container">
        <label className="form-label">
          Username:
          <input
            type="text"
            name="username"
            className="input-field"
          />
        </label>
        <label className="form-label">
          Password:
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              className="input-field"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="show-password"
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>
        </label>
        <button
          type="submit"
          disabled={isLoading}
          className="submit-button"
        >
          {isLoading ? 'Logging in...' : 'Log in'}
        </button>
      </form>
      <p className="register-link">
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
};

export default Login;
