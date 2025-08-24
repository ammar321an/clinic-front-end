"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface CountdownProps {
  endDate: string; // Format: "Month Day, Year HH:mm:ss"
}

const Countdown: React.FC<CountdownProps> = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const endDateTime = new Date("August 23, 2025 17:00:00 PDT").getTime();
    const now = new Date().getTime();
    const timeRemaining = endDateTime - now;

    if (timeRemaining > 0) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    } else {
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <>
      <div className="coming-area">
        <div className="coming-item">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="coming-text">
                  <h1>Under Construction...</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                    deserunt beatae voluptas, animi harum dolorum totam,
                    praesentium, dolor sint aspernatur perspiciatis iusto labore
                    nulla rerum earum! Sit commodi quia provident!
                  </p>

                  <div className="row coming-wrap" id="timer">
                    <div className="col-6 col-sm-6 col-lg-3">
                      <div className="coming-inner">
                        <div id="days">
                          {countdown.days} <span>Days</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-sm-6 col-lg-3">
                      <div className="coming-inner">
                        <div id="hours">
                          {countdown.hours} <span>Hours</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-sm-6 col-lg-3">
                      <div className="coming-inner">
                        <div id="minutes">
                          {countdown.minutes} <span>Minutes</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-sm-6 col-lg-3">
                      <div className="coming-inner">
                        <div id="seconds">
                          {countdown.seconds} <span>Seconds</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/" target="_blank">
                        <i className="icofont-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Countdown;
