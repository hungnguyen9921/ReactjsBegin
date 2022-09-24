import React, { useState } from 'react';
import { SignUpForm } from './SignUpForm';
import { LoginForm } from './LoginForm';
import Footer from '../../components/Footer/Footer';
import Logo from '../../assests/images/logo.png';
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
                  <div className="w-full shadow-3xl  z-50 bg-white min-h-[56px] py-[20px]">
                        <div className="w-9/10 mx-auto">
                              <img src={Logo} alt={'Logo'} className="max-h-full max-w-full" />
                        </div>
                  </div>
                  <div className="relative flex bg-[#f6f6f6]">
                        <div className="flex content-center items-center w-full h-[80vh] bg-[#f6f6f6] mx-auto relative mt-[30px]">
                              <div className="flex w-[1200px] mx-auto">
                                    <div className="pr-[48px] break-words max-w-1/2">
                                          <h2 className="text-[32px] text-[#ee4d2d] leading-[57px] font-bold">
                                                {status}
                                          </h2>
                                          <p className="text-[#666] text-[18px] leading-[24px] ">
                                                Đăng nhập để theo dõi đơn hàng, danh sách sản phẩm
                                                yêu thích, nhận nhiều ưu đãi hấp dẫn.
                                          </p>
                                          <img
                                                className="max-w-full h-auto"
                                                src={LoginImg}
                                                alt={'LoginImg'}
                                          ></img>
                                    </div>
                                    <div className="max-w-1/2 pl-[100px]">
                                          <div className="w-[500px] h-full bg-white shadow-3xl">
                                                <div className="grid grid-cols-2 mb-[30px]">
                                                      <div
                                                            className="cursor-pointer border border-gray-400"
                                                            onClick={handleClick1}
                                                      >
                                                            <h2
                                                                  style={{
                                                                        color:
                                                                              state === 'login'
                                                                                    ? 'black'
                                                                                    : '#666',
                                                                  }}
                                                                  className="ml-[20px] text-[28px] font-bold py-[10px]"
                                                            >
                                                                  Đăng Nhập
                                                            </h2>
                                                      </div>
                                                      <div
                                                            className="cursor-pointer border border-gray-400"
                                                            onClick={handleClick}
                                                      >
                                                            <h2
                                                                  style={{
                                                                        color:
                                                                              state === 'signup'
                                                                                    ? 'black'
                                                                                    : '#666',
                                                                  }}
                                                                  className="ml-[20px] text-[28px] font-bold py-[10px]"
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
                  </div>
                  <Footer />
            </>
      );
}

export default Login;
