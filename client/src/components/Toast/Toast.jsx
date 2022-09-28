import React from 'react';
import { SuccessIcon } from '../Icon/Icon';
export default function Toast() {
      return (
            <div className="flex justify-center fixed translate-x-[-1/2] translate-y-[-1/2] left-[50%] top-[50%]">
                  <div className="border-2 px-[40px] py-[20px] text-white bg-blur-black inline-block text-center min-w-[300px] text-[17px] max-w-[400px] flex items-center flex-col">
                        <div className="w-[60px] h-[60px] bg-[#00bfa5] rounded-full items-center flex text-center justify-center mb-[20px]">
                              <SuccessIcon />
                        </div>
                        <p>Sản phẩm đã được thêm vào giỏ hàng</p>
                  </div>
            </div>
      );
}
