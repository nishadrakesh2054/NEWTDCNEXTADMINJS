"use client";
import axios from "axios";
import { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "./register.css";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

const page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    contactNo: "",
    email: "",
    dob: "",
    age: "",
    gender: "",
    schoolName: "",
    parentName: "",
    parentEmail: "",
    parentContactNo: "",
    parentAddress: "",
    sports: "",
    time: "",
    category: "",
    days: "",
    emergencyContactPersonName: "",
    emergencyContactPersonNumber: "",
    hasMedicalConditions: "",
    medicalDetails: "",
    hasMedicalInsurance: "",
    insuranceNo: "",
    transportation: "",
    paymentMethod: "fonepay",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formError, setFormError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "dob") {
      const birthDate = new Date(value);
      const today = new Date();
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();

      // Check if the birthday has passed this year
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        calculatedAge--;
      }

      // Determine the category based on age
      let category = "";
      let days = "";
      if (calculatedAge >= 6 && calculatedAge <= 11) {
        category = "Grassroots";
        days = "Tuesday & Thursday";
      } else if (calculatedAge >= 12 && calculatedAge <= 15) {
        category = "Intermediate";
        days = "Monday, Wednesday & Friday";
      } else if (calculatedAge >= 16 && calculatedAge <= 19) {
        category = "Senior";
        days = "Monday, Wednesday & Friday";
      } else if (calculatedAge > 19) {
        // alert("You are not eligible  to participate");
        toast.warning("Your age  must be between 6 and 19 years old.");
        return;
      }
      setFormData((prevFormData) => ({
        ...prevFormData,
        dob: value,
        age: calculatedAge.toString(),
        category,
        days,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    if (
      !formData.fullName ||
      !formData.contactNo ||
      !formData.email ||
      !formData.age ||
      !formData.address ||
      !formData.dob ||
      !formData.age ||
      !formData.gender ||
      !formData.schoolName ||
      !formData.parentName ||
      !formData.parentEmail ||
      !formData.parentContactNo ||
      !formData.parentAddress ||
      !formData.sports ||
      !formData.time ||
      !formData.category ||
      !formData.emergencyContactPersonNumber ||
      !formData.emergencyContactPersonName ||
      !formData.hasMedicalConditions ||
      (formData.hasMedicalConditions === "yes" && !formData.medicalDetails) ||
      (formData.hasMedicalInsurance === "yes" && !formData.insuranceNo) ||
      !formData.transportation ||
      !formData.paymentMethod ||
      formData.agreement !== true
    ) {
      setFormError("Please fill in all required fields.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    if (!validateForm()) return;
    setIsSubmitting(true);

    const amount = 1;
    const dataToSend = { ...formData, amount };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/pre-check-registration",
        dataToSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("response backend", response.data);

      if (response.data.success) {
        // Encode formData for the URL
        sessionStorage.setItem("formData", JSON.stringify(formData));
        sessionStorage.setItem("paymentAmount", amount.toString());
        sessionStorage.setItem("prn", response.data.prn);
        // const encodedFormData = encodeURIComponent(JSON.stringify(formData));

        // Navigate to payment page with query parameters
        // router.push(
        //   `/payform?formData=${encodedFormData}&fee=${amount}&prn=${response.data.prn}`
        // );
        router.push(`/payform?fee=${amount}&prn=${response.data.prn}`);

        toast.success("Registration successful! Proceeding to payment.");
      } else {
        setFormError(response.data.message || "Registration check failed.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setFormError(
        error.response?.data?.message ||
          "Failed to submit the form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="title">
        <div className="bg-light">
          <div className="page-title page-title-blog">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page-title-heading">
                    <h1>THUNDERBOLTS DEVELOPMENT CENTER</h1>
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
                        <a>Register</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="themeflat-container pb-5">
            <p className="text-center py-4 ">
              Thank you for choosing Thunderbolts Development Center (TDC) for
              your child’s sports development. <br /> Please fill out the form
              below to complete the registration process.
            </p>
            {error && <Alert variant="danger">{error}</Alert>}
            {loading ? (
              <div className="text-center">
                <Spinner animation="border" />
              </div>
            ) : (
              <Form className="form-register " onSubmit={handleSubmit}>
                <h5 className="parallelogram-bg">Personal Information</h5>
                <Row xs={1} md={2}>
                  <Form.Group
                    as={Col}
                    controlId="formGridfullName"
                    className="mb-3"
                  >
                    <Form.Label className="form-label ">Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="fullName"
                      className="form-input"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId="formGridAddress"
                    className="mb-3"
                  >
                    <Form.Label className="form-label fw-semibold">
                      Address
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      placeholder="Enter address"
                      className="form-input"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Row>
                <Row xs={1} md={3}>
                  <Form.Group
                    as={Col}
                    controlId="formGridContactNo"
                    className="mb-3"
                  >
                    <Form.Label className="form-label">Contact No</Form.Label>
                    <Form.Control
                      type="text"
                      name="contactNo"
                      className="form-input"
                      placeholder="Enter contact number"
                      value={formData.contactNo}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId="formGridEmail"
                    className="mb-3"
                  >
                    <Form.Label className="form-label">Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email address"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId="formGridGender"
                    className="mb-3"
                  >
                    <Form.Label className="form-label">Gender</Form.Label>
                    <Form.Select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="form-input text-secondary"
                      required
                    >
                      <option value="">Choose...</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Row xs={1} md={3}>
                  <Form.Group as={Col} controlId="formGridDob" className="mb-3">
                    <Form.Label className="form-label">
                      Date Of Birth
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="dob"
                      className="form-input text-secondary"
                      value={formData.dob}
                      onChange={handleChange}
                      max={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridAge" className="mb-3">
                    <Form.Label className="form-label">Age</Form.Label>
                    <Form.Control
                      type="number"
                      name="age"
                      className="form-input"
                      value={formData.age}
                      readOnly
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    controlId="formGridSchoolName"
                    className="mb-3"
                  >
                    <Form.Label className="form-label">School Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="schoolName"
                      className="form-input"
                      value={formData.schoolName}
                      onChange={handleChange}
                      placeholder="Enter school name"
                      required
                    />
                  </Form.Group>
                  <small> </small>
                </Row>

                {/* parent info */}
                <h5 className="parallelogram-bg mt-4">
                  Parent/Guardian Information
                </h5>

                <Row xs={1} md={2}>
                  <Form.Group
                    as={Col}
                    controlId="formGridParentName"
                    className="mb-3"
                  >
                    <Form.Label className="form-label">
                      Parent/Guardian Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="parentName"
                      className="form-input"
                      placeholder="Enter Parent name"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId="formGridParentContactNo"
                    className="mb-3"
                  >
                    <Form.Label className="form-label">
                      Contact Number
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="parentContactNo"
                      className="form-input"
                      placeholder="Enter contact number"
                      value={formData.parentContactNo}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Row>
                <Row xs={1} md={2}>
                  <Form.Group
                    as={Col}
                    controlId="formGridParentAddress"
                    className="mb-3"
                  >
                    <Form.Label className="form-label">
                      Home Address{" "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="parentAddress"
                      placeholder="Enter address"
                      className="form-input"
                      value={formData.parentAddress}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    controlId="formGridParentEmail"
                    className="mb-3"
                  >
                    <Form.Label className="form-label">
                      Email Address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="parentEmail"
                      placeholder="Enter Email address"
                      className="form-input"
                      value={formData.parentEmail}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Row>

                <h5 className="parallelogram-bg mt-4">Sports Selection</h5>
                <Row xs={1} md={2}>
                  <Form.Group
                    as={Col}
                    controlId="formGridSports"
                    className="mb-3"
                  >
                    <Form.Label className="form-label">Sports</Form.Label>
                    <Form.Select
                      name="sports"
                      value={formData.sports}
                      onChange={handleChange}
                      className="form-input text-secondary"
                      required
                    >
                      <option value="">Select a Sport ...</option>
                      <option value="football">Football</option>
                      <option value="futsal">Futsal</option>
                      <option value="cricket">Cricket</option>
                      <option value="swimming">Swimming</option>
                      <option value="tennis">Tennis</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    controlId="formGridCategory"
                    className="mb-3"
                  >
                    <Form.Label className="form-label">Category</Form.Label>
                    <Form.Control
                      type="text"
                      name="category"
                      className="form-input"
                      value={formData.category}
                      readOnly
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    controlId="formGridCategory"
                    className="mb-3"
                  >
                    <Form.Label className="form-label">
                      Training Days
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="days"
                      className="form-input"
                      value={formData.days}
                      readOnly
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    controlId="formGridTime"
                    className="mb-3"
                  >
                    <Form.Label className="form-label">
                      Preferred Training Time
                    </Form.Label>
                    <Form.Select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="form-input text-secondary"
                      required
                    >
                      <option value="">Select from available slots </option>
                      <option value="3:00 PM - 4:30 PM">
                        3:00 PM - 4:30 PM
                      </option>
                      <option value="4:30 PM - 6:00 PM">
                        4:30 PM - 6:00 PM
                      </option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                <h5 className="mt-4 parallelogram-bg">
                  MEDICAL & EMERGENCY INFORMATION
                </h5>
                <Row xs={1} md={2}>
                  {/* Medical Conditions or Allergies */}
                  <Form.Group
                    as={Col}
                    controlId="formGridMedicalConditions"
                    className="mb-3"
                  >
                    <Form.Label className="form-label">
                      Does the participant have any medical conditions or
                      allergies?
                    </Form.Label>
                    <div>
                      <Form.Check
                        type="radio"
                        label="Yes"
                        name="hasMedicalConditions"
                        value="yes"
                        onChange={handleChange}
                        className="custom-radio"
                        inline
                      />
                      <Form.Check
                        type="radio"
                        label="No"
                        name="hasMedicalConditions"
                        value="no"
                        onChange={handleChange}
                        inline
                        className="custom-radio"
                      />
                    </div>

                    {formData.hasMedicalConditions === "yes" && (
                      <Form.Control
                        type="text"
                        name="medicalDetails"
                        className="form-input mt-2"
                        value={formData.medicalDetails}
                        onChange={handleChange}
                        placeholder="Please specify"
                        required
                      />
                    )}
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    controlId="formGridMedicalInsurance"
                    className="mb-3"
                  >
                    <Form.Label className="form-label">
                      Does the participant have medical insurance?
                    </Form.Label>
                    <div>
                      <Form.Check
                        type="radio"
                        label="Yes"
                        name="hasMedicalInsurance"
                        value="yes"
                        onChange={handleChange}
                        className="custom-radio"
                        inline
                      />
                      <Form.Check
                        type="radio"
                        label="No"
                        name="hasMedicalInsurance"
                        value="no"
                        onChange={handleChange}
                        inline
                        className="custom-radio"
                      />
                    </div>

                    {formData.hasMedicalInsurance === "yes" && (
                      <Form.Control
                        type="text"
                        name="insuranceNo"
                        className="form-input mt-2"
                        value={formData.insuranceNo}
                        onChange={handleChange}
                        placeholder="Please Enter Your Insurance Number"
                        required
                      />
                    )}
                  </Form.Group>
                </Row>

                <br />
                {/* emergency contact person */}

                <Row xs={1} md={2}>
                  <Form.Group
                    as={Col}
                    controlId="formGridTransportation"
                    className="mb-3 radiobuttonParent "
                  >
                    <Form.Label className="form-label">
                      Do You Require Transportation services?
                    </Form.Label>
                    <div className="radio-group">
                      <Form.Check
                        type="radio"
                        label="Yes"
                        name="transportation"
                        value="yes"
                        onChange={handleChange}
                        checked={formData.transportation === "yes"}
                        className="custom-radio"
                        inline
                      />
                      <Form.Check
                        type="radio"
                        label="No"
                        name="transportation"
                        value="no"
                        onChange={handleChange}
                        checked={formData.transportation === "no"}
                        inline
                        className="custom-radio"
                      />
                    </div>
                  </Form.Group>
                </Row>


                

                <Row xs={1} md={2}>
                  {/* Emergency Contact Name */}
                  <Form.Group
                    as={Col}
                    controlId="formGridEmergencyContactName"
                    className="mb-3"
                  >
                    <Form.Label>Emergency Contact Person Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="emergencyContactPersonName"
                      className="form-input"
                      value={formData.emergencyContactPersonName}
                      onChange={handleChange}
                      placeholder="Enter emergency contact name"
                      required
                    />
                  </Form.Group>

                  {/* Emergency Contact Number */}
                  <Form.Group
                    as={Col}
                    controlId="formGridEmergencyContactNumber"
                    className="mb-3"
                  >
                    <Form.Label>Emergency Contact Person Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="emergencyContactPersonNumber"
                      className="form-input"
                      value={formData.emergencyContactPersonNumber}
                      onChange={handleChange}
                      placeholder="Enter emergency contact number"
                      required
                    />
                  </Form.Group>
                </Row>
                <br />
                {/* <Row>
                  <Form.Group
                    as={Col}
                    controlId="formGridNotes"
                    className="mb-3"
                  >
                    <Form.Check
                      type="checkbox"
                      label=" I want to receive updates about new programs, special offers, and announcements from Thunderbolts Development Center."
                      checked={formData.notes}
                      className="custom-radio"
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.checked })
                      }
                    />
                  </Form.Group>
                </Row> */}

                <Row className="d-flex align-items-center">
                  <Col>
                    <Form.Group controlId="formGridNotes" className="mb-3">
                      <div className="d-flex align-items-start gap-4">
                        <Form.Check
                          type="checkbox"
                          id="formGridNotes"
                          checked={formData.notes}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              notes: e.target.checked,
                            })
                          }
                        />
                        <Form.Label htmlFor="formGridNotes" className="mb-0">
                          I want to receive updates about new programs, special
                          offers, and announcements from Thunderbolts
                          Development Center.
                        </Form.Label>
                      </div>
                    </Form.Group>
                  </Col>
                </Row>

                {/* <Row className="d-flex align-items-center ">
                  <Form.Group
                    as={Col}
                    controlId="formGridAgreement"
                    className="mb-3"
                  >
                    <Form.Check
                      type="checkbox"
                      label="I acknowledge and accept the agreement terms for participation in Thunderbolts Development Center sports programs."
                      checked={formData.agreement}
                      className="custom-radio"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          agreement: e.target.checked,
                        })
                      }
                    />
                  </Form.Group>
                </Row> */}

                <Row className="d-flex align-items-center">
                  <Col>
                    <Form.Group controlId="formGridAgreement" className="mb-3">
                      <div className="d-flex align-items-start gap-4">
                        <Form.Check
                          type="checkbox"
                          id="agreementCheckbox"
                          checked={formData.agreement}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              agreement: e.target.checked,
                            })
                          }
                        />
                        <Form.Label
                          htmlFor="agreementCheckbox"
                          className="mb-0"
                        >
                          I acknowledge and accept the agreement terms for
                          participation in Thunderbolts Development Center
                          sports programs.
                        </Form.Label>
                      </div>
                    </Form.Group>
                  </Col>
                </Row>

                {formError && <Alert variant="danger">{formError}</Alert>}
                <div className="button-container mt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="paynow-btn"
                  >
                    {isSubmitting ? (
                      <Spinner animation="border" size="sm" />
                    ) : (
                      "Register Here"
                    )}
                  </Button>
                </div>
              </Form>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default page;
