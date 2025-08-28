import React, { useReducer, useState } from 'react';
import { loginReducer, LoginState } from '../reducer/loginReducer';
import '../stype/Bai08.css';

const initialState: LoginState = {
  loading: false,
  success: false,
  error: null,
};

const LoginForm: React.FC = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });

    setTimeout(() => {
      if (username === 'admin' && password === '123') {
        dispatch({ type: 'LOGIN_SUCCESS' });
      } else {
        dispatch({ type: 'LOGIN_ERROR', payload: 'Sai tài khoản hoặc mật khẩu' });
      }
    }, 1500);
  };

  return (
    <div className="login-form">
      <h2>Đăng nhập</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={state.loading}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={state.loading}
        />
        <button type="submit" disabled={state.loading}>
          {state.loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
        </button>
      </form>

      {state.success && <p className="success">Đăng nhập thành công!</p>}
      {state.error && <p className="error">{state.error}</p>}
    </div>
  );
};

export default LoginForm;
