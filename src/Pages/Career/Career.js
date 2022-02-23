import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Career.css";
import { Container, Form, FormSelect } from "react-bootstrap";

const Career = () => {
  const [startDate, setStartDate] = useState(new Date());
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ink1qqw",
        "template_yhahoe8",
        e.target,
        "user_PXdQjoD9mEqMGTaqm6Ris"
      )
      .then(
        (result) => {
          console.log("success");
        },
        (error) => {
          console.log("failed");
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <Container>
        <form
          //   encType="multipart/form-data"
          //   method="post"
          ref={form}
          onSubmit={sendEmail}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <FormSelect name="title" id="" required>
              <option value="mr">Mr</option>
              <option value="miss">Miss</option>
              <option value="mrs">Mrs</option>
              <option value="other">Others</option>
            </FormSelect>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="John"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name="lastName" placeholder="Doe" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date Of Birth</Form.Label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="abc@gmail.com"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="number"
              name="phone"
              placeholder="0123456789"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your phone number with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Cover Letter</Form.Label>
            <Form.Control type="file" placeholder="Upload Cover Letter" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Resume</Form.Label>
            <Form.Control
              type="file"
              placeholder="Upload Your Resume"
              //   name="resume"
              required
            />
          </Form.Group>
          <input type="submit" value="Send" />
        </form>
      </Container>
    </div>
  );
};

export default Career;
