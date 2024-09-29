import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Contact.css";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
// import { Bounce } from 'react-reveal';

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !message) {
        toast.error("PLease Provide all fields");
        return;
      }
      // const res = await axios.post("/api/v1/portfolio/sendEmail", {
      //   name,
      //   email,
      //   msg,
      // });
      const res = await axios.post('http://localhost:5000/send', {
        name,
        email,
        message,
      });
      //validation success
      if (res.data.success) {
        toast.success(res.data.message);
        
        // setname("");
        // setEmail("");
        // setMsg("");
        setname('');
        setEmail('');
        setMessage('');
      } 
      else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.log(error);
    }
  };

  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="ocontact"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
                        <a href="https://www.linkedin.com/in/krishna-murari-kumar-796b97250/" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin color="blue" size={30} className="ms-2" />
                        </a>
                        <a href="https://github.com/Krishnamurari7/" target="_blank" rel="noopener noreferrer">
                        <BsGithub color="black" size={30} className="ms-2" />
                        </a>
                        <BsInstagram color="red" size={30} className="ms-2" />
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    {/* <form className="contact-form" onSubmit={handleSubmit}></form> */}
                    <div className="row px-3">
                    <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your Name"
                        className="mb-3"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        required
                      />
                    </div>
                    <div className="row px-3">
                    <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        // name="email"
                        id="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="row px-3">
                    <label htmlFor="message">Message</label>
                      <textarea
                        // type="text"
                        // name="msg"
                        id="message"
                        value={message}
                        placeholder="Write your message"
                        className="mb-3"
                        // value={msg}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                    <div className="row px-3">
                      {/* <button className="button" onClick={handleSubmit}>
                        SEND MESSAGE
                      </button> */}
                       <button className="button" onClick={handleSubmit} type="submit">Send Message</button>
                       {/* <p className="status">{status}</p> */}
                    </div>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
