import React from "react";
import { Card, Button } from "react-bootstrap";
import CustomCard from "./CustomCard";
import BookNumberAndTradesGraph from "./BookNumberAndTradesGraph";
import AmountAndDurationGraph from "./AmountAndDurationGraph";
import { useState } from "react";
import Tables from "../tables/Tables";
import { Navbar } from "./Navbar";
import { SearchBar } from "./SearchBar";

export const ManagerDashboard = () => {
  const bookNumberAndTradesData = [
    { book: "Book 1", trades: 10 },
    { book: "Book 2", trades: 15 },
    { book: "Book 3", trades: 8 },
    // ... more data ...
  ];

  const amountAndDurationData = [
    { trade: "Trade 1", amount: 1000, duration: 5 },
    { trade: "Trade 2", amount: 1500, duration: 7 },
    { trade: "Trade 3", amount: 800, duration: 3 },
    // ... more data ...
  ];
  const cardData = [
    {
      title: "Card 1",
      imageUrl: "path_to_image_1.jpg",
      text: "Content for card 1.",
      buttonText: "Button 1",
    },
    {
      title: "Card 2",
      imageUrl: "path_to_image_2.jpg",
      text: "Content for card 2.",
      buttonText: "Button 2",
    },
    {
      title: "Card 3",
      imageUrl: "path_to_image_2.jpg",
      text: "Content for card 3.",
      buttonText: "Button 3",
    },
    {
      title: "Card 4",
      imageUrl: "path_to_image_2.jpg",
      text: "Content for card 4.",
      buttonText: "Button 4",
    },
    {
      title: "Card 5",
      imageUrl: "path_to_image_2.jpg",
      text: "Content for card 5.",
      buttonText: "Button 5",
    },
    {
      title: "Card 6",
      imageUrl: "path_to_image_2.jpg",
      text: "Content for card 6.",
      buttonText: "Button 6",
    },
    // ... Repeat for more cards
  ];

  const [view, setView] = useState(false);

  return (
    <div>
      <Navbar/>
      <SearchBar/>
      {!view && <div className="container">
        <div className="row">
          <div style={{ display: "flex" }}>
            <BookNumberAndTradesGraph data={bookNumberAndTradesData} />
            <AmountAndDurationGraph data={amountAndDurationData} />
          </div>
          {cardData.map((card, index) => (
            <div key={index} className="col-md-4 mb-4">
              <CustomCard
                title={card.title}
                imageUrl={card.imageUrl}
                text={card.text}
                buttonText={card.buttonText}
                view={view}
                setView={setView}
              />
            </div>
          ))}
        </div>
      </div>}

      {view && <Tables />}

      <div className="container"></div>
    </div>
  );
};
