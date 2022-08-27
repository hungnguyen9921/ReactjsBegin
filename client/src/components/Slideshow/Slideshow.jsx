import React, { useState, useRef, useEffect } from 'react';
import { Images, Cakes } from '../../assests/images/images';
import './Slideshow.css';

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
            <div className="slideshow">
                  <div className="slideshow-image">
                        <div
                              className="slideshow-slider"
                              style={{ transform: `translate3d(${-Index * 100}%, 0, 0)` }}
                        >
                              <div className="slide tw-inline-block">
                                    {Images.map((BackgroundImage, Index) => (
                                          <img src={BackgroundImage} key={Index} alt="info"></img>
                                    ))}
                              </div>
                        </div>
                        <div className="slideshowDots">
                              {Images.map((_, Idx) => (
                                    <div
                                          key={Idx}
                                          className={`slideshowDot ${
                                                Index === Idx ? ' active' : ''
                                          }`}
                                          onClick={() => {
                                                setIndex(Idx);
                                          }}
                                    ></div>
                              ))}
                        </div>
                  </div>
                  <div className="slideshow__background">
                        {Cakes.map((Cake, cakeIndex) => (
                              <img src={Cake} key={cakeIndex} alt="info"></img>
                        ))}
                  </div>
            </div>
            // </div>
      );
}
