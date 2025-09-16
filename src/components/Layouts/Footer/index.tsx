"use client";
  
import React from "react";
import Link from "next/link";
import FeedbackForm from "./FeedbackForm";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer
        className="pt-100 pb-70"
        style={{ backgroundImage: `url(/images/footer-bg.png)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="footer-item">
                <div className="footer-contact pe-2">
                  <h3>Contact Us</h3>
                  <ul>
                    <li>
                      <i className="icofont-ui-message"></i>
                      <a href="mailto:info@disin.com">dr.m.asyraf@gmail.com</a>
                      {/* <a href="mailto:hello@disin.com">hello@disin.com</a> */}
                      <br />
                    </li>
                    <li>
                      <i className="icofont-stock-mobile"></i>
                      <a href="tel:+60194565039">Call: +60 19 456 5039</a>
                      <a href="tel:+60142330257">Call: +60 14 233 0257</a>
                    </li>
                    <li>
                      <i className="icofont-location-pin"></i>
                      KPJ Kajang Specialist Hospital, <br />
                      Level 1, Suite No. 24, Jalan Cheras, <br />
                      43000 Kajang, Selangor.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-2">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <Link href="/about">About us</Link>
                    </li>
                    <li>
                      <Link href="/about">Blog</Link>
                    </li>
                    <li>
                      <Link href="/blog/details">Our Expertise</Link>
                    </li>
                    {/* <li>
                      <Link href="/faq">Faq</Link>
                    </li> */}
                    <li>
                      <Link href="/doctor">Doctors</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>Our Services</h3>
                  <ul>
                    <li>
                      <Link href="/services/details">Dental Care</Link>
                    </li>
                    <li>
                      <Link href="/services/details">Cardiology</Link>
                    </li>
                    <li>
                      <Link href="/services/details">Hijama Therapy</Link>
                    </li>
                    <li>
                      <Link href="/services/details">Massage Therapy</Link>
                    </li>
                    <li>
                      <Link href="/services/details">Ambluance Sevices</Link>
                    </li>
                    <li>
                      <Link href="/services/details">Medicine</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <FeedbackForm />
              </div>
            </div> */}
          </div>
        </div>
      </footer>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-item">
            <p>
              Copyright &copy; {currentYear} Design & Developed by{" "}
              <a href="https://hibootstrap.com/" target="_blank">
                HiBootstrap
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
