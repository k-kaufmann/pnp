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

  const chanceChar = (key: string, value: string) => {
    let newChar: any = { ...char };
    newChar[key] = value;
    setChar(newChar);
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
                {Object.keys(char)
                  .filter((it) => {
                    return it !== "attributes";
                  })
                  .map((it) => {
                    return (
                      <Row className="mb-3" key={it}>
                        <Form.Group as={Row}>
                          <Form.Label column sm={4}>
                            {it}
                          </Form.Label>
                          <Col sm={8}>
                            <Form.Control
                              type="text"
                              onChange={(e) => {
                                chanceChar(it, e.target.value);
                              }}
                            ></Form.Control>
                          </Col>
                        </Form.Group>
                      </Row>
                    );
                  })}
              </Col>
              <Col sm={6}>
                {Object.keys(char.attributes).map((key: string) => {
                  return (
                    <Row className="mb-3" key={key}>
                      <Col sm={6}>
                        <Form.Group as={Row}>
                          <Form.Label column sm={7}>
                            {key}
                          </Form.Label>
                          <Col sm={5}>
                            <Form.Control
                              type="text"
                              onChange={(e) => {
                                changeAttributes(key, e.target.value);
                              }}
                            ></Form.Control>
                          </Col>
                        </Form.Group>
                      </Col>
                    </Row>
                  );
                })}
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
