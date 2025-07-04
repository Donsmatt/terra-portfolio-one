import { useState } from "react";
import "../styles/contact.css";

import Button from "../components/Button";

export default function ContactUs() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [subject, setSubject] = useState("");

  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");

  const [subjectError, setSubjectError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    setFirstnameError("");
    setLastnameError("");
    setSubjectError("");

    if (firstname.trim().length < 2) {
      setFirstnameError("First name must be at least 3 characters.");
      isValid = false;
    }

    if (lastname.trim().length < 2) {
      setLastnameError("Last name must be at least 3 characters.");
    }

    if (subject.trim().length < 2) {
      setSubjectError("Subject must be at least 3 characters.");
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully");
    }
  };

  return (
    <div className="container">
      <div className="con-container">
        <div className="con-section1">
          <p className="con-p1">Contact us:</p>
          <p className="con-p2">
            <span className="span1">Let us</span>

            <span className="span2">
              CONNECT
              <span className="span3">&</span>
              <br className="break" />
              <span className="span4"> COLLABORATE</span>
            </span>
          </p>

          <p className="con-p3">
            To give you the best possible help, it would be great to learn a
            little more about you. Tell us what you're hoping to achieve.
          </p>

          <div className="con-sectionimg">
            <img src="src/assets/contacticon1.png" />
            <p>Anthonydavies@gmail.com</p>
          </div>

          <div className="con-sectionimg">
            <img src="src/assets/contacticon1.png" />
            <p>+234 916 737 7598</p>
          </div>

          <div className="con-sectionimg">
            <img src="src/assets/contacticon2.png" />
            <p>www.balance.net/Dipo1509</p>
          </div>

          <div style={{ display: "flex", gap: "5px", marginTop: "10px" }}>
            <div>
              <img
                src="src/assets/contacticon3.png"
                style={{ width: "20px" }}
              />
            </div>
            <div>
              <p>
                195, Adeniyi jones str.
                <br className="break" /> Ikeja, Lagos State.{" "}
                <br className="break" /> 100900
              </p>
            </div>
          </div>
        </div>

        <div className="con-section2">
          <div className="con-form">
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="First name*"
            />

            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Last name*"
            />
          </div>
          {firstnameError && (
            <small style={{ color: "red" }}>{firstnameError}</small>
          )}
          {lastnameError && (
            <small style={{ color: "red" }}>{lastnameError}</small>
          )}

          <div className="con-form">
            <input placeholder="Email" />
            <input placeholder="Phone number" />
          </div>
          <div className="con-formSubj">
            <input
              className="con-formSubj1"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject*"
            />
            {subjectError && (
              <small style={{ color: "red" }}>{subjectError}</small>
            )}

            <textarea className="con-formSubj2" placeholder="Enter a message" />
          </div>

          <div className="con-formbutt ">
            <Button onClick={handleSubmit} label="Send message" />
          </div>
        </div>
      </div>
    </div>
  );
}
