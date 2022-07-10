import { React, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";

import WeatherWidget from "./WeatherWidget";

import Card1 from "../assets/card1.jpg";
import Card2 from "../assets/card2.jpg";
import Card3 from "../assets/card3.jpg";
import Card4 from "../assets/card4.jpg";
import Card5 from "../assets/card5.jpg";
import Card6 from "../assets/card6.jpg";
import Kaart from "../assets/kaart.png";
import KaartCD from "../assets/kaartCD.jpg";

const InfoCard = () => {
  let today = new Date(); // Declaring variable for today's date.
  const trouDatum = new Date(today.getFullYear(), 8, 24); // Setting the date for Xmas
  if (today.getMonth() == 8 && today.getDate() > 24) {
    // If statement checks to see if Xas will still happen in the current year. If not, it adds a year to the xmas variable.
    trouDatum.setFullYear(trouDatum.getFullYear() + 1);
  }
  const convDay = 1000 * 60 * 60 * 24; // Variable that divides milliseconds to convert it to days.
  let daysLeft = Math.ceil((trouDatum.getTime() - today.getTime()) / convDay);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container fluid className="vh-100 info">
        <Row className="waarSer">
          <Col className="" sm="6" xs="6">
            <div className="cardDetails">
              <h1 className="genericHeadings display-3">Die Seremonie</h1>
              <br />
              <a href="">
                <p className="plainText">
                  {" "}
                  vind plaas in die Gamka-Oos kerk
                  <br />
                  te Beaufort Wes. Dit begin
                  <br />
                  <br />
                  <b>stiptelik om 15:00</b>.
                </p>
              </a>
            </div>
          </Col>
          <Col className="no-gutters" sm="6" xs="6">
            <Card inverse>
              <Card.Img className="cardImg" alt="Card image cap" src={Card1} />
            </Card>
          </Col>
        </Row>
        <hr />
        <Row className="waarOnt">
          <Col className="" sm="6" xs="6">
            <Card inverse>
              <Image className="cardImg" alt="Card image cap" src={Card6} />
            </Card>
          </Col>

          <Col className="" sm="5" xs="6">
            <div className="cardDetails">
              <h1 className="genericHeadings display-3">Die Onthaal</h1>
              <br />
              <a href="">
                <p className="plainText">
                  {" "}
                  vind plaas op Boeteka plaas
                  <br />
                  buite Beaufort Wes
                  <br />
                  <br />
                  <b>om 17:00</b>.
                </p>
              </a>
            </div>
          </Col>
        </Row>
        <hr />
        <Row className="datum">
          <Col className="" sm="6" xs="6">
            <div className="cardDetails">
              <h1 className="genericHeadings display-3">Wanneer:</h1>
              <h3 className="plainText">24 September 2022</h3>
              <br />
              <br />
              <br />
              <InputGroup size="lg" style={{ width: "55%", margin: "auto" }}>
                <Form.Control
                  className="countdown"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={". . . " + daysLeft + " dae tot ons groot dag."}
                />
              </InputGroup>
            </div>
          </Col>
          <Col className="no-gutters" sm="6" xs="6">
            <Card inverse>
              <Card.Img className="cardImg" alt="Card image cap" src={Card5} />
            </Card>
          </Col>
        </Row>
        <hr />
        <Row className="ontmoeting">
          <h1 className="ontmoetingHead">Die Ontmoeting</h1>{" "}
          <p className="plainText">
            Dit het alles begin met ’n Facebook boodskap wat sê “As jy sou
            wou….”
          </p>
          <p className="plainText">
            Op 10 Maart 2018 (Danie se verjaarsdag) het hulle mekaar op Facebook
            raak ge-scroll en dadelik begin kennis maak en gesels. Vinnig het
            hulle besef daar is ’n sterk konneksie en het dit Cheré se wilskrag
            geverg om haar nommer vir Danie te stuur wat volg met die boodskap
            “As jy sou wou…”
          </p>
          <p className="plainText">
            Duidelik wou Danie en vat hy die pad ’n paar weke later om kamstig
            KKNK toe te gaan. Ons almal weet dit was nie die hoof rede nie. Soos
            hulle sê: Die res is geskiedenis!
          </p>
          <p className="plainText">
            Die ooreenkoms was dat wanneer dit die dag 60mm reën dan sal Danie
            vir Cheré vra om te trou. 2021 was ’n besonderse reënval jaar in die
            Karoo en was daar menigte geleenthede om die groot vraag te vra.
          </p>
          <p className="plainText">
            Uiteindelik op 13 November 2021 breek die groot dag aan. Dit was nou
            nie direk na die 60mm reen nie, maar wel toe jy die 60mm reën se
            effek op die veld kon sien. Cheré word mislei met die idee dat hulle
            die Saterdag oggend moet dorp toe vir boerdery doeleindes, maar
            hulle het toe nooit in die dorp uitgekom nie. Hulle eindig wel op
            iewers op die plaas waar jy weid en ver kon sien hoe God die Karoo
            geseën het. Danie sak toe af op een knie en Cheré beantwoord sy
            langverwagte vraag met baie trane en min woorde.
          </p>
        </Row>
        <hr />
        <br />
        <br />
        <Row className="kaart">
          <Col className="" sm="6" xs="6">
            <Card inverse>
              <Image
                fluid
                className="cardImg"
                alt="Card image cap"
                src={KaartCD}
              />
            </Card>
          </Col>

          <Col className="m-auto align-self-center" sm="6" xs="6">
            <Card inverse className="text-center kaart">
              <Image fluid thumbnail alt="Card image cap" src={Kaart} />
              <Card.ImgOverlay>
                <Card.Title className="kaartTitle" tag="h3">
                  Kliek hier.
                </Card.Title>
                <Card.Text className="kaartText">
                  Die liggin vir beide seremonie en onthaal lokale word hier
                  aangedui.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <hr />
        <Row className="rsvp">
          <Col className="m-auto align-self-center" sm="6" xs="6">
            <Button
              variant="light"
              size="lg"
              className="rsvpBtn p-5"
              onClick={handleShow}
            >
              RSVP
            </Button>

            <Modal show={show} onHide={handleClose} className="modalForm">
              <Modal.Header closeButton>
                <Modal.Title>
                  <b>Voltooi asb die onderstaande vorm:</b>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>
                        <b>Naam:</b>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Vul asb u Naam in"
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>
                        <b>Van:</b>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Vul asb u Van in"
                      />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label as="legend" column sm={2} className="m-2">
                      <b>Metgesel: </b>
                    </Form.Label>
                    <Form.Check
                      inline
                      type="radio"
                      label="Ja"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="Nee"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="Sal bevestig"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Label>
                      <b>Spyseniering:</b>
                    </Form.Label>
                    <Form.Check type="checkbox" label="Diabeet" />
                    <Form.Check
                      type="checkbox"
                      label="Laktose Onverdraagsaam"
                    />
                    <Form.Check type="checkbox" label="Vegetarier" />
                    <Form.Check type="checkbox" label="Ander" />
                    <Form.Control placeholder="Spesifiseer asb hier." />
                  </Form.Group>

                  <Button variant="light" type="submit">
                    Dien-In
                  </Button>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <b>
                  <em>
                    {" "}
                    * NB! Deur die vorm te voltooi, bevestig u dat u ons
                    spesiale dag met ons gaan deel.
                  </em>
                </b>
              </Modal.Footer>
            </Modal>
          </Col>
          <Col className="" sm="6" xs="6">
            <WeatherWidget />
          </Col>
        </Row>
        <hr />
        <Row className="ontmoeting">
          <br />
          <hr className="logo" />
          <br />
          <h1 className="additioneelHead">Drag:</h1>
          <p> Semi formeel (natuurlike Kleure)</p>
          <br />
          <hr className="logo" />
          <br />
          <h1 className="additioneelHead">Ander belangrike dinge:</h1>{" "}
          <p className="plainText">
            Om al ons gaste toe te laat om te ontspan en hulself te geniet, het
            ons besluit om die ouers die aand af te gee en ons spesiale dag
            slegs vir volwassens te maak. Ons waardeer almal se begrip hiermee.
            Sou daar enige vrae wees, kontak asb die paartjie direk.
          </p>
          <p className="plainText">
            So graag soos wat ons die groot dag met almal wil spandeer is dit
            nie altyd moontlik nie. Ons sal jou dus persoonlik kontak met
            betrekking tot ’n metgesel.
          </p>
          <br />
          <hr className="logo" />
          <br />
          <h1 className="additioneelHead">Kontant kroeg:</h1>
          <p className="plainText">
            Wyn sal voorsien word saam met die spyse, so los maar die
            koelerbokse by die huise. ’n Kontant kroeg sal beskikbaar wees met
            kaart fasiliteite
          </p>{" "}
          <br />
          <hr className="logo" />
          <br />
          <h1 className="additioneelHead">Geskenke Lys:</h1>
          <p className="plainText">
            Elke gas se teenwoordigheid, liefde en geselligheid is al waarvoor
            ons kan wens. Maar sou jy wou bydrae tot ons toekoms as man en vrou
            saam, sal ’n geldjie in die sak beter wees as ’n geskenkie op die
            rak
          </p>
          <br />
          <hr className="logo" />
          <br />
        </Row>
      </Container>
    </div>
  );
};

export default InfoCard;
