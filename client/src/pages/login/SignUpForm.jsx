import React, { useRef, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { registerCall } from '../../context/useAuth';

export function SignUpForm() {
      const email = useRef();
      const password = useRef();
      const name = useRef();
      const phone = useRef();
      const { user, dispatch } = useContext(AuthContext);
      const handleRegister = (e) => {
            e.preventDefault();
            const newUser = {
                  name: name.current.value,
                  email: email.current.value,
                  password: password.current.value,
            };
            registerCall(newUser, dispatch);
      };

      return (
            <>
                  <form
                        className="auth-form"
                        method="POST"
                        autoComplete={'off'}
                        onSubmit={handleRegister}
                  >
                        <div className="input-form">
                              <div className="name">
                                    <input
                                          type="text"
                                          placeholder="Nhập họ tên"
                                          className="input-text"
                                          ref={name}
                                    />
                              </div>
                              <div className="phone">
                                    <input
                                          type="text"
                                          placeholder="Nhập số điện thoại"
                                          className="input-text"
                                          ref={phone}
                                    />
                              </div>
                              <div className="email">
                                    <input
                                          type="text"
                                          placeholder="Nhập email"
                                          className="input-text"
                                          ref={email}
                                    />
                              </div>
                              <div className="password">
                                    <input
                                          type="password"
                                          placeholder="Mật khẩu"
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
                                    <button type="submit">Tạo tài khoản</button>
                              </div>
                        </div>
                  </form>
            </>
      );
}
