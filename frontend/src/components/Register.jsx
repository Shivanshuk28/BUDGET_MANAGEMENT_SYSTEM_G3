import React, { useState } from 'react';
import useRegister from '../hooks/useRegister';
// import './Register.css';

const Register = () => {
  const { register, isLoading, error } = useRegister();
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const confirmPassword = e.target.elements.confirmPassword.value;

    if (!username || !password || !confirmPassword) {
      setFormError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setFormError('Passwords do not match');
      return;
    }

    setFormError('');
    register({ username, password });
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      {error && <p className="error-message">{error}</p>}
      {formError && <p className="error-message">{formError}</p>}
      <form onSubmit={handleRegister} className="form-container">
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
        <label className="form-label">
          Confirm Password:
          <input
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            className="input-field"
          />
        </label>
        <button
          type="submit"
          disabled={isLoading}
          className="submit-button"
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
      <p className="login-link">
        Already have an account? <a href="/login">Log in</a>
      </p>
    </div>
  );
};

export default Register;
