import React, { useEffect } from 'react'
import TableRow from './TableRow'
import axios from 'axios';

function Tables(props) {
  const trade={
    _id:"1",
    counterpartyId:"2",
    bookId:"3",
    status:"4",
    price:"5",
    buy_sell:"6",
    tradeDate:"7",
    settlementDate:null,
    quantity:"9",
    securityId:"10",
    reason:"11",
    createdAt:"12",
    updatedAt:"13"
  }

  useEffect(() => {
    console.log(props.bookId);
    axios.post("http://localhost:5000/trade/getTradeByBookID", {
      bookId: props.bookId
    }).then((res) => {
      console.log(res.data);
      
    }).catch((err) => console.log(err));
  },[props.bookId]);
  
  return (
    <div className='container'>

      <div className="row mb-3 mt-3">
        <h1>Trades Information</h1>
      </div>
        <div className="row mt-5" >
        <table className="table">
         <thead>
    <tr>
     
      <th scope="col" style={{textAlign:'center'}}>Id</th>
      <th scope="col" style={{textAlign:'center'}}>CounterPartyId</th>
      <th scope="col" style={{textAlign:'center'}}>SecurityId</th>
      <th scope="col" style={{textAlign:'center'}}>Quantity</th>
      <th scope="col" style={{textAlign:'center'}}>Status</th>
      <th scope="col" style={{textAlign:'center'}}>Price</th>
      <th scope="col" style={{textAlign:'center'}}>Buy_Sell</th>
      <th scope="col" style={{textAlign:'center'}}>TradeDate</th>
      <th scope="col" style={{textAlign:'center'}}>SettlementDate</th>
      <th scope="col" style={{textAlign:'center'}}>Actions</th>
      <th scope="col" style={{textAlign:'center'}}>Reason</th>
      </tr>
  </thead>
  <tbody>
    <TableRow trade={trade} role={props.role}/>
    {/* <TableRow/>
    <TableRow/> */}
  </tbody>
</table>
    </div>
    </div>
  )
}

export default Tables