import React from 'react';
import LoginForm from 'components/LoginForm';

export default function Login() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '36px',
        paddingLeft: '5px',
        width: '100%',
        alignItems: 'center',
      }}
    >
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
}
