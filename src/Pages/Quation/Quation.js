import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Quation.css';

const Quation = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div className="quation-section mt-5">
                <Container>
                    <Row>
                        <div className="quato-heading">
                            <h1>Free Consultation</h1>
                            <h6>REQUEST FORM</h6>
                        </div>
                    </Row>
                    <Row>
                       <div className="quato-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true})} placeholder="Your Name"/>
                            <input {...register("email", { required: true})} placeholder="Your Email"/>
                            <input type="text" {...register("phone", { required: true})} placeholder="Phone No"/>
                            <textarea className="my-5" type="text" {...register("message")} placeholder="Your Message"/>
                            <input  className="submit-btn" type="submit" />
                            </form>
                       </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Quation;