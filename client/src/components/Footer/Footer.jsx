import React from 'react';
import { Icons, YoutubeIcon, ZaloIcon } from '../Icon/Icon';
import { FaceBookIcon } from '../Icon/Icon';
import QsanImage from '../../assests/images/qscan.jpg';
export default function Footer() {
      return (
            <footer className="pb-[30px] footer">
                  <div className="w-full bg-white">
                        <div className="max-w-8xl mx-auto px-[30px] pb-[30px]">
                              <div className="grid grid-cols-5 pt-[20px]">
                                    <div className="pr-[10px]">
                                          <div className="uppercase mb-[15px] font-bold text-[#666]">
                                                hỗ trợ khách hàng
                                          </div>
                                          <ul className="leading-7 text-[14px] cursor-pointer">
                                                <li className="text-[#D0021C] font-bold text-[14px]">
                                                      Hotline chăm sóc khách hàng: 1900-6035
                                                </li>
                                                <li className="hover:underline">
                                                      Các câu hỏi thường gặp
                                                </li>
                                                <li className="hover:underline">
                                                      Gửi yêu cầu hỗ trợ
                                                </li>
                                                <li className="hover:underline">
                                                      Hướng dẫn đặt hàng
                                                </li>
                                                <li className="hover:underline">
                                                      Phương thức vận chuyển
                                                </li>
                                                <li className="hover:underline">
                                                      Chính sách đổi trả
                                                </li>
                                                <li className="hover:underline">
                                                      Chính sách hàng nhập khẩu
                                                </li>
                                                <li className="hover:underline">
                                                      Hỗ trợ khách hàng: hotro@eMarket.vn
                                                </li>
                                                <li className="hover:underline">
                                                      Báo lỗi bảo mật: security@eMarket.vn
                                                </li>
                                          </ul>
                                    </div>
                                    <div className="pr-[10px]">
                                          <div className="uppercase font-bold text-[#666] mb-[15px]">
                                                về marketing
                                          </div>
                                          <ul className="leading-7 text-[14px] cursor-pointer">
                                                <li className="hover:underline">
                                                      Giới thiệu eMarket
                                                </li>
                                                <li className="hover:underline">Tuyển Dụng</li>
                                                <li className="hover:underline">
                                                      Chính sách bảo mật thanh toán
                                                </li>
                                                <li className="hover:underline">
                                                      Chính sách bảo mật thông tin cá nhân
                                                </li>
                                                <li className="hover:underline">
                                                      Chính sách giải quyết khiếu naị
                                                </li>
                                                <li className="hover:underline">
                                                      Điều khoản sử dụng
                                                </li>
                                                <li className="hover:underline">
                                                      Giới thiệu eMarket xu
                                                </li>
                                                <li className="hover:underline">
                                                      Bán hàng doanh nghiệp
                                                </li>
                                          </ul>
                                    </div>
                                    <div className="pr-[10px]">
                                          <div className="uppercase font-bold text-[#666] mb-[15px]">
                                                hợp tác và liên kết
                                          </div>
                                          <ul className="leading-7 text-[14px] cursor-pointer">
                                                <li className="hover:underline">
                                                      Quy chế hoạt động Sàn GDTMĐT
                                                </li>
                                                <li className="hover:underline">
                                                      Bán hàng cùng eMarket
                                                </li>
                                          </ul>
                                    </div>
                                    <div className="pr-[10px]">
                                          <div className="uppercase font-bold text-[#666] mb-[15px]">
                                                phương thức thanh toán
                                          </div>
                                          <ul className="flex flex-wrap cursor-pointer">
                                                {Icons.map((Icon, index) => {
                                                      return (
                                                            <li
                                                                  className="mr-[5px] mb-[5px]"
                                                                  key={index}
                                                            >
                                                                  <div className="px-[10px] rounded shadow-4xl">
                                                                        <Icon />
                                                                  </div>
                                                            </li>
                                                      );
                                                })}
                                          </ul>
                                    </div>
                                    <div className="pr-[10px]">
                                          <div className="uppercase font-bold text-[#666] mb-[15px]">
                                                kết nối với chúng tôi
                                          </div>
                                          <p className="inline">
                                                <FaceBookIcon
                                                      className={'inline mr-[10px] cursor-pointer'}
                                                />
                                                <YoutubeIcon
                                                      className={'inline mr-[10px] cursor-pointer'}
                                                />
                                                <ZaloIcon
                                                      className={'inline mr-[10px] cursor-pointer'}
                                                />
                                          </p>
                                          <h4 className="uppercase font-bold text-[#666] mt-[20px]">
                                                ứng dụng trên điện thoại
                                          </h4>
                                          <div className="flex mt-[20px]">
                                                <img
                                                      src={QsanImage}
                                                      alt="#"
                                                      className="h-[80px] w-[80px] mr-[10px]"
                                                />
                                                <div className="flex flex-col justify-between items-center h-[80px]">
                                                      <a
                                                            rel="nofollow noreferrer"
                                                            href="https://itunes.apple.com/vn/app/id958100553"
                                                            target="_blank"
                                                            className="h-[36px]"
                                                      >
                                                            <img
                                                                  src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png"
                                                                  width={122}
                                                                  alt=""
                                                            />
                                                      </a>
                                                      <a
                                                            rel="nofollow noreferrer"
                                                            href="https://play.google.com/store/apps/details?id=vn.tiki.app.tikiandroid"
                                                            target="_blank"
                                                            className="h-[36px]"
                                                      >
                                                            <img
                                                                  src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png"
                                                                  width={122}
                                                                  alt=""
                                                            />
                                                      </a>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </footer>
      );
}
