import Layout from "../components/Layout/Layout";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <Layout>
      <div className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="section-container-spacer text-center">
                <h1 className="h2">04 : Contact me</h1>
              </div>

              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <form onSubmit={handleSubmit} className="reveal-content">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="form-group">
                          <input
                            name="email"
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="form-group">
                          <input
                            name="subject"
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                subject: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            name="message"
                            className="form-control"
                            rows={5}
                            placeholder="Enter your message"
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                message: e.target.value,
                              })
                            }
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-default btn-lg"
                        >
                          Send
                        </button>
                      </div>
                      <div className="col-md-5 address-container">
                        <ul className="list-unstyled">
                          <li>
                            <span className="fa-icon">
                              <i className="fa fa-phone" aria-hidden="true"></i>
                            </span>
                            +91 9987960088
                          </li>
                          <li>
                            <span className="fa-icon">
                              <i className="fa fa-at" aria-hidden="true"></i>
                            </span>
                            shreyasd1414@gmail.com
                          </li>
                          <li>
                            <span className="fa-icon">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>
                            </span>
                            Goregaon, India
                          </li>
                        </ul>
                        <h3>Follow me on social networks</h3>
                        <a
                          href="http://www.github.com/Emosans"
                          title="GitHub"
                          className="fa-icon"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-github"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/shreyasdhamankar/"
                          title="LinkedIn"
                          className="fa-icon"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
