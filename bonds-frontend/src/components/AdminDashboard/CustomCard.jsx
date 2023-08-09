import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CustomCard = ({ title, imageUrl, text, buttonText, view, setView, bookId, setBook }) => {
  const onCardClickHandler = () => {
    setView(true);
    setBook(bookId);
  }
  return (
    <Card style={{ width: '18rem' }} >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        {/* <a href="#" class="stretched-link"></a> */}
        <Button variant="primary" className="stretched-link" onClick={onCardClickHandler}>{buttonText}</Button>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
