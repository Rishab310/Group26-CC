import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const AmountAndDurationGraph = ({ data }) => {
  return (
    <div className='mb-5 m-auto'>
      <h2>Amount and Duration by Trade</h2>
      <BarChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="trade" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#82ca9d" />
        <Bar dataKey="duration" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default AmountAndDurationGraph;
