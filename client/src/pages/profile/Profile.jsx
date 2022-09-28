import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Navbar/Header';
import Radio from '../../components/Radio/Radio';
import Date from './Date';
import { Link } from 'react-router-dom';
import { EditIcon } from '../../components/Icon/Icon';
import User from '../../assests/images/user.png';
export default function Profile() {
      const email = 'hungvtvt01@gmail.com';
      const phone = '0365256850';
      const [showitem, setShowitem] = useState([
            {
                  id: 0,
                  isShow: false,
            },
            { id: 1, isShow: false },
            { id: 2, isShow: false },
      ]);
      console.log(showitem);
      const [selected, setSelected] = useState('first');

      const ConvertStringEmail = (email) => {
            const index = email.indexOf('@');
            const tempString = '*'.repeat(index - 2);
            return email.substring(0, 2) + tempString + email.substring(index, email.length);
      };

      const ConvertPhoneNumber = (phone) => {
            const index = phone.length - 2;
            const tempString = '*'.repeat(index);
            return tempString + phone.substring(index, phone.length);
      };
      return (
            <>
                  <Header />
                  <div className="mt-[40px] pb-[30px]">
                        <div className="max-w-8xl mx-auto pl-[10px]">
                              <div className="flex pb-[40px]">
                                    <div className="w-[280px] mr-[20px]">
                                          <div className="flex pt-[15px] pb-[10px] border-b">
                                                <a href="#" className="w-[60px] h-[60px] ">
                                                      <div className="rounded-full bg-user-image w-full h-full bg-center bg-no-repeat"></div>
                                                      {/* <div className="rounded-full relative border inline-block">
                                                            <div className="w-full relative overflow-hidden rounded-full "></div>
                                                      </div> */}
                                                </a>
                                                <div className="flex-1 flex-col flex justify-center pl-[15px]">
                                                      <div className="font-semibold min-h-[16px] text-[#333] text-[14px]">
                                                            Hungnguyen09092001
                                                      </div>
                                                      <div className="flex items-center">
                                                            <span className="text-[#888] capitalize inline overflow-hidden">
                                                                  <EditIcon
                                                                        className={
                                                                              'inline mr-[5px]'
                                                                        }
                                                                  />
                                                                  Sửa hồ sơ
                                                            </span>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="mt-[27px]">
                                                <div className="relative">
                                                      <div className="">
                                                            <Link
                                                                  to="/profile"
                                                                  className="mb-[15px] flex items-center text-[#333]"
                                                            >
                                                                  <div className="flex items-center justify-center w-[20px] h-[20px] leading-5 text-center rounded-full mr-[10px]">
                                                                        <img
                                                                              src={User}
                                                                              alt="#"
                                                                              className="w-full h-full"
                                                                        />
                                                                  </div>
                                                                  <div className="leading-4 ">
                                                                        <span className="font-medium mr-[5px] capitalize text-[14px]">
                                                                              Tài khoản của tôi
                                                                        </span>
                                                                  </div>
                                                            </Link>
                                                      </div>
                                                      <div className="">
                                                            <Link
                                                                  to="/profile"
                                                                  className="mb-[15px] flex items-center text-additional-black"
                                                            >
                                                                  <div className="flex items-center justify-center w-[20px] h-[20px] leading-5 text-center rounded-full mr-[10px]"></div>
                                                                  <div className="leading-4 ">
                                                                        <span className="font-medium mr-[5px] capitalize text-[14px]">
                                                                              Hồ sơ
                                                                        </span>
                                                                  </div>
                                                            </Link>
                                                      </div>
                                                      <div className="">
                                                            <Link
                                                                  to="/profile"
                                                                  className="mb-[15px] flex items-center text-additional-black"
                                                            >
                                                                  <div className="flex items-center justify-center w-[20px] h-[20px] leading-5 text-center rounded-full mr-[10px]"></div>
                                                                  <div className="leading-4 ">
                                                                        <span className="font-medium mr-[5px] capitalize text-[14px]">
                                                                              Ngân hàng
                                                                        </span>
                                                                  </div>
                                                            </Link>
                                                      </div>
                                                      <div className="">
                                                            <Link
                                                                  to="/profile"
                                                                  className="mb-[15px] flex items-center text-additional-black"
                                                            >
                                                                  <div className="flex items-center justify-center w-[20px] h-[20px] leading-5 text-center rounded-full mr-[10px]"></div>
                                                                  <div className="leading-4 ">
                                                                        <span className="font-medium mr-[5px] capitalize text-[14px]">
                                                                              Địa chỉ
                                                                        </span>
                                                                  </div>
                                                            </Link>
                                                      </div>
                                                      <div className="">
                                                            <Link
                                                                  to="/profile"
                                                                  className="mb-[15px] flex items-center text-additional-black"
                                                            >
                                                                  <div className="flex items-center justify-center w-[20px] h-[20px] leading-5 text-center rounded-full mr-[10px]"></div>
                                                                  <div className="leading-4 ">
                                                                        <span className="font-medium mr-[5px] capitalize text-[14px]">
                                                                              Đổi mật khẩu
                                                                        </span>
                                                                  </div>
                                                            </Link>
                                                      </div>
                                                      <div className="">
                                                            <Link
                                                                  to="/profile"
                                                                  className="mb-[15px] flex items-center text-[#333]"
                                                            >
                                                                  <div className="flex items-center justify-center w-[20px] h-[20px] leading-5 text-center rounded-full mr-[10px]">
                                                                        <img
                                                                              src={User}
                                                                              alt="#"
                                                                              className="w-full h-full"
                                                                        />
                                                                  </div>
                                                                  <div className="leading-4 ">
                                                                        <span className="font-medium mr-[5px] capitalize text-[14px]">
                                                                              Đơn mua
                                                                        </span>
                                                                  </div>
                                                            </Link>
                                                      </div>
                                                      <div className="">
                                                            <Link
                                                                  to="/profile"
                                                                  className="mb-[15px] flex items-center text-[#333]"
                                                            >
                                                                  <div className="flex items-center justify-center w-[20px] h-[20px] leading-5 text-center rounded-full mr-[10px]">
                                                                        <img
                                                                              src={User}
                                                                              alt="#"
                                                                              className="w-full h-full"
                                                                        />
                                                                  </div>
                                                                  <div className="leading-4 ">
                                                                        <span className="font-medium mr-[5px] capitalize text-[14px]">
                                                                              Thông báo
                                                                        </span>
                                                                  </div>
                                                            </Link>
                                                      </div>
                                                      <div className="">
                                                            <Link
                                                                  to="/profile"
                                                                  className="mb-[15px] flex items-center text-[#333]"
                                                            >
                                                                  <div className="flex items-center justify-center w-[20px] h-[20px] leading-5 text-center rounded-full mr-[10px]">
                                                                        <img
                                                                              src={User}
                                                                              alt="#"
                                                                              className="w-full h-full"
                                                                        />
                                                                  </div>
                                                                  <div className="leading-4 ">
                                                                        <span className="font-medium mr-[5px] capitalize text-[14px]">
                                                                              Kho voucher
                                                                        </span>
                                                                  </div>
                                                            </Link>
                                                      </div>
                                                      <div className="">
                                                            <Link
                                                                  to="/profile"
                                                                  className="mb-[15px] flex items-center text-[#333]"
                                                            >
                                                                  <div className="flex items-center justify-center w-[20px] h-[20px] leading-5 text-center rounded-full mr-[10px]">
                                                                        <img
                                                                              src={User}
                                                                              alt="#"
                                                                              className="w-full h-full"
                                                                        />
                                                                  </div>
                                                                  <div className="leading-4 ">
                                                                        <span className="font-medium mr-[5px] capitalize text-[14px]">
                                                                              Shopee xu
                                                                        </span>
                                                                  </div>
                                                            </Link>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="flex-auto rounded">
                                          <div className="shadow-3xl px-[20px] bg-white py-[20px]">
                                                <div className="border-b pb-[20px]">
                                                      <h1 className="capitalize text-[18px] text-[#333] leading-6">
                                                            Hồ sơ của tôi
                                                      </h1>
                                                      <div className="text-[14px] leading-4 text-[#555] mt-[6px]">
                                                            Quản lý thông tin hồ sơ để bảo mật tài
                                                            khoản
                                                      </div>
                                                </div>
                                                <div className="pt-[30px] flex items-start ">
                                                      <div className="pr-[50px] w-full">
                                                            <form
                                                                  action=""
                                                                  method="post"
                                                                  className="w-full"
                                                            >
                                                                  <div className="mb-[30px] ">
                                                                        <div className="flex items-center">
                                                                              <div className="w-[20%] capitalize text-right text-additional-black overflow-hidden text-[14px]">
                                                                                    <label>
                                                                                          Tên đăng
                                                                                          nhập
                                                                                    </label>
                                                                              </div>
                                                                              <div className="w-[80%] pl-[20px]">
                                                                                    <div className="flex items-center">
                                                                                          <div className="text-[#333] text-[14px] ">
                                                                                                hungnguyen09092001
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="mb-[30px] ">
                                                                        <div className="flex items-center">
                                                                              <div className="w-[20%] capitalize text-right text-additional-black overflow-hidden text-[14px]">
                                                                                    <label>
                                                                                          Tên
                                                                                    </label>
                                                                              </div>
                                                                              <div className="w-[80%] pl-[20px]">
                                                                                    <div className="flex items-center bg-white rounded-sm border text-[#222] h-[40px] px-[10px] py-[10px]">
                                                                                          <input
                                                                                                type="text"
                                                                                                className="flex-1 text-[14px] bg-transparent focus:outline-none"
                                                                                          />
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="mb-[30px] ">
                                                                        <div className="flex items-center">
                                                                              <div className="w-[20%] capitalize text-right text-additional-black overflow-hidden text-[14px]">
                                                                                    <label>
                                                                                          Email
                                                                                    </label>
                                                                              </div>
                                                                              <div className="w-[80%] pl-[20px]">
                                                                                    <div className="flex items-center">
                                                                                          <div className="text-[#333] text-[14px] ">
                                                                                                {ConvertStringEmail(
                                                                                                      email,
                                                                                                )}
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="mb-[30px] ">
                                                                        <div className="flex items-center">
                                                                              <div className="w-[20%] capitalize text-right text-additional-black overflow-hidden text-[14px]">
                                                                                    <label>
                                                                                          Số điện
                                                                                          thoại
                                                                                    </label>
                                                                              </div>
                                                                              <div className="w-[80%] pl-[20px]">
                                                                                    <div className="flex items-center">
                                                                                          <div className="text-[#333] text-[14px] ">
                                                                                                {ConvertPhoneNumber(
                                                                                                      phone,
                                                                                                )}
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="mb-[30px] ">
                                                                        <div className="flex items-center">
                                                                              <div className="w-[20%] capitalize text-right text-additional-black overflow-hidden text-[14px]">
                                                                                    <label>
                                                                                          Tên shop
                                                                                    </label>
                                                                              </div>
                                                                              <div className="w-[80%] pl-[20px]">
                                                                                    <div className="flex items-center bg-white rounded-sm border text-[#222] h-[40px] px-[10px] py-[10px]">
                                                                                          <input
                                                                                                type="text"
                                                                                                className="flex-1 text-[14px] bg-transparent focus:outline-none"
                                                                                          />
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="mb-[30px] ">
                                                                        <div className="flex items-center">
                                                                              <div className="w-[20%] capitalize text-right text-additional-black overflow-hidden text-[14px]">
                                                                                    <label>
                                                                                          Giới tính
                                                                                    </label>
                                                                              </div>
                                                                              <div className="w-[80%] pl-[20px]">
                                                                                    <div className="flex items-center bg-white text-[#222] h-[40px] px-[10px] py-[10px]">
                                                                                          <Radio
                                                                                                value="first"
                                                                                                selected={
                                                                                                      selected
                                                                                                }
                                                                                                text="Nam"
                                                                                                onChange={
                                                                                                      setSelected
                                                                                                }
                                                                                                className="mr-[20px]"
                                                                                          />
                                                                                          <Radio
                                                                                                value="second"
                                                                                                selected={
                                                                                                      selected
                                                                                                }
                                                                                                text="Nữ"
                                                                                                onChange={
                                                                                                      setSelected
                                                                                                }
                                                                                                className="mr-[20px]"
                                                                                          />
                                                                                          <Radio
                                                                                                value="third"
                                                                                                selected={
                                                                                                      selected
                                                                                                }
                                                                                                text="Khác"
                                                                                                onChange={
                                                                                                      setSelected
                                                                                                }
                                                                                                className="mr-[20px]"
                                                                                          />
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="mb-[30px] ">
                                                                        <div className="flex items-center">
                                                                              <div className="w-[20%] capitalize text-right text-additional-black overflow-hidden text-[14px]">
                                                                                    <label>
                                                                                          Ngày sinh
                                                                                    </label>
                                                                              </div>
                                                                              <div className="w-[80%] pl-[20px]">
                                                                                    <div className="flex items-center bg-white text-[#222] h-[40px] py-[10px]">
                                                                                          <div className="flex w-full justify-between">
                                                                                                <Date
                                                                                                      showitem={
                                                                                                            showitem
                                                                                                      }
                                                                                                      onChange={
                                                                                                            setShowitem
                                                                                                      }
                                                                                                />
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div className="mb-[60px]">
                                                                        <div className="flex items-center">
                                                                              <div className="w-[20%] capitalize text-right text-additional-black overflow-hidden text-[14px]"></div>
                                                                              <div className="w-[80%] pl-[20px]">
                                                                                    <button
                                                                                          type="submit"
                                                                                          className="text-white h-[40px] min-w-[70px] max-w-[220px] bg-[#ff9600] rounded-sm"
                                                                                    >
                                                                                          Lưu
                                                                                    </button>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </form>
                                                      </div>
                                                      <div className="w-[320px] border-l flex justify-center">
                                                            <div className="flex flex-col items-center">
                                                                  <div className="h-[100px] w-[100px] my-[20px] flex justify-center relative">
                                                                        <div className="rounded-full bg-user-image w-full h-full bg-center bg-no-repeat"></div>
                                                                  </div>
                                                                  <input
                                                                        type="file"
                                                                        className="hidden"
                                                                  />
                                                                  <button className="text-[#555] border bg-white shadow-min min-w-[70px] px-[20px] h-[40px] max-w-[220px] relative hover:bg-blur-grey">
                                                                        Chọn ảnh
                                                                  </button>
                                                                  <div className="mt-[14px] ">
                                                                        <div className="text-[#999] text-[14px] leading-5">
                                                                              Dung lượng file tối đa
                                                                              1 MB
                                                                        </div>
                                                                        <div className="text-[#999] text-[14px] leading-5">
                                                                              Định dạng: .JPEG, .PNG
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
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
