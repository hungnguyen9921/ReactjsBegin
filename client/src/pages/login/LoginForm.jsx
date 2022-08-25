import React, { useRef, useContext } from 'react';
import { loginCall } from '../../context/useAuth';
import { AuthContext } from '../../context/AuthProvider';
export function LoginForm() {
      const email = useRef();
      const password = useRef();
      const { user, dispatch } = useContext(AuthContext);
      const handleLogin = (e) => {
            e.preventDefault();
            loginCall({ email: email.current.value, password: password.current.value }, dispatch);
      };
      return (
            <>
                  <form
                        className="auth-form"
                        method="POST"
                        autoComplete={'off'}
                        onSubmit={handleLogin}
                  >
                        <div className="input-form">
                              <div className="email">
                                    <input
                                          type="text"
                                          placeholder="Email"
                                          className="input-text"
                                          ref={email}
                                    />
                              </div>
                              <div className="password">
                                    <input
                                          type="password"
                                          placeholder="Password"
                                          className="input-text"
                                          ref={password}
                                    />
                              </div>
                              <div className="check">
                                    <label htmlFor="" className="checkbox">
                                          <input
                                                type="checkbox"
                                                value="Nhớ mật khẩu"
                                                className="checkbox-input"
                                          />
                                          <span className="checkbox-label">Nhớ mật khẩu</span>
                                    </label>
                                    <a href="#">Quên mật khẩu?</a>
                              </div>
                              <div className="button">
                                    <button type="submit">Đăng Nhập</button>
                              </div>
                        </div>
                  </form>
            </>
      );
}
