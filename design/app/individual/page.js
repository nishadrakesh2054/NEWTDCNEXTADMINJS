"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

const individualSports = [
  {
    id: "tennis",
    name: "Tennis Academy",
    heroImage:
      "https://img.freepik.com/premium-photo/there-are-two-tennis-rackets-two-balls-green-surface_1034560-105455.jpg?w=1380",
    description:
      "Our Tennis Program offers comprehensive training for players of all levels, from beginners to advanced athletes. With expert coaching and a focus on developing technique, agility, and strategic play, we help participants enhance their skills and enjoy the game. Whether you're picking up a racket for the first time or aiming to compete at a higher level, our program provides the perfect environment for growth and success. Join us on the court and elevate your tennis game!",
    levels: [
      {
        title: "Grassroots",
        age: "6 – 11 years old",
        image: "assets/academy/tennis/grassroottennis.jpg",
        button: "Join Now",
        description:
          "Our Grassroots program is designed to introduce young athletes to the fundamentals of sports in a fun and engaging environment. Through age-appropriate training and activities, we nurture their passion for sports while building essential skills. Athletes in this category will have the opportunity to participate in beginner and non-beginner groups, ensuring tailored coaching that caters to their individual needs and abilities.",
      },
      {
        title: "Intermediate ",
        age: "12 - 15 years old",
        image: "assets/academy/tennis/intermed.jpg",
        button: "Join Now",
        description:
          "The Intermediate program focuses on refining skills and enhancing performance for young athletes ready to take their game to the next level. With a more structured approach, this level emphasizes skill development, teamwork, and competition. Athletes can choose between beginner and non-beginner groups to ensure they receive the right support and challenge, preparing them for future sporting endeavors.",
      },
      {
        id: "senior",
        age: "16 - 19 years old",
        title: "Senior ",
        image: "assets/academy/tennis/tennielit.jpg",
        button: "Join Now",
        description:
          "Our Senior program is tailored for aspiring athletes looking to excel in their chosen sport. At this level, we focus on advanced training techniques, performance optimization, and competitive readiness. Athletes will benefit from specialized coaching in either beginner or non-beginner groups, allowing for personalized development that meets their individual goals and aspirations",
      },
    ],
  },
  {
    id: "aquatic",
    name: "Thunderbolts Aquatic Academy",
    heroImage:
      "https://img.freepik.com/premium-photo/swimming-trainer-children-swimming-pool-with-transition_1134-18478.jpg?w=1380",
    description:
      "Dive into excellence at THUNDERBOLTS! We offer top-notch training with expert coaches and state-of-the-art facilities, designed to help swimmers of all levels improve their technique and achieve their goals. Whether you're just starting out or aiming for competitive success, our programs provide a supportive and effective environment for every swimmer. Join us and make a splash in your swimming journey!",
    levels: [
      {
        title: "grassroot",
        age: "6 – 11 years old",
        image: "assets/academy/swimming/grass.jpg",
        button: "Join Now",
        description:
          "Our Grassroots program is designed to introduce young athletes to the fundamentals of sports in a fun and engaging environment. Through age-appropriate training and activities, we nurture their passion for sports while building essential skills. Athletes in this category will have the opportunity to participate in beginner and non-beginner groups, ensuring tailored coaching that caters to their individual needs and abilities",
      },
      {
        title: "intermediate",
        age: "12 - 15 years old",
        image: "assets/academy/swimming/iinter.jpg",
        button: "Join Now",
        description:
          "The Intermediate program focuses on refining skills and enhancing performance for young athletes ready to take their game to the next level. With a more structured approach, this level emphasizes skill development, teamwork, and competition. Athletes can choose between beginner and non-beginner groups to ensure they receive the right support and challenge, preparing them for future sporting endeavors.",
      },
      {
        title: "senior",
        age: "16 - 19 years old",
        image: "assets/academy/swimming/elit.jpg",
        button: "Join Now",
        description:
          "Our Senior program is tailored for aspiring athletes looking to excel in their chosen sport. At this level, we focus on advanced training techniques, performance optimization, and competitive readiness. Athletes will benefit from specialized coaching in either beginner or non-beginner groups, allowing for personalized development that meets their individual goals and aspirations.",
      },
    ],
  },
];

