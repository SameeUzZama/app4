import { Card, Button, Row, Col } from "react-bootstrap";

const ProductItem = ({ title, cat, url, price, desc }) => {
  return (
      <Row className="item">
      <col >
          <img src="{url}" alt="" />
      </col>
          <col>
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
          </col>
      </Row>
  );
};
