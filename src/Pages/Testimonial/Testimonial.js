import React from 'react';
import { Carousel, Container,Row } from 'react-bootstrap';

const Testimonial = () => {
    const testimonial= [
        {
          content:
            'Global tax are an amazing team of tax experts. We have always filed our tax lodgements with them and impressed with their attention to detail, professionalism, transparency and efficiency. They had recommended me implementation of a Tax depreciation schedule for our investment property and this that helped enhance our refunds Highly recommended!',
          author: 'Elizabeth - Investment property owner -Enfield',
      
        },
        {
          content:
            'Global Tax maximized refunds of my small business. They supported me through COVID. I would absolutely endorse them for any small business as every time I have a small question -they come back within the hour with my answers! I would highly recommend this team for a Gold class Tax lodgement service!',
          author: 'Matt - From Roselands',
     
        },
        {
          content:
            "As a Uber driver I meet up Global Tax every quarter with my BASes & my Tax returns I am very happy i choose Global to do Uber taxes. Great service, they listen and help. I am happy I switched my tax Agents to Global and maximised my refund.",
          author: 'Muhammad - Uber /Rideshare -Liverpool',

        },
        {
          content:
            'Global Online Tax is professional, fast and transparent. I had backlog company tax returns and they completed them very fast and accurately . At global uou are always supported by a Tax expert .I intend to always go back to them for a seamless experience.',
          author: 'Sammy - Small trades -Greenacre',
   
        },
      ];
    return (
        <div className="m-5">
            <h2 className="text-center mb-3">What our Client Said about US!</h2>
            <Container fluid>
                <Row>
                    <Carousel interval={1000}>
                        {testimonial.map((c, index) => {
                        return (
                            <Carousel.Item interval={5000}>
                            <div style={{ height: 200, background: "#1E6739", color: "white" }}>
                                <p className="text-center p-5">{c.content}</p>
                            </div>
                            <Carousel.Caption>
                                <p>{c.author}</p>
                            </Carousel.Caption>
                            </Carousel.Item>
                        );
                        })}
                    </Carousel>
                </Row>
            </Container>
        </div>
    );
};

export default Testimonial;