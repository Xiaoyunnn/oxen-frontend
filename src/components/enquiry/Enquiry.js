import { FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import "./enquiry.css";
import axios from "axios";

const Enquiry = ({ page }) => {
  const [enquiry, setEnquiry] = useState({
    name: "",
    contact: "",
    fromEmail: "",
    subject: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setEnquiry((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      console.log(enquiry);
      const res = await axios.post(
        "https://us-central1-test-42cd3.cloudfunctions.net/sendOstEmail-1",
        enquiry
      );

      console.log(res);
      setEnquiry({
        name: "",
        contact: "",
        fromEmail: "",
        subject: "",
        content: "",
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      <div className="blue-divider" />
      {page === "contact" ? <h2>Contact Form</h2> : <h2>Further Enquiries</h2>}
      <div className="form-wrapper">
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="form-margin">
            <FormControl style={{ width: "48.5%" }}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                name="name"
                value={enquiry.name}
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl style={{ width: "48.5%" }}>
              <TextField
                id="outlined-basic"
                label="Contact Number"
                name="contact"
                variant="outlined"
                value={enquiry.contact}
                onChange={handleChange}
                required
              />
            </FormControl>
          </div>
          <div className="form-margin">
            <FormControl style={{ width: "48.5%" }}>
              <TextField
                type="email"
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                name="fromEmail"
                value={enquiry.fromEmail}
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl style={{ width: "48.5%" }}>
              <TextField
                id="outlined-basic"
                label="Subject"
                variant="outlined"
                name="subject"
                value={enquiry.subject}
                onChange={handleChange}
                required
              />
            </FormControl>
          </div>
          <div className="flex-center form-margin">
            <FormControl style={{ width: "100%" }}>
              <TextField
                id="outlined-multiline-static"
                label="Type your message here"
                multiline
                rows={4}
                name="content"
                value={enquiry.content}
                onChange={handleChange}
                required
              />
            </FormControl>
          </div>
          <div className="flex-end">
            <button className="submit-enquiry-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Enquiry;
