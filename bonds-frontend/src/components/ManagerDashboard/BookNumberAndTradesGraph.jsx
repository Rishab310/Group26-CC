import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const BookNumberAndTradesGraph = ({ data }) => {
  return (
    <div>
      <h2>Number of Trades in Books</h2>
      <BarChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="book" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="trades" fill="#1e2f97" />
      </BarChart>
    </div>
  );
};

export default BookNumberAndTradesGraph;
