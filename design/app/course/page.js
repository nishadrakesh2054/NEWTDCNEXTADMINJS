"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaClock,
  FaRocket,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Row, Col, Card, Table, Accordion } from "react-bootstrap";

export default function CoursePage() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Football Coaching Workshop"
      >
        <div className="page-title bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="page-title-heading">
                  <h1 className="title text-light">
                    Football Coaching Workshop
                  </h1>
                </div>
                <div className="breadcrumbs">
                  <ul>
                    <li>
                      <Link href="/" className="text-light">
                        Homepage
                      </Link>
                    </li>
                    <li>
                      <i className="icon-Arrow---Right-2 text-light" />
                    </li>
                    <li>
                      <span className="text-warning">Course</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-5">
          {/* Header Section */}
          <Row className="justify-content-center text-center mb-4">
            <Col md={10} lg={8}>
              <h3 className="fw-semibold text-dark">
                Football Workshop: Introduction to Coaching - 2025
              </h3>
              <div
                className="divider bg-warning mx-auto my-3"
                style={{ height: "3px", width: "100px" }}
              ></div>
            </Col>
          </Row>

          {/* Introduction Section */}
          <Row className="justify-content-center mb-5">
            <Col md={10}>
              <div className="bg-light p-4 rounded-3 shadow-sm">
                <h4 className="fw-bold text-start mb-3 text-primary">
                  Kickstart Your Coaching Journey!
                </h4>
                <p className="lead">
                  Are you passionate about football and eager to take your first
                  step into the world of coaching?
                </p>
                <p>
                  The Thunderbolts Development Center is excited to announce our
                  Introduction to Coaching Workshop, designed for individuals
                  aged 18 to 36 who aspire to begin their coaching career.
                  Whether you are a male or female with a love for the game,
                  this program is your gateway to turning your passion into a
                  profession.
                </p>
              </div>
            </Col>
          </Row>

          {/* Key Details Cards */}
          <Row className="justify-content-center mb-5 g-4">
            <Col md={4}>
              <Card className="h-100 border-warning border-2 shadow-sm">
                <Card.Body className="text-center py-4">
                  <Card.Title className="text-primary fw-bold fs-4 mb-3">
                    Eligibility
                  </Card.Title>
                  <div className="d-flex flex-column align-items-center">
                    <span className="display-5 fw-bold text-dark">18-36</span>
                    <span className="fs-5 text-muted mb-3">years</span>
                    <p className="mb-0">Open to males and females</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 border-warning border-2 shadow-sm">
                <Card.Body className="text-center py-4">
                  <Card.Title className="text-primary fw-bold fs-4 mb-3">
                    Duration
                  </Card.Title>
                  <div className="d-flex flex-column align-items-center">
                    <span className="display-5 fw-bold text-dark">
                      32 Hours
                    </span>
                    <p className="mb-0">Of comprehensive training</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 border-warning border-2 shadow-sm">
                <Card.Body className="text-center py-4">
                  <Card.Title className="text-primary fw-bold fs-4 mb-3">
                    Course Fee
                  </Card.Title>
                  <div className="d-flex flex-column align-items-center">
                    <span className="display-5 fw-bold text-dark">
                      NPR 3,000/-
                    </span>
                    <p className="mb-0">Affordable quality training</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Schedule Section */}
          <Row className="justify-content-center mb-5">
            <Col md={10}>
              <h4 className="fw-bold text-start mb-3 text-primary">Schedule</h4>
              <div className="table-responsive">
                <Table bordered hover className="align-middle">
                  <thead className="bg-primary text-light">
                    <tr>
                      <th className="text-center">Week 1</th>
                      <th className="text-center">Week 2</th>
                      <th className="text-center">Week 3</th>
                      <th className="text-center">Week 4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mb-2">
                          <FaCalendarAlt className="text-warning me-2" />
                          <span>Saturday, 1st March</span>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <FaCalendarAlt className="text-warning me-2" />
                          <span>Sunday, 2nd March</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <FaClock className="text-warning me-2" />
                          <span>10:00 AM - 2:00 PM</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mb-2">
                          <FaCalendarAlt className="text-warning me-2" />
                          <span>Saturday, 8th March</span>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <FaCalendarAlt className="text-warning me-2" />
                          <span>Sunday, 9th March</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <FaClock className="text-warning me-2" />
                          <span>10:00 AM - 2:00 PM</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mb-2">
                          <FaCalendarAlt className="text-warning me-2" />
                          <span>Saturday, 15th March</span>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <FaCalendarAlt className="text-warning me-2" />
                          <span>Sunday, 16th March</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <FaClock className="text-warning me-2" />
                          <span>10:00 AM - 2:00 PM</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mb-2">
                          <FaCalendarAlt className="text-warning me-2" />
                          <span>Saturday, 22nd March</span>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <FaCalendarAlt className="text-warning me-2" />
                          <span>Sunday, 23rd March</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <FaClock className="text-warning me-2" />
                          <span>10:00 AM - 2:00 PM</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>

          {/* Certification Section */}
          <Row className="justify-content-center mb-5">
            <Col md={10}>
              <div
                className="p-4 rounded-4 shadow-lg"
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
                }}
              >
                <h4
                  className="fw-bold text-start mb-3"
                  style={{ color: "#0d6efd" }}
                >
                  Certification
                </h4>
                <p className="mb-0 fs-5" style={{ color: "#212529" }}>
                  Participants will receive a Certificate of Participation upon
                  successful completion of the 32-hour workshop.
                </p>
              </div>
            </Col>
          </Row>

          {/* Accordion Sections */}
          <Row className="justify-content-center mb-5">
            <Col md={10}>
              <Accordion defaultActiveKey="0" className="mb-3">
                <Accordion.Item eventKey="0" className="border-0 shadow-sm">
                  <Accordion.Header className="bg-primary text-light p-0">
                    <div className="d-flex justify-content-between align-items-center w-100 pe-3">
                      <h5 className="mb-0 d-flex align-items-center ps-3 ">
                        <FaRocket className="me-2 text-warning" />
                        What You'll Gain
                      </h5>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="bg-light">
                    <ul className="list-unstyled">
                      <li className="mb-2 d-flex align-items-start">
                        <MdKeyboardArrowRight className="text-primary me-2 mt-1" />
                        <span>
                          Foundational knowledge of football coaching
                          principles.
                        </span>
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <MdKeyboardArrowRight className="text-primary me-2 mt-1" />
                        <span>
                          Practical skills to plan and deliver effective
                          training sessions.
                        </span>
                      </li>
                      <li className="mb-2 d-flex align-items-start">
                        <MdKeyboardArrowRight className="text-primary me-2 mt-1" />
                        <span>
                          Insights into player development and team management.
                        </span>
                      </li>
                      <li className="d-flex align-items-start">
                        <MdKeyboardArrowRight className="text-primary me-2 mt-1" />
                        <span>
                          A pathway to pursue your personal aspirations in
                          coaching.
                        </span>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion defaultActiveKey="1" className="mb-3">
                <Accordion.Item eventKey="1" className="border-0 shadow-sm">
                  <Accordion.Header className="bg-primary text-light p-0">
                    <div className="d-flex justify-content-between align-items-center w-100 pe-3">
                      <h5 className="mb-0 d-flex align-items-center ps-3 ">
                        <FaRocket className="me-2 text-warning" />
                        Why Join Thunderbolts?
                      </h5>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="bg-light">
                    <p className="mb-0">
                      At Thunderbolts Development Center, we are committed to
                      nurturing the next generation of Male and Female football
                      coaches. Our experienced instructors will guide you
                      through every step, ensuring you gain the confidence and
                      expertise to succeed in your coaching pathways in the
                      world of football coaching.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>

          {/* Contact Section */}
          <Row className="justify-content-center mb-5">
            <Col md={10}>
              <div className="bg-dark p-4 rounded-3 text-light">
                <h4 className="fw-bold mb-4 text-warning ">Contact Us</h4>
                <div className="row">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <FaPhoneAlt className="text-warning me-3 fs-4" />
                      <span className="fs-5">+977 9801973975/73</span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <FaMapMarkerAlt className="text-warning me-3 fs-4" />
                      <span className="fs-5">Dhapakhel, Lalitpur</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          {/* Closing Section */}
          <Row className="justify-content-center mb-5">
            <Col md={12} className="text-center">
              <div className=" p-4 rounded-3 mb-4">
                <h3 className="fw-bold mb-3">
                  Take the First Step Toward Your Coaching Dreams!
                </h3>
                <p className="lead mb-0">
                  Join us at the Thunderbolts Development Center and unlock your
                  potential as a football coach. Let's grow and shape the future
                  of Nepalese football together!
                </p>
              </div>

              <div className="mb-3">
                <img
                  src="/assets/logo/tdc-logo.png"
                  alt="Thunderbolts Development Center Logo"
                  className="img-fluid"
                  style={{ maxHeight: "100px" }}
                />
              </div>
              <p className="fst-italic text-muted">Where Champions Are Made.</p>
            </Col>
          </Row>
        </div>
      </Layout>
    </>
  );
}
