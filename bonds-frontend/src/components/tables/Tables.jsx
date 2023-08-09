import React from 'react'
import TableRow from './TableRow'

function Tables() {
  const trade={
    _id:"1",
    counterpartyId:"2",
    bookId:"3",
    status:"4",
    price:"5",
    buy_sell:"6",
    tradeDate:"7",
    settlementDate:"8",
    quantity:"9",
    securityId:"10",
    reason:"11",
    createdAt:"12",
    updatedAt:"13"
  }


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
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <TableRow trade={trade}/>
    {/* <TableRow/>
    <TableRow/> */}
  </tbody>
</table>
    </div>
    </div>
  )
}

export default Tables