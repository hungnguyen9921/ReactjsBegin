import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BackGround from '../../assests/images/background01.jpg';
import SvgIcon from '../../svg/index';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import './Feed.css';
export default function Feed() {
      return (
            <div className="feed">
                  <div className="feed-container">
                        <div className="feed-row">
                              <div className="feed-column feed-col-33">
                                    <div className="feed-column__wrap">
                                          <div className="feed-column__container">
                                                <div className="mega-left__title">
                                                      <span>
                                                            <FontAwesomeIcon
                                                                  icon={faListUl}
                                                                  className="margin-15px"
                                                            />
                                                            DANH MỤC
                                                      </span>
                                                </div>
                                                <div className="mega-left__list">
                                                      <ul>
                                                            <li>
                                                                  <span className="have-title">
                                                                        <span className="menu-img">
                                                                              <img
                                                                                    src={
                                                                                          SvgIcon.SMARTPHONE_ICON
                                                                                    }
                                                                                    alt="Smartphone"
                                                                              />
                                                                        </span>
                                                                        <span className="name-title">
                                                                              Điện Thoại - Máy Tính
                                                                              Bảng
                                                                        </span>
                                                                  </span>
                                                            </li>
                                                            <li>
                                                                  <span className="have-title">
                                                                        <span className="menu-img">
                                                                              <img
                                                                                    src={
                                                                                          SvgIcon.TV_ICON
                                                                                    }
                                                                                    alt="Smartphone"
                                                                              />
                                                                        </span>
                                                                        <span className="name-title">
                                                                              Phụ Kiện - Thiết Bị Số
                                                                        </span>
                                                                  </span>
                                                            </li>
                                                            <li>
                                                                  <span className="have-title">
                                                                        <span className="menu-img">
                                                                              <img
                                                                                    src={
                                                                                          SvgIcon.HEADPHONE_ICON
                                                                                    }
                                                                                    alt="Smartphone"
                                                                              />
                                                                        </span>
                                                                        <span className="name-title">
                                                                              Phụ Kiện - Thiết Bị Số
                                                                        </span>
                                                                  </span>
                                                            </li>
                                                            <li>
                                                                  <span className="have-title">
                                                                        <span className="menu-img">
                                                                              <img
                                                                                    src={
                                                                                          SvgIcon.LAPTOP_ICON
                                                                                    }
                                                                                    alt="Smartphone"
                                                                              />
                                                                        </span>
                                                                        <span className="name-title">
                                                                              Laptop - Thiết Bị IT
                                                                        </span>
                                                                  </span>
                                                            </li>
                                                            <li>
                                                                  <span className="have-title">
                                                                        <span className="menu-img">
                                                                              <img
                                                                                    src={
                                                                                          SvgIcon.CAMERA_ICON
                                                                                    }
                                                                                    alt="Smartphone"
                                                                              />
                                                                        </span>
                                                                        <span className="name-title">
                                                                              Máy Ảnh - Quay Phim
                                                                        </span>
                                                                  </span>
                                                            </li>
                                                            <li>
                                                                  <span className="have-title">
                                                                        <span className="menu-img">
                                                                              <img
                                                                                    src={
                                                                                          SvgIcon.KITCHEN_ICON
                                                                                    }
                                                                                    alt="Smartphone"
                                                                              />
                                                                        </span>
                                                                        <span className="name-title">
                                                                              Điện Gia Dụng
                                                                        </span>
                                                                  </span>
                                                            </li>
                                                            <li>
                                                                  <span className="have-title">
                                                                        <span className="menu-img">
                                                                              <img
                                                                                    src={
                                                                                          SvgIcon.POT_ICON
                                                                                    }
                                                                                    alt="Smartphone"
                                                                              />
                                                                        </span>
                                                                        <span className="name-title">
                                                                              Nhà Cửa Đời Sống
                                                                        </span>
                                                                  </span>
                                                            </li>
                                                            <li>
                                                                  <span className="have-title">
                                                                        <span className="menu-img">
                                                                              <img
                                                                                    src={
                                                                                          SvgIcon.FOOD_ICON
                                                                                    }
                                                                                    alt="Smartphone"
                                                                              />
                                                                        </span>
                                                                        <span className="name-title">
                                                                              Hàng Tiêu Dùng
                                                                        </span>
                                                                  </span>
                                                            </li>
                                                            <li>
                                                                  <span className="have-title">
                                                                        <span className="menu-img">
                                                                              <img
                                                                                    src={
                                                                                          SvgIcon.MILKBOTTLE_ICON
                                                                                    }
                                                                                    alt="Smartphone"
                                                                              />
                                                                        </span>
                                                                        <span className="name-title">
                                                                              Đồ Chơi, Mẹ Và Em Bé
                                                                        </span>
                                                                  </span>
                                                            </li>
                                                            <li>
                                                                  <span className="have-title">
                                                                        <span className="menu-img">
                                                                              <img
                                                                                    src={
                                                                                          SvgIcon.LIPSTICK_ICON
                                                                                    }
                                                                                    alt="Smartphone"
                                                                              />
                                                                        </span>
                                                                        <span className="name-title">
                                                                              Làm Đẹp - Sức Khỏe
                                                                        </span>
                                                                  </span>
                                                            </li>
                                                            <li>
                                                                  <span className="have-title">
                                                                        <span className="menu-img">
                                                                              <img
                                                                                    src={
                                                                                          SvgIcon.MILKBOTTLE_ICON
                                                                                    }
                                                                                    alt="Smartphone"
                                                                              />
                                                                        </span>
                                                                        <span className="name-title">
                                                                              Xe Máy, Ô Tô, Xe Đạp
                                                                        </span>
                                                                  </span>
                                                            </li>
                                                      </ul>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className="feed-column feed-col-66">
                                    <div className="feed-column__wrap">
                                          <img src={BackGround} alt="" />
                                    </div>
                              </div>
                              <div className="feed-column feed-col-33">
                                    <div className="feed-column__wrap">
                                          <div className="feed-column__container">
                                                <div className="mega-left__title">
                                                      <span>
                                                            <FontAwesomeIcon
                                                                  icon={faListUl}
                                                                  className="margin-15px"
                                                            />
                                                            DANH MỤC
                                                      </span>
                                                </div>
                                                <div className="mega-left__list">
                                                      <ul>
                                                            <li>
                                                                  <span className="have-title">
                                                                        <span className="menu-img">
                                                                              <img
                                                                                    src={
                                                                                          SvgIcon.SMARTPHONE_ICON
                                                                                    }
                                                                                    alt="Smartphone"
                                                                              />
                                                                        </span>
                                                                        <span className="name-title">
                                                                              Điện Thoại - Máy Tính
                                                                              Bảng
                                                                        </span>
                                                                  </span>
                                                            </li>
                                                            <li>
                                                                  <span className="have-title">
                                                                        <span className="menu-img">
                                                                              <img
                                                                                    src={
                                                                                          SvgIcon.TV_ICON
                                                                                    }
                                                                                    alt="Smartphone"
                                                                              />
                                                                        </span>
                                                                        <span className="name-title">
                                                                              Phụ Kiện - Thiết Bị Số
                                                                        </span>
                                                                  </span>
                                                            </li>
                                                            <li>
                                                                  <span className="have-title">
                                                                        <span className="menu-img">
                                                                              <img
                                                                                    src={
                                                                                          SvgIcon.HEADPHONE_ICON
                                                                                    }
                                                                                    alt="Smartphone"
                                                                              />
                                                                        </span>
                                                                        <span className="name-title">
                                                                              Phụ Kiện - Thiết Bị Số
                                                                        </span>
                                                                  </span>
                                                            </li>
                                                            <li>
                                                                  <span className="have-title">
                                                                        <span className="menu-img">
                                                                              <img
                                                                                    src={
                                                                                          SvgIcon.LAPTOP_ICON
                                                                                    }
                                                                                    alt="Smartphone"
                                                                              />
                                                                        </span>
                                                                        <span className="name-title">
                                                                              Laptop - Thiết Bị IT
                                                                        </span>
                                                                  </span>
                                                            </li>
                                                            <li>
                                                                  <span className="have-title">
                                                                        <span className="menu-img">
                                                                              <img
                                                                                    src={
                                                                                          SvgIcon.CAMERA_ICON
                                                                                    }
                                                                                    alt="Smartphone"
                                                                              />
                                                                        </span>
                                                                        <span className="name-title">
                                                                              Máy Ảnh - Quay Phim
                                                                        </span>
                                                                  </span>
                                                            </li>
                                                            <li>
                                                                  <span className="have-title">
                                                                        <span className="menu-img">
                                                                              <img
                                                                                    src={
                                                                                          SvgIcon.KITCHEN_ICON
                                                                                    }
                                                                                    alt="Smartphone"
                                                                              />
                                                                        </span>
                                                                        <span className="name-title">
                                                                              Điện Gia Dụng
                                                                        </span>
                                                                  </span>
                                                            </li>
                                                            <li>
                                                                  <span className="have-title">
                                                                        <span className="menu-img">
                                                                              <img
                                                                                    src={
                                                                                          SvgIcon.POT_ICON
                                                                                    }
                                                                                    alt="Smartphone"
                                                                              />
                                                                        </span>
                                                                        <span className="name-title">
                                                                              Nhà Cửa Đời Sống
                                                                        </span>
                                                                  </span>
                                                            </li>
                                                            <li>
                                                                  <span className="have-title">
                                                                        <span className="menu-img">
                                                                              <img
                                                                                    src={
                                                                                          SvgIcon.FOOD_ICON
                                                                                    }
                                                                                    alt="Smartphone"
                                                                              />
                                                                        </span>
                                                                        <span className="name-title">
                                                                              Hàng Tiêu Dùng
                                                                        </span>
                                                                  </span>
                                                            </li>
                                                            <li>
                                                                  <span className="have-title">
                                                                        <span className="menu-img">
                                                                              <img
                                                                                    src={
                                                                                          SvgIcon.MILKBOTTLE_ICON
                                                                                    }
                                                                                    alt="Smartphone"
                                                                              />
                                                                        </span>
                                                                        <span className="name-title">
                                                                              Đồ Chơi, Mẹ Và Em Bé
                                                                        </span>
                                                                  </span>
                                                            </li>
                                                            <li>
                                                                  <span className="have-title">
                                                                        <span className="menu-img">
                                                                              <img
                                                                                    src={
                                                                                          SvgIcon.LIPSTICK_ICON
                                                                                    }
                                                                                    alt="Smartphone"
                                                                              />
                                                                        </span>
                                                                        <span className="name-title">
                                                                              Làm Đẹp - Sức Khỏe
                                                                        </span>
                                                                  </span>
                                                            </li>
                                                            <li>
                                                                  <span className="have-title">
                                                                        <span className="menu-img">
                                                                              <img
                                                                                    src={
                                                                                          SvgIcon.MILKBOTTLE_ICON
                                                                                    }
                                                                                    alt="Smartphone"
                                                                              />
                                                                        </span>
                                                                        <span className="name-title">
                                                                              Xe Máy, Ô Tô, Xe Đạp
                                                                        </span>
                                                                  </span>
                                                            </li>
                                                      </ul>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
