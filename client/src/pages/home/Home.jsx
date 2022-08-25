import React from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Feed from '../../components/Feed/Feed';
import { useContext, useEffect, useState } from 'react';
import { FaCartArrowDown, FaTruck, FaUser } from 'react-icons/fa';
import Logo from '../../assests/images/logo.png';
import './Home.css';
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
                  <div className="home-container">
                        <div className="home-container__inner">
                              <div className="logo-home">
                                    <img src={Logo} alt={'Logo'} className="logo" />
                              </div>
                              <div className="home-container__search">
                                    <form action="" method="post" className="search-form">
                                          <input
                                                type="text"
                                                name="search"
                                                placeholder="Search"
                                                className="search-form__input"
                                          />
                                    </form>
                              </div>

                              <div className="main-home">
                                    <div className="main-home__container">
                                          <ul id="menu-menu-wishlist-compare" className="menu">
                                                <li className="yith-woocompare-open has-icon menu-my-compare">
                                                      <a
                                                            className="item-link elementor-item"
                                                            href="#"
                                                      >
                                                            <FaTruck className="main-home__icon" />
                                                      </a>
                                                      <span className="menu-title">
                                                            Theo dõi Đơn hàng
                                                      </span>
                                                </li>
                                                <li className="has-icon menu-my-wishlist">
                                                      <a
                                                            className="item-link elementor-item"
                                                            href="https://demo.wpthemego.com/themes/sw_emarket/layout3/wishlist/"
                                                      >
                                                            <FaUser className="main-home__icon" />
                                                      </a>
                                                      <span className="menu-title">
                                                            Đăng nhập Tài khoản
                                                      </span>
                                                </li>
                                                <li className="has-icon menu-my-wishlist">
                                                      <a
                                                            className="item-link elementor-item"
                                                            href="https://demo.wpthemego.com/themes/sw_emarket/layout3/wishlist/"
                                                      >
                                                            <FaCartArrowDown className="main-home__icon" />
                                                      </a>
                                                      <span className="menu-title">
                                                            Giỏ hàng của bạn
                                                      </span>
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <Feed />
            </div>
      );
}

export default Home;
