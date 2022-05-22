import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import Character from "../../model/Character";

interface CharacterModalProps {
  show: boolean;
  onSubmit: (char: Character) => void;
  onHide: () => void;
}

const defaultAttributes = {
  strength: "12",
  dexterity: "13",
  constitution: "14",
  intelligence: "15",
  education: "16",
  charisma: "17",
  height: "18",
  appearance: "19",
  mana: "12",
};

const defaultCharacter: Character = {
  name: "Sven Svenson",
  player: "Max Mustermann",
  job: "jobber",
  birth: "1.1.1990",
  age: "12",
  gender: "m",
  city: "berlin",
  birthcity: "nuremberg",
  attributes: defaultAttributes,
  lifepoints: "34",
  manapoints: "43",
  luck: "60",
  stabilitypoints: "99",
};

export default function CharacterModal(props: CharacterModalProps) {
  const [char, setChar] = useState<Character>(defaultCharacter);

  const submit = () => {
    props.onSubmit(char);
  };

  const changeAttributes = (key: string, value: string) => {
    let newAttributes: any = { ...char.attributes };
    newAttributes[key] = value;
    setChar({ ...char, attributes: newAttributes });
  };

  return (
    <>
      <Modal size="lg" show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <h1>Character Erstellen</h1>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col sm={6}>
                <Row className="mb-3">
                  <Form.Group as={Row}>
                    <Form.Label column sm={4}>
                      Name
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text" id="charName"></Form.Control>
                    </Col>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Row}>
                    <Form.Label column sm={4}>
                      Spieler
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text"></Form.Control>
                    </Col>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Row}>
                    <Form.Label column sm={4}>
                      Beruf
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text"></Form.Control>
                    </Col>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Row}>
                    <Form.Label column sm={4}>
                      Alter
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text"></Form.Control>
                    </Col>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Row}>
                    <Form.Label column sm={4}>
                      Gerburtstag
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text"></Form.Control>
                    </Col>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Row}>
                    <Form.Label column sm={4}>
                      Geschlecht
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text"></Form.Control>
                    </Col>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Row}>
                    <Form.Label column sm={4}>
                      Wohnort
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text"></Form.Control>
                    </Col>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Row}>
                    <Form.Label column sm={4}>
                      Geburtsort
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text"></Form.Control>
                    </Col>
                  </Form.Group>
                </Row>
              </Col>
              <Col sm={6}>
                <Row className="mb-3">
                  <Col sm={6}>
                    <Form.Group as={Row}>
                      <Form.Label column sm={7}>
                        Stärke
                      </Form.Label>
                      <Col sm={5}>
                        <Form.Control
                          type="text"
                          onChange={(e) => {
                            changeAttributes("strength", e.target.value);
                          }}
                        ></Form.Control>
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group as={Row}>
                      <Form.Label column sm={7}>
                        Geschicklichkeit
                      </Form.Label>
                      <Col sm={5}>
                        <Form.Control type="text"></Form.Control>
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col sm={6}>
                    <Form.Group as={Row}>
                      <Form.Label column sm={7}>
                        Konstitution
                      </Form.Label>
                      <Col sm={5}>
                        <Form.Control type="text"></Form.Control>
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group as={Row}>
                      <Form.Label column sm={7}>
                        Intelligenz
                      </Form.Label>
                      <Col sm={5}>
                        <Form.Control type="text"></Form.Control>
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col sm={6}>
                    <Form.Group as={Row}>
                      <Form.Label column sm={7}>
                        Bildung
                      </Form.Label>
                      <Col sm={5}>
                        <Form.Control type="text"></Form.Control>
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group as={Row}>
                      <Form.Label column sm={7}>
                        Charisma
                      </Form.Label>
                      <Col sm={5}>
                        <Form.Control type="text"></Form.Control>
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col sm={6}>
                    <Form.Group as={Row}>
                      <Form.Label column sm={7}>
                        Körpergröße
                      </Form.Label>
                      <Col sm={5}>
                        <Form.Control type="text"></Form.Control>
                      </Col>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group as={Row}>
                      <Form.Label column sm={7}>
                        Erscheinung
                      </Form.Label>
                      <Col sm={5}>
                        <Form.Control type="text"></Form.Control>
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col sm={6}>
                    <Form.Group as={Row}>
                      <Form.Label column sm={7}>
                        Mana
                      </Form.Label>
                      <Col sm={5}>
                        <Form.Control type="text"></Form.Control>
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col sm={3}>
                <Form.Group as={Row}>
                  <Form.Label column sm={7}>
                    Lebenspunkte
                  </Form.Label>
                  <Col sm={5}>
                    <Form.Control type="text"></Form.Control>
                  </Col>
                </Form.Group>
              </Col>
              <Col sm={3}>
                <Form.Group as={Row}>
                  <Form.Label column sm={7}>
                    Manapunkte
                  </Form.Label>
                  <Col sm={5}>
                    <Form.Control type="text"></Form.Control>
                  </Col>
                </Form.Group>
              </Col>
              <Col sm={3}>
                <Form.Group as={Row}>
                  <Form.Label column sm={7}>
                    Glück
                  </Form.Label>
                  <Col sm={5}>
                    <Form.Control type="text"></Form.Control>
                  </Col>
                </Form.Group>
              </Col>
              <Col sm={3}>
                <Form.Group as={Row}>
                  <Form.Label column sm={7}>
                    Stabilität
                  </Form.Label>
                  <Col sm={5}>
                    <Form.Control type="text"></Form.Control>
                  </Col>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Abbrechen
          </Button>
          <Button variant="primary" onClick={submit}>
            Speichern
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
