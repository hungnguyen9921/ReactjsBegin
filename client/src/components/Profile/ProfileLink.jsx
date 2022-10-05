import React from 'react';
import { Link } from 'react-router-dom';
export default function ProfileLink(props) {
      const { dataLink } = props;
      return (
            <>
                  {dataLink.map((prop, index) => (
                        <div className="" key={index}>
                              <Link
                                    to={prop.path}
                                    className={`mb-[15px] flex items-center + ${prop.className} `}
                              >
                                    <div className="flex items-center justify-center w-[20px] h-[20px] leading-5 text-center rounded-full mr-[10px]">
                                          {prop.image ? (
                                                <img
                                                      src={prop.image}
                                                      alt="#"
                                                      className="w-full h-full"
                                                />
                                          ) : (
                                                <></>
                                          )}
                                    </div>
                                    <div className="leading-4 ">
                                          <span className="font-medium mr-[5px] capitalize text-[14px] hover:text-[#ff9600]">
                                                {prop.text}
                                          </span>
                                    </div>
                              </Link>
                        </div>
                  ))}
            </>
      );
}
