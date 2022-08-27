import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import Slideshow from '../Slideshow/Slideshow';
import RightSide from '../../assests/images/background-rightside.jpg';
import { FeedData } from './FeedData';
import './Feed.css';
export default function Feed() {
      return (
            <div className="feed">
                  <div className="feed-row">
                        <div className="feed-container">
                              <div className="feed-column feed-col-33">
                                    <div className="feed-column__wrap">
                                          <div className="feed-column__container">
                                                <div className="mega-left__title">
                                                      <span>
                                                            <FontAwesomeIcon
                                                                  icon={faListUl}
                                                                  className="margin-15px"
                                                            />
                                                            DANH MỤC
                                                      </span>
                                                </div>
                                                <div className="mega-left__list">
                                                      <ul>
                                                            {FeedData.map((Feed, Index) => (
                                                                  <li key={Index}>
                                                                        <span className="have-title">
                                                                              <span className="menu-img">
                                                                                    <img
                                                                                          src={
                                                                                                Feed.icon
                                                                                          }
                                                                                          key={
                                                                                                Index
                                                                                          }
                                                                                          alt="Smartphone"
                                                                                    />
                                                                              </span>
                                                                              <span className="name-title">
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
                              <div className="feed-column feed-col-66">
                                    <Slideshow></Slideshow>
                              </div>
                              <div className="feed-column feed-col-33">
                                    <div className="feed-column__wrap">
                                          <img
                                                src={RightSide}
                                                alt="info"
                                                className="rightside-img"
                                          />
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
