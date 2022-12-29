import React, { useEffect, useState } from 'react';
import LocationForm from '../../components/Location/LocationForm';
import Map from '../../components/Location/Map';
import EmptyCard from '../../assests/images/emptycard.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Radio from '../../components/Radio/Radio';
import { useLocation, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/Actions/CartActions';
import { convertPrice } from '../../utils/Fuction';
export default function Cart() {
      const [selected, setSelected] = useState('first');
      const location = useLocation();
      const params = useParams();
      const dispatch = useDispatch();
      const qty = location.search ? Number(location.search.split('=')[1]) : 1;
      const cart = useSelector((state) => state.cart);
      const { cartItems } = cart;

      useEffect(() => {
            if (params.id) {
                  dispatch(addToCart(params.id, qty));
            }
      }, [dispatch, params.id, qty]);

      const removeFromCartHandle = (id) => {
            dispatch(removeFromCart(id));
      };

      const total = cartItems
            .reduce((currentTotal, index) => currentTotal + index.qty * index.price, 0)
            .toFixed(2);

      return (
            <>
                  <div className="w-9/20 mx-auto text-[14px] mb-12">
                        <div className="flex justify-between mt-[30px] mb-[10px]">
                              <Link
                                    className="text-[#288ad6] before:content-[''] before:w-[8px] before:h-[8px] before:border-t before:border-l before:border-[#288ad6] before:inline-block before:mr-[3px]  before:rotate-[-45deg]"
                                    to={'/'}
                              >
                                    Mua thêm sản phẩm khác
                              </Link>
                              <p>Giỏ hàng của bạn</p>
                        </div>
                        <div className="bg-white rounded shadow-3xl">
                              <div className="px-[40px] pt-[10px] pb-[40px]">
                                    {cartItems.length === 0 ? (
                                          <div className="flex justify-center flex-col items-center">
                                                <img
                                                      width={200}
                                                      height={200}
                                                      src={EmptyCard}
                                                      alt=""
                                                      className="mb-[10px]"
                                                />
                                                <p className="mb-[20px]">
                                                      Không có sản phẩm nào trong giỏ hàng của bạn
                                                </p>
                                                <Link
                                                      to={'/'}
                                                      className=" bg-[#ff9600] text-white rounded-sm px-[40px] py-[10px]"
                                                >
                                                      Mua Ngay
                                                </Link>
                                          </div>
                                    ) : (
                                          <>
                                                {cartItems.map((item) => (
                                                      <div
                                                            className="flex border-b-2 pb-[20px] pt-[20px]"
                                                            key={item.products}
                                                      >
                                                            <div className="flex justify-center items-center flex-col pr-[20px]">
                                                                  <img
                                                                        width={85}
                                                                        src={item.image}
                                                                        alt=""
                                                                  />
                                                                  <div className="flex justify-center items-center py-[5px] ">
                                                                        <FontAwesomeIcon
                                                                              onClick={() =>
                                                                                    removeFromCartHandle(
                                                                                          item.products,
                                                                                    )
                                                                              }
                                                                              icon={faXmark}
                                                                              className="text-[10px] cursor-pointer mr-[10px] bg-[#666] text-white px-[5px] py-[3px] rounded-full"
                                                                        />
                                                                        <div className="text-[14px] ">
                                                                              Xóa
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            <div className="flex w-full flex-col">
                                                                  <div className="flex w-full justify-between">
                                                                        <div className="font-medium">
                                                                              {item.name}
                                                                        </div>
                                                                        <span className="text-[#ee4d2d]">
                                                                              $
                                                                              {convertPrice(
                                                                                    item.price.toString(),
                                                                              )}
                                                                        </span>
                                                                  </div>
                                                                  <div className="pb-[10px]">
                                                                        <span className="">
                                                                              Giảm
                                                                        </span>
                                                                        <span className="text-[#ee4d2d]">
                                                                              {' '}
                                                                              -10%
                                                                        </span>
                                                                        <span> còn</span>
                                                                        <span className="text-[#ee4d2d]">
                                                                              {' '}
                                                                              13.500.000 đ
                                                                        </span>
                                                                  </div>
                                                                  <div className="flex w-full justify-between text-[#2673dd]">
                                                                        <select
                                                                              className="py-[7px] pr-[17px] pl-[5px] border-2 rounded"
                                                                              name="colors"
                                                                              id="colors"
                                                                        >
                                                                              <option value="black">
                                                                                    Màu Sắc: Đen
                                                                              </option>
                                                                              <option value="black">
                                                                                    Màu Sắc: Trắng
                                                                              </option>
                                                                        </select>
                                                                        <select
                                                                              className="py-[7px] pr-[17px] pl-[5px] border-2 rounded"
                                                                              name="colors"
                                                                              id="colors"
                                                                        >
                                                                              <option value="black">
                                                                                    Dung Lượng: 32GB
                                                                              </option>
                                                                              <option value="black">
                                                                                    Dung Lượng: 64GB
                                                                              </option>
                                                                        </select>
                                                                        <div className="text-[#333] rounded text-[14px] bg-white border-2 w-[120px] h-[40px] leading-[40px]">
                                                                              <div
                                                                                    className="border-r w-4/12 h-[40px] float-left cursor-pointer"
                                                                                    onClick={() =>
                                                                                          dispatch(
                                                                                                addToCart(
                                                                                                      item.products,
                                                                                                      Number(
                                                                                                            item.qty -
                                                                                                                  1,
                                                                                                      ),
                                                                                                ),
                                                                                          )
                                                                                    }
                                                                              >
                                                                                    <i className="bg-minus-black w-[12px] h-[2px] block my-[19px] mx-auto"></i>
                                                                              </div>
                                                                              <div className="number float-left text-center w-4/12 text-[#333] h-[40px]">
                                                                                    {item.qty}
                                                                              </div>
                                                                              <div
                                                                                    className="plus float-right border-l w-4/12 h-[40px] relative cursor-pointer"
                                                                                    onClick={() =>
                                                                                          dispatch(
                                                                                                addToCart(
                                                                                                      item.products,
                                                                                                      Number(
                                                                                                            item.qty +
                                                                                                                  1,
                                                                                                      ),
                                                                                                ),
                                                                                          )
                                                                                    }
                                                                              >
                                                                                    <i className="bg-[#288ad6] w-[12px] h-[2px] block my-[19px] mx-auto"></i>
                                                                                    <i className="bg-[#288ad6] absolute top-[14px] left-0 right-0 w-[2px] h-[12px] mx-auto  "></i>
                                                                              </div>
                                                                              <input type="hidden" />
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                ))}{' '}
                                                <div className="pt-[10px] pb-[20px] leading-7 border-b-2">
                                                      <div className="flex justify-between ">
                                                            <span>Tổng tiền:</span>
                                                            <span>{total} đ</span>
                                                      </div>
                                                      <div className="flex justify-between ">
                                                            <span>Phí chuyển hàng:</span>
                                                            <span>+ 0 đ</span>
                                                      </div>
                                                      <div className="flex justify-between">
                                                            <span>Giảm:</span>
                                                            <span>27.000.000 đ</span>
                                                      </div>
                                                      <div className="flex justify-between">
                                                            <strong>Cần thanh toán</strong>
                                                            <span className="font-bold text-[#EE4D2D]">
                                                                  27.000.000 đ
                                                            </span>
                                                      </div>
                                                      <div className="flex justify-end">
                                                            <Link to={'/'}>
                                                                  Sử dụng mã giảm giá
                                                            </Link>
                                                      </div>
                                                      <div className="flex justify-between ">
                                                            <input
                                                                  className="pl-[5px] pr-[80px] text-[14px] py-[8px] border-2 rounded"
                                                                  type="text"
                                                                  name="discount"
                                                                  id="discount"
                                                                  placeholder="Nhập mã giảm giá"
                                                            />
                                                            <button
                                                                  type="submit"
                                                                  className="text-white bg-[#2673dd] px-[20px] rounded font-light"
                                                            >
                                                                  Áp dụng
                                                            </button>
                                                      </div>
                                                </div>
                                                <div className="py-[20px] border-b-2">
                                                      <div className="flex justify-between">
                                                            <input
                                                                  className="pl-[5px] pr-[80px] text-[14px] py-[8px] border-2 rounded "
                                                                  type="text"
                                                                  name="namereceiver"
                                                                  id="namereceiver"
                                                                  placeholder="Họ tên người nhận hàng"
                                                            />
                                                            <input
                                                                  className="pl-[5px] pr-[80px] text-[14px] py-[8px] border-2 rounded "
                                                                  type="text"
                                                                  name="phonereceiver"
                                                                  id="phonereceiver"
                                                                  placeholder="Số điện thoại người nhận"
                                                            />
                                                      </div>
                                                      <div className="pt-[10px]">
                                                            <input
                                                                  className="pl-[5px] pr-[80px] text-[14px] py-[8px] border-2 rounded w-full "
                                                                  type="text"
                                                                  placeholder="Lời nhắn cho người bán (Không bắt buộc)"
                                                            />
                                                      </div>
                                                </div>
                                                <div className="py-[20px]">
                                                      <strong>
                                                            Vui lòng điền đầy đủ thông tin bên dưới
                                                            hoặc chọn địa chỉ đã lưu
                                                      </strong>
                                                      <div className="flex justify-between items-center mb-[10px]">
                                                            <Radio
                                                                  value="first"
                                                                  selected={selected}
                                                                  text="Địa chỉ giao hàng mới"
                                                                  onChange={setSelected}
                                                            />
                                                            <Radio
                                                                  value="second"
                                                                  selected={selected}
                                                                  text="Định vị"
                                                                  onChange={setSelected}
                                                            />
                                                            <Radio
                                                                  value="third"
                                                                  selected={selected}
                                                                  text="Địa chỉ giao hàng đã lưu"
                                                                  onChange={setSelected}
                                                            />
                                                      </div>
                                                      {selected === 'first' ? (
                                                            <div className="rounded bg-[#f6f6f6] py-[20px]">
                                                                  <LocationForm />
                                                            </div>
                                                      ) : (
                                                            <Map />
                                                      )}
                                                </div>
                                          </>
                                    )}
                              </div>
                        </div>
                  </div>
            </>
      );
}
