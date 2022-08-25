import React, { useState } from 'react';
import { SignUpForm } from './SignUpForm';
import { LoginForm } from './LoginForm';
import Header from '../../components/Navbar/Header';
import './Login.css';
import LoginImg from '../../assests/images/login-img.png';
function Login() {
      const [state, setstate] = useState('login');
      const handleClick1 = () => {
            setstate('login');
      };

      const handleClick = () => {
            setstate('signup');
      };
      const status = state === 'login' ? 'Đăng Nhập' : 'Đăng Kí';
      return (
            <>
                  <Header />
                  <div className="login-container">
                        <div className="login">
                              <div className="loginWrap">
                                    <div className="loginLeft">
                                          <h2 className="LoginLeftTitle">{status}</h2>
                                          <p className="LoginLeftDes">
                                                Đăng nhập để theo dõi đơn hàng, danh sách sản phẩm
                                                yêu thích, nhận nhiều ưu đãi hấp dẫn.
                                          </p>
                                          <img
                                                className="loginLeft-Logo"
                                                src={LoginImg}
                                                alt={'LoginImg'}
                                          ></img>
                                    </div>
                                    <div className="loginRight">
                                          <div className="auth-wrapper">
                                                <div className="auth-grid">
                                                      <div
                                                            className="text-login"
                                                            onClick={handleClick1}
                                                      >
                                                            <h2
                                                                  style={{
                                                                        color:
                                                                              state === 'login'
                                                                                    ? 'red'
                                                                                    : 'black',
                                                                  }}
                                                            >
                                                                  Đăng Nhập
                                                            </h2>
                                                      </div>
                                                      <div
                                                            className="text-login"
                                                            onClick={handleClick}
                                                      >
                                                            <h2
                                                                  style={{
                                                                        color:
                                                                              state === 'signup'
                                                                                    ? 'red'
                                                                                    : 'black',
                                                                  }}
                                                            >
                                                                  Đăng Kí
                                                            </h2>
                                                      </div>
                                                </div>
                                                <div className="auth-form-container">
                                                      {state === 'signup' && <SignUpForm />}
                                                      {state === 'login' && <LoginForm />}
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        `
                  </div>
            </>
      );
}

export default Login;
