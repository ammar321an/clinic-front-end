"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const VideoIntro: React.FC = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="video-wrap">
        <Tabs>
          <TabPanel>
            <div
              className="video-area"
              style={{ backgroundImage: `url(/images/intro-video-bg.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="video-item">
                      <div
                        onClick={() => setToggler(!toggler)}
                        className="popup-youtube"
                      >
                        <i className="icofont-ui-play"></i>
                      </div>

                      <div className="video-content">
                        <h3>Hospital Introduction</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida. Risus commodo viverra maecenas accumsan lacus
                          vel facilisis.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div
              className="video-area"
              style={{ backgroundImage: `url(/images/intro-video-bg.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="video-item">
                      <div
                        onClick={() => setToggler(!toggler)}
                        className="popup-youtube"
                      >
                        <i className="icofont-ui-play"></i>
                      </div>

                      <div className="video-content">
                        <h3>About Our Pharmacy</h3>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div
              className="video-area"
              style={{ backgroundImage: `url(/images/intro-video-bg.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="video-item">
                      <div
                        onClick={() => setToggler(!toggler)}
                        className="popup-youtube"
                      >
                        <i className="icofont-ui-play"></i>
                      </div>
                      <div className="video-content">
                        <h3>Our reasearch center and lab</h3>
                        <p>
                          But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising pain was born and
                          I will give you a complete account of the system, and
                          expound the actual teachings of the great explorer of
                          the truth, the master
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div
              className="video-area"
              style={{ backgroundImage: `url(/images/intro-video-bg.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="video-item">
                      <div
                        onClick={() => setToggler(!toggler)}
                        className="popup-youtube"
                      >
                        <i className="icofont-ui-play"></i>
                      </div>
                      <div className="video-content">
                        <h3>CCU & ICU</h3>
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div
              className="video-area"
              style={{ backgroundImage: `url(/images/intro-video-bg.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="video-item">
                      <div
                        onClick={() => setToggler(!toggler)}
                        className="popup-youtube"
                      >
                        <i className="icofont-ui-play"></i>
                      </div>
                      <div className="video-content">
                        <h3>Our Doctors</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida. Risus commodo viverra maecenas accumsan lacus
                          vel facilisis.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabList>
            <Tab>Hospital Introduction</Tab>
            <Tab>Pharmacy</Tab>
            <Tab>Reasearch & Lab</Tab>
            <Tab>CCU & ICU</Tab>
            <Tab>Doctors</Tab>
          </TabList>
        </Tabs>
      </div>
    </>
  );
};

export default VideoIntro;
