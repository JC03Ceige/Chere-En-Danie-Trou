import React from "react";

import Wreath from "../assets/engagementwreath.png";
import Banner from "../assets/bannerCD.png";
import { Container, Row, Col } from "reactstrap";

const Logo = () => {
  return (
    <div className="logo">
      <Container className="m-3">
        <Row>
          {" "}
          <img src={Banner} alt="Trou Paar Naam en Van" className="bannerCD" />
        </Row>
        <Row>
          <Col className="" sm="4" xs="6"></Col>
          <Col className="" sm="4" xs="6">
            <img src={Wreath} alt="Trou Paar Voorletters" className="wreath" />
          </Col>

          <Col className="" sm="4" xs="6"></Col>
        </Row>
        <Row>
          <Col className="" sm="3" xs="6"></Col>
          <Col className="" sm="6" xs="6">
            <hr className="logo" />
            <hr className="logo" />
            <h3 className="plainText">
              Ons nooi u graag hartelik uit
              <br /> om ons spesiale dag saam met ons
              <br /> en ons familie te deel
            </h3>
            <hr className="logo" />
            <hr className="logo" />
          </Col>
          <Col className="" sm="3" xs="6"></Col>{" "}
        </Row>
      </Container>
    </div>
  );
};

export default Logo;
