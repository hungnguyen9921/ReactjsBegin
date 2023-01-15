import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '../../assests/images/logo.png';
import { FaCartArrowDown, FaTruck, FaUser } from 'react-icons/fa';
import { logoutCall } from '../../context/useAuth';
import SearchIcon from '../../assests/images/searchicon.png';
export default function Header() {
      const cart = useSelector((state) => state.cart);
      const { cartItems } = cart;
      const { user, dispatch } = useContext(AuthContext);
      const handleLogout = () => {
            logoutCall(dispatch);
      };

      return (
            <header className="bg-white py-[20px] shadow-3xl">
                  <div className="max-w-8xl flex mx-auto items-center">
                        <Link to={`/`}>
                              <div className="px-[15px] cursor-pointer">
                                    <img src={Logo} alt={'Logo'} className="logo" />
                              </div>
                        </Link>
                        <div className="px-[15px] flex-auto">
                              <form action="" method="post" className="flex text-[14px]">
                                    <input
                                          type="text"
                                          name="search"
                                          placeholder="Search"
                                          className="pl-[10px] rounded-l-sm rounded- border-[#ff9600] border-2 w-full h-[42px] focus:outline-none"
                                    />
                                    <button
                                          type="submit"
                                          className="w-[140px] cursor-pointer text-white bg-[#ff9600] font-medium text-[14px] flex items-center px-[6px]"
                                    >
                                          <img
                                                src={SearchIcon}
                                                alt="#"
                                                className="h-[20px] w-[20px] mr-[8px]"
                                          />
                                          Tìm Kiếm
                                    </button>
                              </form>
                        </div>

                        <div className="px-[15px] cursor-pointer text-sm ">
                              <div className="main-home__container">
                                    <ul id="menu-menu-wishlist-compare" className="flex">
                                          <Link to={'/cart'}>
                                                <li className="flex mr-[20px]  align-top">
                                                      <FaTruck className="text-4xl text-[#2673dd]" />
                                                      <div className="mr-[20px]">
                                                            <span className="text-[#666] pl-[10px] font-medium block">
                                                                  Theo dõi
                                                            </span>
                                                            <span className="text-[#666] pl-[10px] font-medium block">
                                                                  Đơn hàng
                                                            </span>
                                                      </div>
                                                </li>
                                          </Link>

                                          <li className="flex mr-[20px] max-w-[150px] align-top">
                                                <Link to={user ? '/user/profile' : '/login'}>
                                                      <FaUser className="text-4xl text-[#2673dd]" />
                                                </Link>
                                                {user ? (
                                                      <div className="mr-[10px] flex flex-col">
                                                            <div className="max-w-[100px] h-[20px] text-[#666] pl-[10px] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap ">
                                                                  Chào {user.name}
                                                            </div>
                                                            <Link to={'/'}>
                                                                  <span
                                                                        className="text-[#666] pl-[10px] font-medium block"
                                                                        onClick={handleLogout}
                                                                  >
                                                                        Đăng Xuất
                                                                  </span>
                                                            </Link>
                                                      </div>
                                                ) : (
                                                      <div className="mr-[20px]">
                                                            <Link to={'/login'}>
                                                                  <span className="text-[#666] pl-[10px] font-medium block">
                                                                        Đăng Nhập
                                                                  </span>
                                                            </Link>

                                                            <span className="text-[#666] pl-[10px] font-medium block">
                                                                  Tài khoản
                                                            </span>
                                                      </div>
                                                )}
                                          </li>
                                          <Link to={'/cart'}>
                                                <li className="flex mr-[20px] max-w-[150px] align-top">
                                                      <div className="relative">
                                                            <FaCartArrowDown className="text-4xl text-[#2673dd]" />
                                                            <span className="text-white absolute flex items-center justify-center z-[999] bg-[#ff9600] h-[20px] w-[20px] rounded-full top-[-8px] right-[-8px]">
                                                                  {cartItems.length}
                                                            </span>
                                                      </div>

                                                      <div className="mr-[20px]">
                                                            <span className="text-[#666] pl-[10px] font-medium block">
                                                                  Giỏ hàng
                                                            </span>
                                                            <span className="text-[#666] pl-[10px] font-medium block">
                                                                  của bạn
                                                            </span>
                                                      </div>
                                                </li>
                                          </Link>
                                    </ul>
                              </div>
                        </div>
                  </div>
            </header>
      );
}
