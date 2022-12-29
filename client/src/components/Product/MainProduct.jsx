import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../../redux/Actions/ProductActions';
import Loading from '../Loading/Loading';
export default function MainProduct() {
      const dispatch = useDispatch();

      const productList = useSelector((state) => state.productList);
      const { loading, error, products } = productList;

      useEffect(() => {
            dispatch(listProduct());
      }, [dispatch]);

      return (
            <>
                  {!loading ? (
                        <section className="pb-[30px] main__product">
                              <div className="max-w-8xl mx-auto px-[30px] bg-white rounded shadow-3xl pb-[30px]">
                                    <div className="flex h-[60px] items-center">
                                          <div className="text-[18px] font-medium text-[#666]">
                                                NGÀNH HÀNG QUAN TÂM
                                          </div>
                                    </div>
                                    <div className="grid grid-cols-10 border-t border-l rounded">
                                          {products.map((product, Index) => {
                                                if (product.numReviews !== 0) {
                                                      return <div key={Index}> </div>;
                                                } else {
                                                      return (
                                                            <div
                                                                  className="h-[160px] border-r border-b cursor-pointer"
                                                                  key={Index}
                                                            >
                                                                  <div className="flex flex-col justify-center items-center h-full">
                                                                        <div className="w-[70%] h-[70%] mt-[10px]">
                                                                              <div className="h-full">
                                                                                    <img
                                                                                          src={
                                                                                                product.image
                                                                                          }
                                                                                          alt="#"
                                                                                          className="object-cover h-full w-full"
                                                                                    />
                                                                              </div>
                                                                        </div>
                                                                        <div className="w-full h-[30%] text-[14px] text-center ">
                                                                              {product.name}
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      );
                                                }
                                          })}
                                    </div>
                              </div>
                        </section>
                  ) : (
                        <Loading />
                  )}
            </>
      );
}
