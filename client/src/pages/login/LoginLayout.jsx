import React from 'react';
import Logo from '../../assests/images/logo.png';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
export default function LoginLayout({ children }) {
      return (
            <>
                  <div className="w-full shadow-3xl z-50 bg-white min-h-[56px] fixed top-0 left-0 py-[20px]">
                        <div className="w-9/10 mx-auto">
                              <Link to="/">
                                    <img
                                          src={Logo}
                                          alt={'Logo'}
                                          className="max-h-full max-w-full"
                                    />
                              </Link>
                        </div>
                  </div>
                  {children}
                  <Footer></Footer>
            </>
      );
}
