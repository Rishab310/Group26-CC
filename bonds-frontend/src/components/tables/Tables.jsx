import React, { useEffect } from 'react'
import TableRow from './TableRow'
import axios from 'axios';

function Tables({ bookId }) {
  useEffect(() => {
    console.log(bookId);
    axios.post("http://localhost:5000/trade/getTradeByBookID", {
      bookId
    }).then((res) => {
      console.log(res.data);
      
    }).catch((err) => console.log(err));
  },[bookId])
  return (
    <div className='container'>

      <div className="row mb-3 mt-3">
        <h1>Trades Information</h1>
      </div>
        <div className="row mt-5" >
        <table className="table">
         <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Id</th>
      <th scope="col">CounterPartyId</th>
      <th scope="col">SecurityId</th>
      <th scope="col">Quantity</th>
      <th scope="col">Status</th>
      <th scope="col">Price</th>
      <th scope="col">Buy_Sell</th>
      <th scope="col">TradeDate</th>
      <th scope="col">SettlementDate</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <TableRow/>
    <TableRow/>
    <TableRow/>
  </tbody>
</table>
    </div>
    </div>
  )
}

export default Tables