import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function UserProduct() {
      const [products, setProducts] = useState([]);
      useEffect(() => {
            console.log(2);
            const fetchProducts = async (req, res) => {
                  res = await axios.get('/products');
                  setProducts(res.data);
            };
            fetchProducts();
      }, []);
      return (
            <div className="pb-[30px]">
                  <div className="max-w-8xl mx-auto px-[30px] bg-white rounded shadow-3xl pb-[10px]">
                        <div className="flex h-[60px] items-center">
                              <div className="text-[18px] font-medium text-[#666]">
                                    SẢN PHẨM BẠN ĐÃ XEM
                              </div>
                        </div>
                        <div className="grid grid-cols-5 gap-x-2.5 rounded">
                              {products.map((product, index) => {
                                    if (product.numReviews > 0) {
                                          return (
                                                <div
                                                      className="group h-[330px] cursor-pointer py-[10px] px-[10px]"
                                                      key={index}
                                                >
                                                      <Link to={`/products/${product._id}`}>
                                                            <div className="h-[240px] flex items-center overflow-hidden">
                                                                  <img
                                                                        width={220}
                                                                        height={220}
                                                                        src={product.image}
                                                                        className="h-auto mx-auto max-w-full mt-[10px] duration-500 ease-in-out
                                                                  group-hover:mt-[0px] group-hover:ease-in-out"
                                                                        alt=""
                                                                  />
                                                            </div>
                                                      </Link>
                                                      <Link to={`/products/${product._id}`}>
                                                            <h3 className="group-hover:text-[#288ad6] text-[#666] text-[16px]">
                                                                  {product.name}
                                                            </h3>
                                                      </Link>
                                                      <strong className="price">
                                                            3.190.000₫
                                                            <small className="text-[#666] ml-[10px]">
                                                                  -17%
                                                            </small>
                                                      </strong>
                                                </div>
                                          );
                                    }
                              })}
                        </div>
                  </div>
            </div>
      );
}
