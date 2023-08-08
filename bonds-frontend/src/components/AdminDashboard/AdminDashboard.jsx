import React from 'react'
import { Card, Button } from 'react-bootstrap';
import CustomCard from './CustomCard';
import BookNumberAndTradesGraph from './BookNumberAndTradesGraph';
import AmountAndDurationGraph from './AmountAndDurationGraph';

export const AdminDashboard = ({view, setView}) => {
  const bookNumberAndTradesData = [
    { book: 'Book 1', trades: 10 },
    { book: 'Book 2', trades: 15 },
    { book: 'Book 3', trades: 8 },
    // ... more data ...
  ];

  const amountAndDurationData = [
    { trade: 'Trade 1', amount: 1000, duration: 5 },
    { trade: 'Trade 2', amount: 1500, duration: 7 },
    { trade: 'Trade 3', amount: 800, duration: 3 },
    // ... more data ...
  ];
    const cardData = [
        {
            title: 'Card 1',
            imageUrl: 'path_to_image_1.jpg',
            text: 'Content for card 1.',
            buttonText: 'Button 1',
        },
        {
            title: 'Card 2',
            imageUrl: 'path_to_image_2.jpg',
            text: 'Content for card 2.',
            buttonText: 'Button 2',
        },
        {
            title: 'Card 3',
            imageUrl: 'path_to_image_2.jpg',
            text: 'Content for card 3.',
            buttonText: 'Button 3',
        },
        {
            title: 'Card 4',
            imageUrl: 'path_to_image_2.jpg',
            text: 'Content for card 4.',
            buttonText: 'Button 4',
        },
        {
            title: 'Card 5',
            imageUrl: 'path_to_image_2.jpg',
            text: 'Content for card 5.',
            buttonText: 'Button 5',
        },
        {
            title: 'Card 6',
            imageUrl: 'path_to_image_2.jpg',
            text: 'Content for card 6.',
            buttonText: 'Button 6',
        },
        // ... Repeat for more cards
    ];
    return (
        <div >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Bonds App</a>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <a className="nav-link" href="#">View All Bonds</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Flagged Trades</a>
        </li>
        {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">Something else here</a>
        </div>
        </li> */}
        </ul>
        </div>

        <button className="btn btn-outline-success my-2 my-sm-0 logOutButton" type="submit">Log Out</button>
        
        </nav>
        <div className="container">
        <div className="row">
        <div className="col-6 m-auto"></div>
        <input class="form-control mr-sm-2 w-50 text-center" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success my-2 my-sm-0 mr-1" type="submit">Search</button>
        </div>
        </div>
        <div className="container">
        <div className="row">
          <div style={{ display: 'flex' }}>
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
            </div>
            <div className="container">
      </div>
            </div>
            
            )
        }
