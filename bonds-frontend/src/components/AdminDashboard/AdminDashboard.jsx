import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import CustomCard from "./CustomCard";
import BookNumberAndTradesGraph from "./BookNumberAndTradesGraph";
import AmountAndDurationGraph from "./AmountAndDurationGraph";
import { useState } from "react";
import Tables from "../tables/Tables";
import { Navbar } from "./Navbar";
import { SearchBar } from "./SearchBar";
import axios from 'axios';

export const AdminDashboard = () => {
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

  const [card, setCard] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/book").then((res) => {
      console.log(res.data);
      setCard(res.data);
    }).catch((err) => console.log(err));
  },[])
  

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
          {card.map((card, index) => (
            <div key={index} className="col-md-4 mb-4">
              <CustomCard
                title={card.bookname}
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
