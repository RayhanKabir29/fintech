import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";

const Testimonial = () => {
  const testimonial = [
    {
      id: "1",
      content:
        "Global tax are an amazing team of tax experts. We have always filed our tax lodgements with them and impressed with their attention to detail, professionalism, transparency and efficiency. They had recommended me implementation of a Tax depreciation schedule for our investment property and this that helped enhance our refunds Highly recommended!",
      author: "Elizabeth - Investment property owner -Enfield",
    },
    {
      id: "2",
      content:
        "Global Tax maximized refunds of my small business. They supported me through COVID. I would absolutely endorse them for any small business as every time I have a small question -they come back within the hour with my answers! I would highly recommend this team for a Gold class Tax lodgement service!",
      author: "Matt - From Roselands",
    },
    {
      id: "3",
      content:
        "As a Uber driver I meet up Global Tax every quarter with my BASes & my Tax returns I am very happy i choose Global to do Uber taxes. Great service, they listen and help. I am happy I switched my tax Agents to Global and maximised my refund.",
      author: "Muhammad - Uber /Rideshare -Liverpool",
    },
    {
      id: "4",
      content:
        "Global Online Tax is professional, fast and transparent. I had backlog company tax returns and they completed them very fast and accurately . At global uou are always supported by a Tax expert .I intend to always go back to them for a seamless experience.",
      author: "Sammy - Small trades -Greenacre",
    },
  ];
  return (
    <div className="p-5 mt-3" style={{ background: "#113248" }}>
      <h2 className="text-center mb-3" style={{ color: "#FFCB12" }}>
        What our Client Said about US!
      </h2>
      <div className="testimonial">
        <Container>
          <Row>
            <Carousel interval={1000}>
              
              {testimonial.map((item, index) => {
                 
                return (
                  <Carousel.Item interval={5000}>
                   
                    <div
                      style={{
                        height: 200,
                        background: "#113248",
                        color: "white",
                      }}
                    >
                      <p className="text-center p-5">{item.content}</p>
                    </div>
                    <Carousel.Caption>
                      <p>{item.author}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Testimonial;
