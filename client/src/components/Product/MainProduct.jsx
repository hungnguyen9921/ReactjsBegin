import React, { useState, useEffect } from 'react';
import { MainProducts } from '../../assests/images/images';
import axios from 'axios';
export default function MainProduct() {
      const [products, setProducts] = useState([]);
      useEffect(() => {
            const fetchProducts = async (req, res) => {
                  res = await axios.get('/products');
                  setProducts(res.data);
            };
            fetchProducts();
      }, []);
      return (
            <div className="pb-[30px]">
                  <div className="max-w-8xl mx-auto px-[30px] bg-white rounded shadow-3xl pb-[30px]">
                        <div className="flex h-[60px] items-center">
                              <div className="text-[18px] font-medium text-[#666]">
                                    NGÀNH HÀNG QUAN TÂM
                              </div>
                        </div>
                        <div className="grid grid-cols-10 border-t border-l rounded">
                              {products.map((product, Index) => (
                                    <div
                                          className="h-[160px] border-r border-b cursor-pointer"
                                          key={Index}
                                    >
                                          <div className="flex flex-col justify-center items-center h-[100%]">
                                                <div className="w-[70%] h-[70%] mt-[10px]">
                                                      <div className="h-full">
                                                            <img
                                                                  src={product.image}
                                                                  alt="#"
                                                                  className="object-cover h-full w-full"
                                                            />
                                                      </div>
                                                </div>
                                                <div className="w-full h-[30%] text-[16px] text-center ">
                                                      {product.name}
                                                </div>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </div>
      );
}
