import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { loginCall } from '../../context/useAuth';
import { AuthContext } from '../../context/AuthProvider';
import { CancelIcon } from '../../components/Icon/Icon';
export function LoginForm() {
      const email = useRef();
      const password = useRef();
      const { error, dispatch } = useContext(AuthContext);
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
                              {error ? (
                                    <div className="mb-[15px] bg-[#fff9fa] border border-minus-red flex justify-start py-[10px] pl-[10px] rounded">
                                          <div className="mr-[5px] mt-[3px]">
                                                <CancelIcon />
                                          </div>
                                          <div className="text-[14px] text-[#222]">
                                                Tài khoản hoặc mật khẩu không chính xác. Xin vui
                                                lòng thử lại
                                          </div>
                                    </div>
                              ) : (
                                    <></>
                              )}

                              <div className="email">
                                    <input
                                          type="text"
                                          placeholder="Email/Tên đăng nhập"
                                          className="w-full text-[14px] mb-[20px] px-[10px] py-[10px] rounded-sm border border-regal-black"
                                          ref={email}
                                          required={true}
                                    />
                              </div>
                              <div className="password">
                                    <input
                                          type="password"
                                          placeholder="Mật khẩu"
                                          className="w-full mb-[20px] text-[14px] px-[10px] py-[10px] rounded-sm border border-regal-black"
                                          ref={password}
                                          required={true}
                                    />
                              </div>
                              <div className="flex items-center justify-between mb-[24px]">
                                    <label htmlFor="" className="relative pl-[26px]">
                                          <input
                                                type="checkbox"
                                                value="Nhớ mật khẩu"
                                                className="cursor-pointer absolute text-[14px] left-0 bottom-0.5 cursor pointer h-[16px] w-[16px]"
                                          />
                                          <span className="checkbox-label">Nhớ mật khẩu</span>
                                    </label>
                                    <Link className="text-[14px]" to={`/home`}>
                                          Quên mật khẩu?
                                    </Link>
                              </div>
                              <div className="cursor-pointer w-full px-[10px] py-[10px] mb-[20px] bg-[#ee4d2d] text-white rounded border border-transparent text-[14px] text-center">
                                    <button type="submit">Đăng Nhập</button>
                              </div>
                        </div>
                  </form>
            </>
      );
}
