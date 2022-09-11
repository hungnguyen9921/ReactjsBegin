import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckMoving, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Navbar/Header';
import { useDispatch, useSelector } from 'react-redux';
import { detailProduct } from '../../redux/Actions/ProductActions';
function SingleProduct() {
      const history = useNavigate();
      const dispatch = useDispatch();
      const params = useParams();
      const productDetails = useSelector((state) => state.productDetails);
      const { loading, error, products } = productDetails;

      useEffect(() => {
            dispatch(detailProduct(params.id));
      }, [dispatch, params.id]);

      const [count, setCount] = useState(1);
      const [activeColor, setActiveColor] = useState('Đen');
      const [activeRam, setActiveRam] = useState('32GB');

      const handelMinus = () => {
            setCount((count) => count - 1);
      };

      const handelAdd = () => {
            setCount((count) => count + 1);
      };

      const AddtoCartHandle = (e) => {
            e.preventDefault();
            history(`/cart/${params.id}?qty=${count}`);
      };

      return (
            <>
                  <Header />
                  <div className="mt-[50px] pb-[30px]">
                        <div className="max-w-8xl mx-auto pl-[10px] bg-white rounded shadow-3xl">
                              <div className="flex">
                                    <div className="flex py-[20px] px-[10px]">
                                          <div className="flex flex-col">
                                                <div className="flex justify-center items-center w-[77px] min-h-[77px] border rounded cursor-pointer mb-[10px]">
                                                      <img
                                                            height={62}
                                                            width={62}
                                                            src={products.image}
                                                            alt=""
                                                      />
                                                </div>
                                                <div className="flex justify-center items-center w-[77px] min-h-[77px] border rounded cursor-pointer mb-[10px]">
                                                      <img
                                                            height={52}
                                                            width={52}
                                                            src={products.image}
                                                            alt=""
                                                      />
                                                </div>
                                                <div className="flex justify-center items-center w-[77px] min-h-[77px] border rounded cursor-pointer mb-[10px]">
                                                      <img
                                                            height={52}
                                                            width={52}
                                                            src={products.image}
                                                            alt=""
                                                      />
                                                </div>
                                                <div className="flex justify-center items-center w-[77px] min-h-[77px] border rounded cursor-pointer mb-[10px]">
                                                      <img
                                                            height={52}
                                                            width={52}
                                                            src={products.image}
                                                            alt=""
                                                      />
                                                </div>
                                                <div className="flex justify-center items-center w-[77px] min-h-[77px] border rounded cursor-pointer mb-[10px]">
                                                      <img
                                                            height={52}
                                                            width={52}
                                                            src={products.image}
                                                            alt=""
                                                      />
                                                </div>
                                          </div>
                                          <div className="flex justify-center">
                                                <img
                                                      className=" w-[400px] h-[400px]"
                                                      src={products.image}
                                                      alt=""
                                                />
                                          </div>
                                    </div>
                                    <div className="px-[25px] border-x-2 py-[20px]">
                                          <div className="border-b-2 pb-[20px]">
                                                <div className="font-medium bg-[#e1f2e8] text-[#219653] px-[20px] py-[10px] mb-[10px] rounded">
                                                      <FontAwesomeIcon
                                                            icon={faTruckMoving}
                                                            className="text-[24px] mr-[10px]"
                                                      />
                                                      Miễn phí giao hàng tối đa 50k cho đơn hàng từ
                                                      499k
                                                </div>
                                                <div className="flex items-center">
                                                      <strong className="text-[#d0021c] text-[20px] mr-[10px]">
                                                            3.190.000 ₫
                                                      </strong>
                                                      <div className="text-[12px] font-medium py-[2px] text-white bg-[#ff9600] px-[10px] rounded">
                                                            Trả Góp 0%
                                                      </div>
                                                </div>

                                                <div className="">
                                                      <strong className="text-[#999999] font-medium line-through">
                                                            3.190.000₫
                                                            <small className="ml-[10px] text-black">
                                                                  -17%
                                                            </small>
                                                      </strong>
                                                </div>
                                          </div>
                                          <div className="ml-[20px] border-b-2 py-[20px] font-normal text-[16px]">
                                                <ul className="list-disc">
                                                      <li>
                                                            Chính hãng, Mới 100%, Nguyên seal, Chưa
                                                            Active
                                                      </li>
                                                      <li>Màn hình: AMOLED, 6.5</li>
                                                      <li>Full HD+</li>
                                                      <li>Hệ điều hành: IOS 14.0</li>
                                                      <li>Camera sau</li>
                                                      <li>Camera trước: 16MP</li>
                                                      <li>CPU</li>
                                                      <li>RAM: 6GB</li>
                                                </ul>
                                          </div>
                                          <div className="py-[20px]">
                                                <span>
                                                      Chọn màu sắc: <strong>{activeColor}</strong>
                                                </span>
                                                <div className="">
                                                      <button
                                                            className="border-2 rounded px-[15px] mr-[10px] py-[5px]"
                                                            style={
                                                                  activeColor === 'Đen'
                                                                        ? {
                                                                                backgroundColor:
                                                                                      '#288ad6',
                                                                                color: 'white',
                                                                          }
                                                                        : {}
                                                            }
                                                            onClick={() => setActiveColor('Đen')}
                                                      >
                                                            Đen
                                                      </button>
                                                      <button
                                                            className="border-2 rounded px-[10px] py-[5px]"
                                                            style={
                                                                  activeColor === 'Vàng'
                                                                        ? {
                                                                                backgroundColor:
                                                                                      '#288ad6',
                                                                                color: 'white',
                                                                          }
                                                                        : {}
                                                            }
                                                            onClick={() => setActiveColor('Vàng')}
                                                      >
                                                            Vàng
                                                      </button>
                                                </div>
                                                <span>
                                                      Chọn dung lượng: <strong>{activeRam}</strong>
                                                </span>
                                                <div className="">
                                                      <button
                                                            className="border-2 rounded px-[15px] mr-[10px] py-[5px]"
                                                            style={
                                                                  activeRam === '32GB'
                                                                        ? {
                                                                                backgroundColor:
                                                                                      '#288ad6',
                                                                                color: 'white',
                                                                          }
                                                                        : {}
                                                            }
                                                            onClick={() => setActiveRam('32GB')}
                                                      >
                                                            32GB
                                                      </button>
                                                      <button
                                                            className="border-2 rounded px-[10px] py-[5px]"
                                                            style={
                                                                  activeRam === '64GB'
                                                                        ? {
                                                                                backgroundColor:
                                                                                      '#288ad6',
                                                                                color: 'white',
                                                                          }
                                                                        : {}
                                                            }
                                                            onClick={() => setActiveRam('64GB')}
                                                      >
                                                            64GB
                                                      </button>
                                                </div>
                                                <div className="">
                                                      <span>Số lượng</span>
                                                      <div className="flex">
                                                            <div className="text-[#333] rounded text-[14px] bg-white border w-[100px] h-[30px] leading-[30px]">
                                                                  <div
                                                                        className="border-r w-4/12 h-[30px] float-left cursor-pointer"
                                                                        onClick={handelMinus}
                                                                  >
                                                                        <i className="bg-minus-black w-[12px] h-[2px] block my-[14px] mx-auto"></i>
                                                                  </div>
                                                                  <div className="number float-left text-center w-4/12 text-[#333] h-[30px]">
                                                                        {count}
                                                                  </div>
                                                                  <div
                                                                        className="plus float-right border-l w-4/12 h-[30px] relative cursor-pointer"
                                                                        onClick={handelAdd}
                                                                  >
                                                                        <i className="bg-[#288ad6] w-[12px] h-[2px] block my-[14px] mx-auto"></i>
                                                                        <i className="bg-[#288ad6] absolute top-[9px] left-0 right-0 w-[2px] h-[12px] mx-auto  "></i>
                                                                  </div>
                                                                  <input type="hidden" />
                                                            </div>

                                                            <button
                                                                  onClick={AddtoCartHandle}
                                                                  className="ml-[20px] bg-[#ff9600] text-white rounded px-[20px]"
                                                            >
                                                                  <FontAwesomeIcon
                                                                        icon={faCartPlus}
                                                                        className="mr-[10px]"
                                                                  />
                                                                  CHỌN MUA
                                                            </button>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );
}

export default SingleProduct;