export default function IndividualSportList() {
  const [activeTabs, setActiveTabs] = useState(
    individualSports.reduce((acc, sport, idx) => {
      acc[sport.id] = 0;
      return acc;
    })
  );

  const handleTabChange = (sportId, tabIndex) => {
    setActiveTabs((prev) => ({
      ...prev,
      [sportId]: tabIndex,
    }));
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Programs">
      <div className="page-title page-title-blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading">
                <h1 className="title">Individual Sports Programs</h1>
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
                    <a>Individual Program</a>
                  </li>
                </ul>
              </div>
              {/* /.breadcrumbs */}
            </div>
            {/* /.col-md-12 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      <div className="container">
        <div className="row g-4 my-4">
          {individualSports.map((sport) => {
            const activeTabIndex = activeTabs[sport.id] || 0;
            const activeLevel = sport.levels[activeTabIndex];

            return (
              <div key={sport.id} className="col-12">
                <div className="card border-0 shadow-lg overflow-hidden">
              
                  <div
                    className="position-relative"
                    style={{ height: "350px" }}
                  >
                    <img
                      src={sport.heroImage}
                      alt={sport.name}
                      className="w-100 h-100 object-fit-cover"
                      style={{ objectPosition: "center" }}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100  d-flex align-items-center justify-content-center px-3">
                      <div className="text-center">
                        <h3 className="text-white display-6 fw-bold mb-3">
                          {sport.name}
                        </h3>
                        <p
                          className="text-dark mb-0 "
                          style={{ lineHeight: "1.2", fontSize: "1rem" }}
                        >
                          {sport.description}
                        </p>
                      </div>
                    </div>
                  </div>

           
                  <div className="card-body px-4 py-5 bg-light">
                    <h4 className="mb-4 fw-bold text-center">
                      Explore Training Levels
                    </h4>
                    <ul
                      className="nav nav-pills mb-3 justify-content-center"
                      id={`tabs-${sport.id}`}
                      role="tablist"
                    >
                      {sport.levels.map((level, i) => (
                        <li className="nav-item mx-1" key={i}>
                          <button
                            className={`nav-link px-2 text-uppercase  ${
                              activeTabIndex === i
                                ? "active border-primary"
                                : "border-0"
                            }`}
                            onClick={() => handleTabChange(sport.id, i)}
                            type="button"
                            role="tab"
                            style={{
                              borderRadius: "30px",
                              transition: "all 0.3s ease-in-out",
                              backgroundColor:
                                activeTabIndex === i ? "#007bff" : "#f8f9fa",
                              color: activeTabIndex === i ? "#ffff" : "#495057",
                            }}
                            // onMouseEnter={(e) =>
                            //   (e.target.style.backgroundColor = "#0056b3")
                            // }
                            onMouseLeave={(e) =>
                              (e.target.style.backgroundColor =
                                activeTabIndex === i ? "#007bff" : "#f8f9fa")
                            }
                          >
                            {level.title}
                          </button>
                        </li>
                      ))}
                    </ul>

                    <div className="row align-items-center g-5  mt-2">
                      <div className="col-md-5 ">
                        <img
                          src={activeLevel.image}
                          alt={activeLevel.title}
                          className="img-fluid rounded shadow-sm border border-warning border-2"
                          style={{
                            width: "100%",
                            height: "320px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className="col-md-7">
                        <h4 className="fw-bold mb-2 text-uppercase">
                          {activeLevel.title}
                        </h4>
                        {activeLevel.age && (
                          <p className="text-muted mb-2">
                            Age Group: {activeLevel.age}
                          </p>
                        )}
                        <p className=" post wow fadeInUp animated mb-3">
                          {activeLevel.description}
                        </p>

                        <div className="header-right">
                          <Link href="/register">
                            <button className="btn-contact">
                              {activeLevel.button}
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
