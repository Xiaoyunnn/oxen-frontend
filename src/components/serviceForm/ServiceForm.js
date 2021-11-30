import { FormControl, TextField } from "@mui/material";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import enLocale from "date-fns/locale/en-GB";
import React, { useState } from "react";

const ServiceForm = () => {
  const [purchaseDate, setPurchaseDate] = useState(null);
  const [calibrationDate, setCalibrationDate] = useState(null);

  return (
    <div className="container">
      <div className="blue-divider" />
      <h2>Service Form</h2>
      <div className="form-wrapper">
        <form className="enquiry-form">
          <div className="form-margin">
            <FormControl style={{ width: "48.5%" }}>
              <TextField
                id="outlined-basic"
                label="Company"
                variant="outlined"
              />
            </FormControl>
            <FormControl style={{ width: "48.5%" }}>
              <TextField
                id="outlined-basic"
                label="Address"
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
                label="Equipment Brand"
                variant="outlined"
              />
            </FormControl>
          </div>

          <div className="form-margin">
            <FormControl style={{ width: "48.5%" }}>
              <TextField
                id="outlined-basic"
                label="Equipment Model"
                variant="outlined"
              />
            </FormControl>
            <FormControl style={{ width: "48.5%" }}>
              <TextField
                id="outlined-basic"
                label="Equipment S/N"
                variant="outlined"
              />
            </FormControl>
          </div>

          <div className="form-margin">
            <FormControl style={{ width: "48.5%" }}>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                locale={enLocale}
              >
                <DatePicker
                  label="Date of Purchase"
                  mask="__/__/____"
                  value={purchaseDate}
                  onChange={(newValue) => setPurchaseDate(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </FormControl>
            <FormControl style={{ width: "48.5%" }}>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                locale={enLocale}
              >
                <DatePicker
                  label="Last Calibration Date"
                  mask="__/__/____"
                  value={calibrationDate}
                  onChange={(newValue) => setCalibrationDate(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </FormControl>
          </div>

          <div className="flex-center form-margin">
            <FormControl style={{ width: "100%" }}>
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

export default ServiceForm;
