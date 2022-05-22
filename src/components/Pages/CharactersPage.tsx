import { Col, Container, Row, Stack, Button, Table } from "react-bootstrap";
import firebaseDb from "../../firebaseDb";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import CharacterModal from "../UI/CharacterModal";
import Character from "../../model/Character";

export default function CharactersPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const loadCharacters = async () => {
    const querySnapshot = await getDocs(
      query(collection(firebaseDb, "characters"))
    );

    let characters: any[] = [];
    querySnapshot.forEach((doc) => {
      characters = [...characters, doc.data()];

      console.log(doc.data());
    });

    setCharacters(characters);
  };
  useEffect(() => {
    loadCharacters();
  }, []);

  const onCreate = () => {
    setShowModal(!showModal);
  };

  const createCharacter = async (char: Character) => {
    await addDoc(collection(firebaseDb, "characters"), char);
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Stack direction="horizontal" gap={3}>
              <h1>Charaktere</h1>
              <Button onClick={onCreate}>Eerstellen</Button>
            </Stack>
            {showModal && (
              <CharacterModal
                show={showModal}
                onHide={() => {
                  setShowModal(false);
                }}
                onSubmit={createCharacter}
              ></CharacterModal>
            )}
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Alter</th>
                  <th>Job</th>
                </tr>
              </thead>
              <tbody>
                {characters.map((char, index) => {
                  return (
                    <tr key={index}>
                      <td>{char.name}</td>
                      <td>{char.age}</td>
                      <td>{char.job}</td>
                      <td>
                        <Button variant="danger">Loeschen</Button>
                      </td>
                      <td>
                        <Button variant="secondary">Bearbeiten</Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
