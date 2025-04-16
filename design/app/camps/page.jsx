"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

const items = [
  {
    id: 1,
    title: "WINTER CAMPS",
    image: "/assets/specialCamp/winter-camp.jpg",
    briefIntro:
      "Stay in peak form this winter with THUNDERBOLTS Winter Camps. Intensive training, expert coaching, and skill development to keep you sharp during the off-season.",
  },
  {
    id: 2,
    title: "SPRING CAMPS",
    image: "/assets/specialCamp/summer-camp.jpg",
    briefIntro:
      "Kickstart your season with THUNDERBOLTS Spring Camps! Enjoy focused training and skill enhancement to boost your performance.",
  },
  {
    id: 3,
    title: "Athletic Development Workshops/Clinics",
    image: "/assets/specialCamp/athletic-development-workshop.jpg",
    briefIntro:
      "Enhance your skills with our Workshops and Clinics! Get expert guidance and focused training to refine techniques and improve performance.",
  },
  {
    id: 4,
    title: "Precision Skill Mastery Camps",
    image: "/assets/specialCamp/precision-mastery.jpg",
    briefIntro:
      "Target your skills with our Specific Training Camps! Receive personalized coaching and focused practice to master key techniques and advance your game.",
  },
  {
    id: 5,
    title: "Adventure Camps",
    image: "/assets/specialCamp/Adventure-camp.jpg",
    briefIntro:
      "Unleash your adventurous spirit! Our Thrill Seekers Adventure Camp offers exciting activities designed to challenge your endurance and teamwork, perfect for those looking to engage with nature and push their personal limits.",
  },
  {
    id: 6,
    title: "Corporate Leagues",
    image: "/assets/specialCamp/corporate-league.jpg",
    briefIntro:
      "Promote team spirit and healthy competition with our Corporate Leagues! Engage your employees in exciting sports events designed to foster collaboration, fitness, and workplace camaraderie.",
  },
];

export default function SpecialCampsPage() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="title">
        <div>
          {/* Page Title */}
          <div className="page-title page-title-blog">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page-title-heading">
                    <h1 className="title">SPECIAL CAMPS</h1>
                  </div>
                  {/* /.page-title-captions */}
                  <div className="breadcrumbs">
                    <ul>
                      <li>
                        <Link href="/">Homepage</Link>
                      </li>
                      <li>
                        <i className="icon-Arrow---Right-2" />
                      </li>
                      <li>
                        <a>Special Camps</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
          <div className="container">
            <p className="post wow fadeInUp animated text-center py-5 display-6">
              Explore new challenges, refine your skills, and connect with
              fellow athletes in an environment that fosters growth and success.
              No matter your level or sport, our special camps provide the
              perfect opportunity to push your limits and take your performance
              to new heights.
            </p>
            <div className="row d-flex flex-wrap justify-content-center py-5">
              {items.map((camp) => (
                <div
                  key={camp.id}
                  className="col-lg-4 col-md-6 mb-5 wow fadeInUp animated"
                  data-wow-delay={`${0.2 * camp.id}s`}
                >
                  <div className="card shadow-lg rounded-4 border-0 overflow-hidden h-100 transition-all hover-transform">
                    <div
                      className="image-container"
                      style={{ height: "250px", overflow: "hidden" }}
                    >
                      <img
                        src={camp.image}
                        className="img-fluid w-100 h-100"
                        alt={camp.title}
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                          transition: "transform 0.5s ease",
                        }}
                      />
                    </div>
                    <div className="card-body p-4 d-flex flex-column">
                      <h5 className="card-title fw-bold fs-4 mb-3">
                        {camp.title}
                      </h5>
                      <p className="card-text text-muted flex-grow-1">
                        {camp.briefIntro}
                      </p>
                      <div className="text-center mt-3">
                        <Link
                          href={`/camps/${camp.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="btn btn-primary px-4 py-2 rounded-pill fw-medium"
                          style={{
                            background:
                              "linear-gradient(135deg, #0049BE, #FEC802)",
                            border: "none",
                            minWidth: "150px",
                          }}
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
            .hover-transform:hover {
              transform: translateY(-10px);
              box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15) !important;
            }

            .transition-all {
              transition: all 0.3s ease;
            }

            .card:hover img {
              transform: scale(1.05);
            }

            .card {
              border: none;
              height: 100%;
              display: flex;
              flex-direction: column;
            }

            .image-container {
              position: relative;
              overflow: hidden;
            }

            .rounded-4 {
              border-radius: 1rem !important;
            }
          `}</style>
        </div>
      </Layout>
    </>
  );
}
