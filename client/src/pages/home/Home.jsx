import React from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Feed from '../../components/Feed/Feed';
import MainProduct from '../../components/Product/MainProduct';
import { useContext, useEffect, useState } from 'react';
import { FaCartArrowDown, FaTruck, FaUser } from 'react-icons/fa';
import Logo from '../../assests/images/logo.png';
function Home() {
      const { user: currentUser } = useContext(AuthContext);
      const [name, Setname] = useState('');
      useEffect(() => {
            fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=hoaa&type=less')
                  .then((res) => res.json())
                  .then((res) => {
                        Setname(res.data);
                  });
      }, []);
      return (
            <div>
                  <div className="bg-white py-[10px] shadow-3xl">
                        <div className="max-w-8xl flex mx-auto items-center">
                              <div className="px-[15px]">
                                    <img src={Logo} alt={'Logo'} className="logo" />
                              </div>
                              <div className="px-[15px] w-[600px]">
                                    <form action="" method="post" className="search-form">
                                          <input
                                                type="text"
                                                name="search"
                                                placeholder="Search"
                                                className="pl-[10px] rounded border-amber-600 border-2 w-full h-[42px]"
                                          />
                                    </form>
                              </div>

                              <div className="px-[15px] cursor-pointer text-sm ">
                                    <div className="main-home__container">
                                          <ul id="menu-menu-wishlist-compare" className="flex">
                                                <li className="flex mr-[20px] max-w-[150px] align-top">
                                                      <a
                                                            className="item-link elementor-item"
                                                            href="#"
                                                      >
                                                            <FaTruck className="text-4xl" />
                                                      </a>
                                                      <span className="text-[#666] pl-[10px] font-medium">
                                                            Theo dõi Đơn hàng
                                                      </span>
                                                </li>
                                                <li className="flex mr-[20px] max-w-[150px] align-top">
                                                      <a
                                                            className="item-link elementor-item"
                                                            href="https://demo.wpthemego.com/themes/sw_emarket/layout3/wishlist/"
                                                      >
                                                            <FaUser className="text-4xl" />
                                                      </a>
                                                      <span className="text-[#666] pl-[10px] font-medium">
                                                            Đăng nhập Tài khoản
                                                      </span>
                                                </li>
                                                <li className="flex mr-[20px] max-w-[150px] align-top">
                                                      <a
                                                            className="item-link elementor-item"
                                                            href="https://demo.wpthemego.com/themes/sw_emarket/layout3/wishlist/"
                                                      >
                                                            <FaCartArrowDown className="text-4xl" />
                                                      </a>
                                                      <span className="text-[#666] pl-[10px] font-medium">
                                                            Giỏ hàng của bạn
                                                      </span>
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <Feed />
                  <MainProduct />
            </div>
      );
}

export default Home;
