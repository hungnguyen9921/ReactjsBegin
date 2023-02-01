import React, { useState } from 'react';
import { SearchIcon, QuitIcon } from '../Icon/Icon';
import { convertPrice } from '../../utils/Fuction';
import React360Viewer from './React360Viewer';

export default function PreviewProduct(props) {
      const { onChange, view, products } = props;
      const [showMagnifier, setShowMagnifier] = useState(false);
      return (
            <>
                  <div className="w-full max-h-[100vh] bg-white">
                        <div className="w-8/12 mx-auto h-[100px] flex-col py-[20px] bg-white">
                              <div className="justify-between w-full items-center flex pr-[20px] mb-[10px]">
                                    <div className="flex items-center">
                                          <img width={65} src={products.image} alt="" />
                                          <div className="flex-col w-full">
                                                <strong className="block">{products.name}</strong>
                                                <span className="text-[#ee4d2d] font-bold">
                                                      {convertPrice(products.price.toString())}
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
                                    <div
                                          className=""
                                          onClick={() => setShowMagnifier(!showMagnifier)}
                                    >
                                          <SearchIcon
                                                className={'mr-[10px] cursor-pointer z-[999]'}
                                          />
                                    </div>
                                    <div
                                          className="flex items-center cursor-pointer"
                                          onClick={() => onChange(!view)}
                                    >
                                          <QuitIcon className={'mr-[5px]'} />
                                          <p className="text-[24px]">Đóng</p>
                                    </div>
                              </div>
                        </div>

                        <React360Viewer
                              amount={36}
                              imagePath="https://cdn.tgdd.vn/Products/Images/42/226935/Image360/"
                              fileName="samsung-galaxy-z-fold-3-360-org-{index}.jpg"
                              autoplay
                              showMagnifier={showMagnifier}
                        />
                  </div>
            </>
      );
}
