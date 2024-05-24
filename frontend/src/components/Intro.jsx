import React from 'react';
import { Form, useNavigate } from 'react-router-dom';

// library
import { UserPlusIcon } from '@heroicons/react/24/solid';

// assets
import illustration from '../assets/illustration.png';

const Intro = () => {
  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <div className="intro">
      <div>
        <h1>
          Empower your wallet with <span className="accent">Pocket Planner</span>
        </h1>
        <p>
          Take control of your finances effortlessly, one budget at a time.
        </p>
        <Form method="post" onSubmit={handleCreateAccount}>
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?" 
            aria-label="Your Name" 
            autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn-success">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  );
};

export default Intro;
