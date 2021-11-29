import { FormControl, TextField } from "@mui/material";
import React from "react";
import "./enquiry.css";

const Enquiry = ({ page }) => {
  return (
    <div className="flex-center flex-col">
      <div className="blue-divider" />
      {page === "contact" ? <h2>Contact Form</h2> : <h2>Further Enquiries</h2>}
      <div className="form-wrapper">
        <form className="enquiry-form">
          <div className="form-margin">
            <FormControl style={{ width: "48.5%" }}>
              <TextField id="outlined-basic" label="Name" variant="outlined" />
            </FormControl>
            <FormControl style={{ width: "48.5%" }}>
              <TextField
                id="outlined-basic"
                label="Contact Number"
                variant="outlined"
              />
            </FormControl>
          </div>
          <div className="form-margin">
            <FormControl style={{ width: "48.5%" }}>
              <TextField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
              />
            </FormControl>
            <FormControl style={{ width: "48.5%" }}>
              <TextField
                id="outlined-basic"
                label="Subject"
                variant="outlined"
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
