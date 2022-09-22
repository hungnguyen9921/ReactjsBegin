import React from 'react';
import ImageView from '../../assests/images/iphone13.jpg';
import { SearchIcon, QuitIcon } from '../Icon/Icon';
import ThreeSixty from 'react-360-view';
export default function PreviewProduct(props) {
      const { onChange, view } = props;
      console.log(view);
      return (
            <>
                  <div className="w-full bg-white">
                        <div className="w-8/12 mx-auto h-[100px] flex-col py-[20px] bg-white">
                              <div className="flex justify-between w-full items-center flex pr-[20px] mb-[10px]">
                                    <div className="flex items-center">
                                          <img width={65} src={ImageView} alt="" />
                                          <div className="flex-col w-full">
                                                <strong className="block">
                                                      iPhone 13 Pro Max 64GB
                                                </strong>
                                                <span className="text-[#ee4d2d] font-bold">
                                                      3.190.000
                                                </span>
                                          </div>
                                    </div>
                                    <div className="text-center">
                                          <button className="ml-[5px] text-white bg-[#ff9600] rounded py-[8px] px-[40px] uppercase text-[14px]">
                                                Mua Ngay
                                          </button>
                                          <button className="ml-[5px] text-white bg-[#288AD6] uppercase rounded py-[8px] px-[20px] text-[14px]">
                                                Mua Trả Góp 0%
                                          </button>
                                          <button className="ml-[5px] text-white bg-[#288AD6] rounded uppercase py-[8px] px-[20px] text-[14px]">
                                                Trả Góp Qua Thẻ 0%
                                          </button>
                                    </div>
                              </div>
                              <div className="flex justify-end items-center w-full mb-[10px] pr-[20px]">
                                    <div className="">
                                          <SearchIcon className={'mr-[10px] cursor-pointer'} />
                                    </div>
                                    <div
                                          className="flex items-center cursor-pointer"
                                          onClick={() => onChange(!view)}
                                    >
                                          <QuitIcon className={'mr-[5px]'} />
                                          <p className="text-[24px]">Đóng</p>
                                    </div>
                              </div>

                              <ThreeSixty
                                    amount={36}
                                    imagePath="https://cdn.tgdd.vn/Products/Images/42/226935/Image360/"
                                    fileName="samsung-galaxy-z-fold-3-360-org-{index}.jpg"
                                    autoplay
                                    loop={5}
                              />
                        </div>
                  </div>
            </>
      );
}
