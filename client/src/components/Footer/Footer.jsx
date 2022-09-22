import React from 'react';

export default function Footer() {
      return (
            <footer className="pb-[30px] footer">
                  <div className="max-w-8xl mx-auto px-[30px] bg-white rounded shadow-3xl pb-[30px]">
                        <div className="grid grid-cols-5 pt-[20px]">
                              <div className="">
                                    <div className="uppercase mb-[15px] font-bold text-[#666]">
                                          hỗ trợ khách hàng
                                    </div>
                                    <ul className="leading-7 text-[14px]">
                                          <li className="text-[#D0021C] font-bold text-[14px]">
                                                Hotline chăm sóc khách hàng: 1900-6035
                                          </li>
                                          <li>Các câu hỏi thường gặp</li>
                                          <li>Gửi yêu cầu hỗ trợ</li>
                                          <li>Hướng dẫn đặt hàng</li>
                                          <li>Phương thức vận chuyển</li>
                                          <li>Chính sách đổi trả</li>
                                          <li>Chính sách hàng nhập khẩu</li>
                                          <li>Hỗ trợ khách hàng: hotro@eMarket.vn</li>
                                          <li>Báo lỗi bảo mật: security@eMarket.vn</li>
                                    </ul>
                              </div>
                              <div className="uppercase font-bold text-[#666] ">về marketing</div>
                              <div className="uppercase font-bold text-[#666]">
                                    hợp tác và liên kết
                              </div>
                              <div className="uppercase font-bold text-[#666]">
                                    phương thức thanh toán
                              </div>
                              <div className="uppercase font-bold text-[#666]">
                                    kết nối với chúng tôi
                              </div>
                        </div>
                  </div>
            </footer>
      );
}
