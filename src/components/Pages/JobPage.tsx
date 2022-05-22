import { Button, Row, Stack, Container } from "react-bootstrap";

export default function JobPage() {
  return (
    <>
      <Container>
        <Row>
          <Stack direction="horizontal" gap={3}>
            <h1>Berufe</h1>
            <Button>Erstellen</Button>
          </Stack>
        </Row>
      </Container>
    </>
  );
}
