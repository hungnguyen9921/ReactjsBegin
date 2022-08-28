import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import Slideshow from '../Slideshow/Slideshow';
import RightSide from '../../assests/images/background-rightside.jpg';
import { FeedData } from './FeedData';
export default function Feed() {
      return (
            <div className="mt-[40px] pb-[40px]">
                  <div className="max-w-8xl mx-auto pl-[10px] bg-white rounded shadow-3xl">
                        <div className="flex">
                              <div className="feed-column w-1/5 py-[20px] pr-[20px] pl-[20px] ">
                                    <div className="flex flex-wrap content-start h-full">
                                          <div>
                                                <div className="text-[18px]">
                                                      <span>
                                                            <FontAwesomeIcon
                                                                  icon={faListUl}
                                                                  className="mr-[15px]"
                                                            />
                                                            DANH MỤC
                                                      </span>
                                                </div>
                                                <div className="text-[14px]">
                                                      <ul>
                                                            {FeedData.map((Feed, Index) => (
                                                                  <li
                                                                        key={Index}
                                                                        className="cursor-pointer py-[10px] "
                                                                  >
                                                                        <span className="flex text-center opacity-100 visible relative translate-x-0 z-50 ease-out duration-500 hover:ease-out hover:translate-x-[40px] hover:text-[#ff6900]">
                                                                              <span className="inline-block min-w-[20px] mr-[15px] ">
                                                                                    <img
                                                                                          src={
                                                                                                Feed.icon
                                                                                          }
                                                                                          key={
                                                                                                Index
                                                                                          }
                                                                                          alt="Smartphone"
                                                                                          className="h-auto max-w-full mx-auto"
                                                                                    />
                                                                              </span>
                                                                              <span className="text-[14px]">
                                                                                    {Feed.title}
                                                                              </span>
                                                                        </span>
                                                                  </li>
                                                            ))}
                                                      </ul>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className="w-3/5 h-[525px] pt-[20px] pb-[30px] pl-[20px]">
                                    <Slideshow></Slideshow>
                              </div>
                              <div className="w-1/5 py-[20px] pr-[30px] pl-[20px]">
                                    <div className="flex flex-wrap content-start h-full">
                                          <img
                                                src={RightSide}
                                                alt="info"
                                                className="rounded w-full h-full object-cover"
                                          />
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
