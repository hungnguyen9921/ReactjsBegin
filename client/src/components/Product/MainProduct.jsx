import React from 'react';
import { MainProducts } from '../../assests/images/images';
export default function MainProduct() {
      return (
            <div className="pb-[30px]">
                  <div className="max-w-8xl mx-auto px-[30px] bg-white rounded shadow-3xl pb-[30px]">
                        <div className="flex h-[60px] items-center">
                              <div className="text-[18px] font-medium text-[#666]">
                                    NGÀNH HÀNG QUAN TÂM
                              </div>
                        </div>
                        <div className="grid grid-cols-10 border-t border-l rounded">
                              {MainProducts.map((MainProduct, Index) => (
                                    <div
                                          className="h-[170px] border-r border-b cursor-pointer"
                                          key={Index}
                                    >
                                          <div className="flex flex-col justify-center items-center h-[100%]">
                                                <div className="w-[70%] h-[70%] mt-[10px]">
                                                      <div className="h-full">
                                                            <img
                                                                  src={MainProduct}
                                                                  alt="#"
                                                                  className="object-cover h-full w-full"
                                                            />
                                                      </div>
                                                </div>
                                                <div className="w-full h-[30%] text-[16px] text-center ">
                                                      Áo nam
                                                </div>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </div>
      );
}
