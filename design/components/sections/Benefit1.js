"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "@/node_modules/react-modal-video/css/modal-video.css";
import Link from "next/link";

export default function Benefit1() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="tf-widget-benefit background-black">
        <div className="container">
          <div className="tf-benefit">
            {/* header style v2 */}
            <div className="title-box-v2 center-title-box title-large">
              <span className="sub-title wow fadeInUp animated">
                {" "}
                Benefits of Joining Thunderbolts Developmnent Center
              </span>
              <h2 className="title-section wow fadeInUp animated">WHY TDC</h2>
            </div>
            {/* header style v2 */}
            <div className="benefit-wrap-content">
              <div className="row">
                <div className="col-md-4 benefit-on-left">
                  <div className="benefit-item">
                    <div className="benefit-content">
                      <h6 className="title-benefit wow fadeInLeft animated">
                        International Collaborations
                      </h6>
                      <p className="description-benefit text wow fadeInLeft animated">
                        We have tie-ups and partnerships with various
                        international sporting companies and clubs, providing
                        unique opportunities for our members to engage in global
                        sporting experiences
                      </p>
                    </div>
                    <div className="benefit-number">
                      <span className="number wow zoomIn animated">01</span>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-content">
                      <h6 className="title-benefit wow fadeInLeft animated">
                        World-Class Facilities
                      </h6>
                      <p className="description-benefit wow fadeInLeft animated">
                        Our international-standard facilities provide top-tier
                        equipment and spaces for football, tennis, swimming, and
                        esports, ensuring a professional environment for
                        athletes at all levels.{" "}
                      </p>
                    </div>
                    <div className="benefit-number">
                      <span className="number wow zoomIn animated">02</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4  benefit-center">
                  <div className="benefit-video">
                    <img
                      className="video"
                      src="assets/academy/cricket.jpg"
                      alt="tdc image"
                      style={{
                        borderRadius: "50%", 
                        border: "10px solid white", 
                        objectFit: "cover",
                        width: "100%",  // Ensure the image fits well inside the circle
                        height: "100%"  // Same height to make it circular
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-4 benefit-on-right">
                  <div className="benefit-item">
                    <div className="benefit-number">
                      <span className="number wow zoomIn animated">03</span>
                    </div>
                    <div className="benefit-content">
                      <h6 className="title-benefit wow fadeInRight animated">
                        Expert Coaching
                      </h6>
                      <p className="description-benefit wow fadeInRight animated">
                        Our licensed coaches offer personalized training
                        programs, helping athletes of all skill levels reach
                        their potential with expert guidance and support.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-number">
                      <span className="number wow zoomIn animated">04</span>
                    </div>
                    <div className="benefit-content">
                      <h6 className="title-benefit wow fadeInRight animated">
                        Holistic Development
                      </h6>
                      <p className="description-benefit wow fadeInRight animated">
                        From sports science to nutrition and mental health, we
                        focus on every aspect of athlete development. Pathway to
                        Success We help connect athletes to local and
                        international opportunities for professional growth.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="JXMWOmuR1hU"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
