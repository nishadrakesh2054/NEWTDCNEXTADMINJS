"use client";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";

export default function Form1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    notes: false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        notes: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form");
    }
  };
  return (
    <>
      <div className="widget-form-register">
        <div className="row">
          <div className="col-md-6 pd-form image-register">
            <img src="assets/contact/contactHead.jpg" alt="image" />
          </div>
          <div className="col-md-6 pd-form">
            <div className="widget-register background-green">
              <div className="heading-register">
                <h2 className="title-register">
                  Join our thunderbolts development center{" "}
                </h2>
              </div>
              <div className="list-contact">
                <div className="contact">
                  <span> Phone: </span>
                  <div className="address">
                    +977 980 197 3967 +977 980 197 3975
                  </div>
                </div>
                <div className="contact">
                  <span> Email: </span>
                  <div className="address">info@thunderbolts.com.np</div>
                </div>
              </div>
              <ul className="social-media">
                <li>
                  <Link href="/twitter.com">
                    <i className="icon-facebook" />
                  </Link>
                </li>
                <li>
                  <Link href="/dribbble.com">
                    <i className="icon-instagram" />
                  </Link>
                </li>

                <li>
                  <Link href="/pinterest">
                    <i className="icon-youtube" />
                  </Link>
                </li>
              </ul>
              <div className="form-register">
                <form
                  onSubmit={handleSubmit}
                  id="contactform-page"
                  className="contact-page form-submit"
                  action="/"
                  acceptCharset="utf-8"
                  noValidate="novalidate"
                >
                  <div className="text-wrap clearfix">
                    <fieldset className="name-wrap">
                      <input
                        type="text"
                        id="name"
                        className="tb-my-input"
                        name="name"
                        tabIndex={1}
                        placeholder="Your name"
                        size={32}
                        aria-required="true"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </fieldset>
                    <fieldset className="email-wrap">
                      <input
                        type="email"
                        id="email"
                        className="tb-my-input"
                        name="email"
                        tabIndex={2}
                        placeholder="Your email"
                        size={32}
                        aria-required="true"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </fieldset>
                    <fieldset className="phone-wrap">
                      <input
                        type="tel"
                        id="phone"
                        className="tb-my-input"
                        name="phone"
                        tabIndex={1}
                        placeholder="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        size={32}
                        aria-required="true"
                        required
                      />
                    </fieldset>
                    <fieldset className="age-wrap">
                      <input
                        type="text"
                        id="subject"
                        className="tb-my-input"
                        name="subject"
                        tabIndex={1}
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        size={32}
                        aria-required="true"
                        required
                      />
                    </fieldset>
                  </div>
                  <fieldset className="message-wrap">
                    <textarea
                      id="comment-message"
                      name="message"
                      rows={3}
                      tabIndex={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      aria-required="true"
                      defaultValue={""}
                    />
                  </fieldset>
                  <fieldset className="notes-wrap pb-2">
                    <label>
                      <input
                        type="checkbox"
                        name="notes"
                        checked={formData.notes}
                        onChange={handleChange}
                      />
                      &nbsp; Note: Keep me updated on new features, program
                      updates, and special offers from Thunderbolts Development
                      Center.
                    </label>
                  </fieldset>

                  <div className="header-right">
                    <button
                      className="btn-contact bg-primary  text-light"
                      name="submit"
                    >
                      Join Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
