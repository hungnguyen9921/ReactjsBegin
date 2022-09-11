import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
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
                                          className="w-[95%] mb-[20px] px-[10px] py-[10px] rounded-sm border border-regal-black"
                                          ref={email}
                                    />
                              </div>
                              <div className="password">
                                    <input
                                          type="password"
                                          placeholder="Password"
                                          className="w-[95%] mb-[20px] px-[10px] py-[10px] rounded-sm border border-regal-black"
                                          ref={password}
                                    />
                              </div>
                              <div className="flex items-center justify-between mb-[24px]">
                                    <label htmlFor="" className="relative pl-[26px]">
                                          <input
                                                type="checkbox"
                                                value="Nhớ mật khẩu"
                                                className="absolute left-0 bottom-0.5 cursor pointer h-[16px] w-[16px]"
                                          />
                                          <span className="checkbox-label">Nhớ mật khẩu</span>
                                    </label>
                                    <Link to={`/home`}>Quên mật khẩu?</Link>
                              </div>
                              <div className="cursor-pointer w-full px-[10px] py-[10px] mb-[20px] bg-[#ee4d2d] text-white rounded border border-transparent text-[14px] text-center">
                                    <button type="submit">Đăng Nhập</button>
                              </div>
                        </div>
                  </form>
            </>
      );
}
