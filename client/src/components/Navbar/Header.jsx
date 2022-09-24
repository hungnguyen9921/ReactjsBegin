import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '../../assests/images/logo.png';
import { FaCartArrowDown, FaTruck, FaUser } from 'react-icons/fa';
export default function Header() {
      const cart = useSelector((state) => state.cart);
      const { cartItems } = cart;

      return (
            <header className="bg-white py-[20px] shadow-3xl">
                  <div className="max-w-8xl flex mx-auto items-center">
                        <Link to={`/`}>
                              <div className="px-[15px] cursor-pointer">
                                    <img src={Logo} alt={'Logo'} className="logo" />
                              </div>
                        </Link>
                        <div className="px-[15px] flex-auto">
                              <form action="" method="post" className="search-form">
                                    <input
                                          type="text"
                                          name="search"
                                          placeholder="Search"
                                          className="pl-[10px] rounded border-amber-600 border-2 w-full h-[42px] focus:outline-none"
                                    />
                              </form>
                        </div>

                        <div className="px-[15px] cursor-pointer text-sm ">
                              <div className="main-home__container">
                                    <ul id="menu-menu-wishlist-compare" className="flex">
                                          <Link to={'/cart'}>
                                                <li className="flex mr-[20px] max-w-[150px] align-top">
                                                      <FaTruck className="text-4xl text-[#2673dd]" />

                                                      <span className="text-[#666] pl-[10px] font-medium">
                                                            Theo dõi Đơn hàng
                                                      </span>
                                                </li>
                                          </Link>
                                          <Link to={'/'}>
                                                <li className="flex mr-[20px] max-w-[150px] align-top">
                                                      <FaUser className="text-4xl text-[#2673dd]" />

                                                      <span className="text-[#666] pl-[10px] font-medium">
                                                            Đăng nhập Tài khoản
                                                      </span>
                                                </li>
                                          </Link>
                                          <Link to={'/cart'}>
                                                <li className="flex mr-[20px] max-w-[150px] align-top">
                                                      <div className="relative">
                                                            <FaCartArrowDown className="text-4xl text-[#2673dd]" />
                                                            <span className="text-white absolute flex items-center justify-center z-[999] bg-[#ff9600] h-[20px] w-[20px] rounded-full top-[-8px] right-[-8px]">
                                                                  {cartItems.length}
                                                            </span>
                                                      </div>

                                                      <span className="text-[#666] pl-[10px] font-medium">
                                                            Giỏ hàng của bạn
                                                      </span>
                                                </li>
                                          </Link>
                                    </ul>
                              </div>
                        </div>
                  </div>
            </header>
      );
}
