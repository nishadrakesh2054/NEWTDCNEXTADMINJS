import Link from "next/link";

export default function About1() {
  return (
    <>
      <div className="tf-widget-about-us main-content">
        <div className="container">
          <div className="tf-about-us">
            <div className="row">
            
              <div className="col-md-6">
                <div
                  className="image-container"
                  style={{ position: "relative" }}
                >
               
                  <img
                    //   src="assets/about/about-bg.jpg"
                    src="assets/academy/cricket.jpg"
                    alt="image"
                    className="wow fadeInRight animated"
                    style={{
                      width: "100%",
                      height: "70%",
                      objectFit: "cover",
                      borderRadius: "30px",
                      position: "relative",
                      zIndex: 1,
                    }}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="about-box">
                  {/* <img src="images/about/graphic-box.png" alt="image shape" /> */}
                  {/* header style v1 */}
                  <div className="title-box title-small-v2">
                    <span className="sub-title wow fadeInUp animated ">
                      Welcome to Thunderbolts!
                    </span>
                    <h2 className="title-section wow fadeInUp animated">
                      From Passion to Performance
                    </h2>
                  </div>
                  {/* header style v1 */}
                  <p className="post wow fadeInUp animated">
                    THUNDERBOLTS DEVELOPMENT CENTER (TDC) is Nepal's first
                    international-standard sports and esports academy, dedicated
                    to nurturing talent and fostering excellence. TDC offers a
                    comprehensive range of sports programs across grassroots,
                    intermediate, and senior levels. Our mission is to create a
                    pathway for young athletes to achieve success both on and
                    off the field.
                  </p>
                  <div className="line" />
                  <div className="about-button-group">
                    <Link href="/about">
                      <button className="flat-button wow fadeInUp animated">
                        View more
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
