import React, { useRef, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { registerCall } from '../../context/useAuth';
import RegisterSuccess from '../../utils/RegisterSuccess';

export function SignUpForm() {
      const email = useRef();
      const password = useRef();
      const name = useRef();
      const phone = useRef();
      const { error, dispatch } = useContext(AuthContext);
      const handleRegister = (e) => {
            e.preventDefault();
            const newUser = {
                  name: name.current.value,
                  email: email.current.value,
                  password: password.current.value,
                  phone: phone.current.value,
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
                        <div className="w-[80%] mx-auto text-[14px]">
                              <div className="name">
                                    <input
                                          type="text"
                                          placeholder="Nhập họ tên"
                                          className="w-[95%] mb-[20px] px-[10px] py-[10px] rounded-sm border border-regal-black"
                                          ref={name}
                                    />
                              </div>
                              <div className="phone">
                                    <input
                                          type="text"
                                          placeholder="Nhập số điện thoại"
                                          className="w-[95%] mb-[20px] px-[10px] py-[10px] rounded-sm border border-regal-black"
                                          ref={phone}
                                    />
                              </div>
                              <div className="email">
                                    <input
                                          type="text"
                                          placeholder="Nhập email"
                                          className="w-[95%] mb-[20px] px-[10px] py-[10px] rounded-sm border border-regal-black"
                                          ref={email}
                                    />
                              </div>
                              <div className="password">
                                    <input
                                          type="password"
                                          placeholder="Mật khẩu"
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
                                    <a href="#">Quên mật khẩu?</a>
                              </div>
                              <div className="cursor-pointer w-full px-[10px] py-[10px] mb-[20px] bg-[#ee4d2d] text-white rounded border border-transparent text-[14px] text-center">
                                    <button type="submit">Tạo tài khoản</button>
                              </div>
                        </div>
                  </form>
                  {error === false ? <RegisterSuccess error={error} /> : <> </>}
            </>
      );
}
