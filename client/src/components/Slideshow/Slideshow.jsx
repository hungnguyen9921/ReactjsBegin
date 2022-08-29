import React, { useState, useRef, useEffect } from 'react';
import { Images, Cakes } from '../../assests/images/images';

export default function Slideshow() {
      const [Index, setIndex] = useState(0);
      const TimeoutRef = useRef(null);
      function ResetTimeout() {
            if (TimeoutRef.current) {
                  clearTimeout(TimeoutRef.current);
            }
      }
      useEffect(() => {
            ResetTimeout();
            TimeoutRef.current = setTimeout(
                  () =>
                        setIndex((prevIndex) =>
                              prevIndex === Images.length - 1 ? 0 : prevIndex + 1,
                        ),
                  5000,
            );
            return () => {
                  ResetTimeout();
            };
      }, [Index]);
      return (
            <div className="h-full">
                  <div className="mb-[10px] h-3/4 w-full relative overflow-hidden rounded">
                        <div
                              className="ease-in-out duration-1000 w-full h-full whitespace-nowrap"
                              style={{ transform: `translate3d(${-Index * 100}%, 0, 0)` }}
                        >
                              <div className="h-full w-full">
                                    {Images.map((BackgroundImage, Index) => (
                                          <div className="inline-block h-full w-full" key={Index}>
                                                <img
                                                      src={BackgroundImage}
                                                      key={Index}
                                                      alt="info"
                                                      className="h-[100%] w-[100%] object-cover mx-auto rounded"
                                                ></img>
                                          </div>
                                    ))}
                              </div>
                        </div>
                        <div className="translate-x-[-1/2] absolute bottom-[20px] z-50 left-1/2 ">
                              {Images.map((_, Idx) => (
                                    <div
                                          key={Idx}
                                          className={`inline-block h-[15px] w-[15px] rounded-full cursor-pointer mx-[7px] ${
                                                Index === Idx ? 'bg-[#ffa11a]' : 'bg-white'
                                          }`}
                                          onClick={() => {
                                                setIndex(Idx);
                                          }}
                                    ></div>
                              ))}
                        </div>
                  </div>
                  <div className="h-1/4 w-full grid grid-cols-4 gap-[10px]">
                        {Cakes.map((Cake, cakeIndex) => (
                              <img
                                    src={Cake}
                                    key={cakeIndex}
                                    alt="info"
                                    className="h-[100%] w-[100%] object-cover mx-auto rounded"
                              ></img>
                        ))}
                  </div>
            </div>
      );
}
