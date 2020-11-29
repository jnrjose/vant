import React, {useState} from "react";
import Router from "next/router";
import Call from "../../vectors/call-phone.svg";
import Mail from "../../vectors/mail.svg";
import Pin from "../../vectors/pin.svg";
import TextField from "../FormInputs/TextField";
import TextArea from "../FormInputs/TextArea";
import SelectField from "../FormInputs/Select";
import Button from "../Button";

const initialState = {
  fullName: "",
  email: "",
  phoneNumber: "",
  organization: "",
  message: "",
  enquiryType: "",
};

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ContactForm = () => {
  const [fieldValue, setFieldValue] = useState(initialState);

  const handleChange = (type) => ({target}) => {
    setFieldValue({
      ...fieldValue,
      [type]: target.value,
    });
  };

  const checkValidity = () => {
    const {phoneNumber, ...rest} = fieldValue;

    const valid = Object.values(rest).every(
      (value) => value && value.trim() !== ""
    );

    return valid;
  };

  // const handleSubmit = (e) => {
  //   console.log("===>submitting", fieldValue);
  //   e.preventDefault();
  //   const form = e.target;
  //   fetch("/", {
  //     method: "POST",
  //     headers: {"Content-Type": "application/x-www-form-urlencoded"},
  //     body: encode({
  //       "form-name": "contact",
  //       ...fieldValue,
  //     }),
  //   })
  //     .then(() => Router.push(form.getAttribute("action")))
  //     .catch((error) => alert(error));
  // };
  const {
    fullName,
    email,
    phoneNumber,
    message,
    organization,
    enquiryType,
    submitting,
  } = fieldValue;
  return (
    <div className="contactform-container">
      <p className="contactform-header">Contact Us</p>
      <p className="contactform-text">
        Thank you for your interest. Please feel free to inquire about our work
        from any of our channels
      </p>
      <div className="contactform-details">
        <Mail
          style={{
            width: "100%",
            height: "100%",
            gridColumn: "1",
            gridRow: "1",
            justifySelf: "stretch",
          }}
        />
        <p
          className="contactform-details-text"
          style={{gridRow: "1", alignSelf: "center"}}>
          info@vantegral.com
        </p>
        <Call
          style={{width: "100%", height: "100%", gridColumn: "1", gridRow: "2"}}
        />
        <p
          className="contactform-details-text"
          style={{gridRow: "2", alignSelf: "center"}}>
          + 234 (0) 708 475 9549
        </p>
        <Pin
          style={{
            width: "50%",
            height: "50%",
            gridColumn: "1",
            gridRow: "3",
            justifySelf: "center",
          }}
        />
        <p className="contactform-details-text" style={{gridRow: "3"}}>
          2 Engr Taiwo Odefunso Street, Lekki Phase 1 Estate, Lagos. Nigeria.
        </p>
      </div>
      <form
        className="contactform-field"
        action="/success"
        method="POST"
        data-netlify="true"
        name="contactus"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="contact" value="contactus" />
        <div className="contactform-group">
          <label className="contactform-label" htmlFor="fullName">Name</label>
          <TextField
            name="fullName"
            type="text"
            placeholder="Enter Fullname"
            value={fullName}
            required={true}
            handleChange={handleChange("fullName")}
            id="fullName"
          />
        </div>
        <div className="contactform-group">
          <label className="contactform-label" htmlFor="email">Email Address</label>
          <TextField
          name="email"
            type="email"
            placeholder="Enter Email"
            value={email}
            required={true}
            handleChange={handleChange("email")}
            id="email"
          />
        </div>
        <div className="contactform-group">
          <label className="contactform-label" htmlFor="number">
            Phone Number <span className="optional">(optional)</span>
          </label>
          <TextField
            type="number"
            name="phoneNumber"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            required={false}
            handleChange={handleChange("phoneNumber")}
            id="number"
          />
        </div>
        <div className="contactform-group" htmlFor="organization">
          <label className="contactform-label">Organisation</label>
          <TextField
          name="organization"
            type="text"
            placeholder="Enter Organisation Name"
            value={organization}
            required={true}
            handleChange={handleChange("organization")}
            id="organization"
          />
        </div>
        <div className="contactform-group">
          <label className="contactform-label" htmlFor="enquiryType">Enquiry Type</label>
          <SelectField
          name="enquiryType"
            value={enquiryType}
            options={[
              "Strategy",
              "General enquiry",
              "Digital & Technology",
              "People",
            ]}
            required={true}
            handleChange={handleChange("enquiryType")}
            id="enquiryType"
          />
        </div>
        <div className="contactform-group" htmlFor="message">
          <label className="contactform-label">Message</label>
          <TextArea
          name="message"
            placeholder="Enter message"
            value={message}
            required={true}
            handleChange={handleChange("message")}
            className="borderless"
            row={"12"}
            id="message"
          />
        </div>
        <Button
          disabled={!checkValidity() || submitting}
          message={"Submit"}
          bgcolor={"var(--primary-color)"}
          color={"#2E2E38"}
          width={"18.2rem"}
          height={"4rem"}
          fontSize={"1.2rem"}
          borderradius={"3px"}
          border={"1px solid #FFFA46"}
          type="submit"
        />
      </form>
      <style jsx>{`
        .contactform-container {
          display: grid;
          grid-template-columns: 1fr;
          margin: 6.4rem 2.5rem 8.1rem;
          background-color: var(--main-bg-color);
        }
        .contactform-header {
          font-size: 2.4rem;
          color: var(--primary-color);
          padding-bottom: 2.3rem;
          grid-column: 1;
        }
        .contactform-text {
          color: var(--contactform-font-color);
          font-size: 1.8rem;
          grid-column: 1;
          margin-bottom: 7.2rem;
          line-height: 130%;
        }
        .contactform-details {
          display: grid;
          grid-template-columns: 20% 80%;
          grid-template-rows: 20% 20% 1fr;
          grid-row-gap: 4.5rem;
          grid-column-gap: 3rem;
          height: 100%;
        }
        .contactform-details-text {
          font-size: 1.8rem;
          color: var(--contactform-font-color);
          grid-column: 2;
        }
        .contactform-field {
          margin-top: 10.2rem;
          width: 100%;
        }
        .contactform-group {
          margin-bottom: 2.8rem;
        }
        .contactform-label {
          color: var(--contactform-font-color);
          font-size: 1.6rem;
        }
        .optional {
          color: rgba(195, 195, 195, 0.5);
          font-style: italic;
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 1024px) {
          .contactform-container {
            grid-template-columns: 2fr 1fr;
            grid-template-rows: 13rem 1fr;
            grid-column-gap: 14.8rem;
            margin: 11.2rem 22.3rem 9.6rem 10rem;
          }
          .contactform-header,
          .contactform-text {
            grid-column: 1;
            grid-row: 1;
          }
          .contactform-text {
            margin-top: 5rem;
          }
          .contactform-details {
            grid-column: 2;
            grid-row: 2;

            grid-template-rows: 4rem 4rem 8rem;
            margin-top: 6rem;
          }
          .contactform-field {
            grid-column: 1;
            grid-row: 2;
            margin-top: 6rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
