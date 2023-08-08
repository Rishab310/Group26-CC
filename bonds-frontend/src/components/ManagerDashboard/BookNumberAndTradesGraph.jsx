import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const BookNumberAndTradesGraph = ({ data }) => {
  return (
    <div>
      <h2>Number of Trades by Book</h2>
      <BarChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="book" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="trades" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default BookNumberAndTradesGraph;
