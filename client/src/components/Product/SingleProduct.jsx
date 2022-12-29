import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckMoving, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import PreviewProduct from './PreviewProduct';
import RotateImage from '../../assests/images/360preview.jpg';
import DetailImage from '../../assests/images/detailpreview.jpg';
import { HomeIcon, ProtectionIcon } from '../Icon/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/Actions/CartActions';
import { detailProduct } from '../../redux/Actions/ProductActions';
import Toast from '../Toast/Toast';
function SingleProduct() {
      const history = useNavigate();
      const dispatch = useDispatch();
      const params = useParams();
      const productDetails = useSelector((state) => state.productDetails);
      const { loading, products } = productDetails;
      const [count, setCount] = useState(1);
      const [add, setAdd] = useState(false);
      const [toast, setToast] = useState(false);
      const [activeColor, setActiveColor] = useState('Đen');
      const [activeRam, setActiveRam] = useState('32GB');
      const [view, setView] = useState(false);

      useEffect(() => {
            dispatch(detailProduct(params.id));
      }, [dispatch, params.id]);

      useEffect(() => {
            if (params.id && add) {
                  dispatch(addToCart(params.id, count));
                  setAdd(false);
            }
      }, [add]);

      const TimeoutRef = useRef(null);

      function ResetTimeout() {
            if (TimeoutRef.current) {
                  clearTimeout(TimeoutRef.current);
            }
      }

      useEffect(() => {
            ResetTimeout();
            TimeoutRef.current = setTimeout(() => setToast(false), 3000);
            return () => {
                  ResetTimeout();
            };
      }, [toast]);

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

      return !view ? (
            <>
                  <div className="mt-[50px] pb-[30px]">
                        <div className="max-w-8xl mx-auto pl-[10px] bg-white rounded shadow-3xl">
                              {!loading ? (
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
                                                                  src={DetailImage}
                                                                  alt=""
                                                            />
                                                      </div>
                                                      <div className="flex justify-center items-center w-[77px] min-h-[77px] border rounded cursor-pointer mb-[10px]">
                                                            <img
                                                                  height={52}
                                                                  width={52}
                                                                  src={RotateImage}
                                                                  alt="#"
                                                                  onClick={() => setView(true)}
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
                                                            Miễn phí giao hàng tối đa 50k cho đơn
                                                            hàng từ 499k
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
                                                                  Chính hãng, Mới 100%, Nguyên seal,
                                                                  Chưa Active
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
                                                            Chọn màu sắc:{' '}
                                                            <strong>{activeColor}</strong>
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
                                                                  onClick={() =>
                                                                        setActiveColor('Đen')
                                                                  }
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
                                                                  onClick={() =>
                                                                        setActiveColor('Vàng')
                                                                  }
                                                            >
                                                                  Vàng
                                                            </button>
                                                      </div>
                                                      <span>
                                                            Chọn dung lượng:{' '}
                                                            <strong>{activeRam}</strong>
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
                                                                  onClick={() =>
                                                                        setActiveRam('32GB')
                                                                  }
                                                            >
                                                                  32GB
                                                            </button>
                                                            <button
                                                                  className="border-2 rounded px-[15px] py-[5px]"
                                                                  style={
                                                                        activeRam === '64GB'
                                                                              ? {
                                                                                      backgroundColor:
                                                                                            '#288ad6',
                                                                                      color: 'white',
                                                                                }
                                                                              : {}
                                                                  }
                                                                  onClick={() =>
                                                                        setActiveRam('64GB')
                                                                  }
                                                            >
                                                                  64GB
                                                            </button>
                                                      </div>
                                                      <div className="">
                                                            <span>Số lượng</span>
                                                            <div className="flex items-end">
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
                                                                        onClick={() => {
                                                                              setAdd(!add);
                                                                              setToast(true);
                                                                        }}
                                                                        className="ml-[20px] bg-blur-orange text-[#ff9600] rounded-sm px-[20px] py-[10px] border border-[#ff9600]"
                                                                  >
                                                                        <FontAwesomeIcon
                                                                              icon={faCartPlus}
                                                                              className="mr-[10px]"
                                                                        />
                                                                        Thêm vào giỏ hàng
                                                                  </button>

                                                                  <button
                                                                        onClick={AddtoCartHandle}
                                                                        className="ml-[20px] bg-[#ff9600] text-white rounded-sm px-[20px] py-[10px]"
                                                                  >
                                                                        Mua Ngay
                                                                  </button>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="px-[20px] py-[20px] flex-auto">
                                                <div className="flex items-center pb-[10px]">
                                                      <div className="pr-[5px]">
                                                            <HomeIcon className="text-[#FABA06]" />
                                                      </div>
                                                      <p className="pl-[5px] leading-5">
                                                            <strong className="text-[#288AD6] pr-[5px]">
                                                                  GOKING
                                                            </strong>
                                                            <br />
                                                            Cam kết chính hiệu 100%
                                                      </p>
                                                </div>
                                                <button className="w-full text-white rounded bg-[#288AD6] py-[5px] mb-[10px]">
                                                      Xem shop
                                                </button>
                                                <div className="py-[5px]">
                                                      <ProtectionIcon className={'inline'} />
                                                      <strong className="pl-[15px] text-[20px]">
                                                            Thông tin bảo hành
                                                      </strong>
                                                </div>

                                                <div className="py-[5px] ">
                                                      <ul className="mb-[5px]">
                                                            <li className="py-[15px] border-b-2">
                                                                  <p className="inline">
                                                                        Thời gian bảo hành
                                                                  </p>
                                                                  <span className="float-right">
                                                                        1 Tháng
                                                                  </span>
                                                            </li>
                                                            <li className="py-[15px] border-b-2">
                                                                  <p className="inline">
                                                                        Hình thức bảo hành
                                                                  </p>
                                                                  <span className="float-right">
                                                                        Hóa đơn
                                                                  </span>
                                                            </li>
                                                            <li className="py-[15px] border-b-2">
                                                                  <p className="inline">
                                                                        Nơi bảo hành
                                                                  </p>
                                                                  <span className="float-right">
                                                                        Bảo hành chính hãng
                                                                  </span>
                                                            </li>
                                                            <li className="py-[15px] border-b-2">
                                                                  <p className="inline">
                                                                        Hướng dẫn bảo hành
                                                                  </p>
                                                                  <span className="float-right"></span>
                                                            </li>
                                                      </ul>
                                                </div>
                                          </div>
                                    </div>
                              ) : (
                                    <Loading />
                              )}
                        </div>
                  </div>
                  {toast ? <Toast /> : <> </>}
            </>
      ) : (
            <PreviewProduct onChange={setView} view={view} products={products} />
      );
}

export default SingleProduct;
