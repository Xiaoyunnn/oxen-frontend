import { FormControl, TextField } from "@mui/material";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import enLocale from "date-fns/locale/en-GB";
import React, { useState } from "react";
import axios from "axios";

const ServiceForm = () => {
  // const [purchaseDate, setPurchaseDate] = useState(null);
  // const [calibrationDate, setCalibrationDate] = useState(null);
  const [serviceEnquiry, setServiceEnquiry] = useState({
    company: "",
    address: "",
    fromEmail: "",
    equipmentBrand: "",
    equipmentModel: "",
    equipmentSN: "",
    purchaseDate: null,
    calibrationDate: null,
    subject: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setServiceEnquiry((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      console.log(serviceEnquiry);
      const res = await axios.post(
        "https://us-central1-test-42cd3.cloudfunctions.net/sendOstEmail-1",
        serviceEnquiry
      );

      console.log(res);
      setServiceEnquiry({
        company: "",
        address: "",
        fromEmail: "",
        equipmentBrand: "",
        equipmentModel: "",
        equipmentSN: "",
        purchaseDate: null,
        calibrationDate: null,
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
      <h2>Service Form</h2>
      <div className="form-wrapper">
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="form-margin">
            <FormControl style={{ width: "48.5%" }}>
              <TextField
                id="outlined-basic"
                label="Company"
                variant="outlined"
                name="company"
                value={serviceEnquiry.company}
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl style={{ width: "48.5%" }}>
              <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
                name="address"
                value={serviceEnquiry.address}
                onChange={handleChange}
                required
              />
            </FormControl>
          </div>

          <div className="form-margin">
            <FormControl style={{ width: "48.5%" }}>
              <TextField
                id="outlined-basic"
                label="Email Address"
                type="email"
                variant="outlined"
                name="fromEmail"
                value={serviceEnquiry.fromEmail}
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl style={{ width: "48.5%" }}>
              <TextField
                id="outlined-basic"
                label="Equipment Brand"
                variant="outlined"
                name="equipmentBrand"
                value={serviceEnquiry.equipmentBrand}
                onChange={handleChange}
                required
              />
            </FormControl>
          </div>

          <div className="form-margin">
            <FormControl style={{ width: "48.5%" }}>
              <TextField
                id="outlined-basic"
                label="Equipment Model"
                variant="outlined"
                name="equipmentModel"
                value={serviceEnquiry.equipmentModel}
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl style={{ width: "48.5%" }}>
              <TextField
                id="outlined-basic"
                label="Equipment S/N"
                variant="outlined"
                name="equipmentSN"
                value={serviceEnquiry.equipmentSN}
                onChange={handleChange}
                required
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
                  name="purchaseDate"
                  value={serviceEnquiry.purchaseDate}
                  onChange={(newValue) =>
                    setServiceEnquiry((prev) => {
                      return {
                        ...prev,
                        purchaseDate: newValue,
                      };
                    })
                  }
                  renderInput={(params) => <TextField required {...params} />}
                  required
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
                  value={serviceEnquiry.calibrationDate}
                  onChange={(newValue) =>
                    setServiceEnquiry((prev) => {
                      return {
                        ...prev,
                        calibrationDate: newValue,
                      };
                    })
                  }
                  renderInput={(params) => <TextField required {...params} />}
                  required
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
                name="subject"
                value={serviceEnquiry.subject}
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
                value={serviceEnquiry.content}
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

export default ServiceForm;
