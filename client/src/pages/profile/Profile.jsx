import React, { useContext } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Navbar/Header';
import { AuthContext } from '../../context/AuthProvider';
import { EditIcon } from '../../components/Icon/Icon';
import User from '../../assests/images/user.png';
import UserOrder from '../../assests/images/userorder.png';
import Notification from '../../assests/images/notification.png';
import Voucher from '../../assests/images/voucherstore.png';
import MarketXu from '../../assests/images/marketxu.png';
import ProfileLink from '../../components/Profile/ProfileLink';
import ProfileInfo from '../../components/Profile/ProfileInfo';
export default function Profile() {
      const { user } = useContext(AuthContext);
      console.log(user, 1);
      const dataLink = [
            {
                  path: '/user/profile',
                  image: User,
                  className: 'text-[#333]',
                  text: 'Tài khoản của tôi',
            },
            {
                  path: '/user/profile',
                  image: '',
                  className: 'text-additional-black',
                  text: 'Hồ sơ',
            },
            {
                  path: '/user/profile',
                  image: '',
                  className: 'text-additional-black',
                  text: 'Ngân hàng',
            },
            {
                  path: '/user/profile',
                  image: '',
                  className: 'text-additional-black',
                  text: 'Địa chỉ',
            },
            {
                  path: '/user/profile',
                  image: '',
                  className: 'text-additional-black',
                  text: 'Đổi mật khẩu',
            },
            {
                  path: '/user/profile',
                  image: UserOrder,
                  className: 'text-[#333]',
                  text: 'Đơn mua',
            },
            {
                  path: '/user/profile',
                  image: Notification,
                  className: 'text-[#333]',
                  text: 'Thông báo',
            },
            {
                  path: '/user/profile',
                  image: Voucher,
                  className: 'text-[#333]',
                  text: 'Kho voucher',
            },
            {
                  path: '/user/profile',
                  image: MarketXu,
                  className: 'text-[#333]',
                  text: 'Emarket xu',
            },
      ];

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
                                                      <ProfileLink dataLink={dataLink} />
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
                                                <ProfileInfo user={user} />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <Footer />
            </>
      );
}
