import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';

import { Navigate } from 'react-router-dom';

import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

async function loginUser(credentials) {
  return fetch('http://localhost:8086/data', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((data) => data.json());
}

function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);

    console.log(token);
    return <Navigate replace to="/" />;
  };

  return (
    <div className={cx('auth-form-container')}>
      <form className={cx('auth-form')} onSubmit={handleSubmit}>
        <div className={cx('auth-form-content')}>
          <h3 className={cx('auth-form-title')}>ĐĂNG NHẬP</h3>
          <div className={cx('form-group mt-3')}>
            <label>Tài khoản:</label>
            <input
              type="text"
              className={cx('form-control mt-1')}
              placeholder="Nhập thông tin username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className={cx('form-group mt-3')}>
            <label>Mật khẩu:</label>
            <input
              type="password"
              className={cx('form-control mt-1')}
              placeholder="Nhập thông tin mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={cx('d-grid gap-2 mt-3')}>
            <button type="submit" className={cx('btn btn-primary', 'btn-login')}>
              Đăng nhập
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
