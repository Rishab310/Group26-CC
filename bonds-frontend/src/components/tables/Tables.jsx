import React from 'react'
import TableRow from './TableRow'

function Tables() {
  return (
    <div className='container'>

      <div className="row mb-3 mt-3">
        <h1>Trades Information</h1>
      </div>
        <div className="row mt-5" >
        <table className="table">
         <thead>
    <tr>
      <th scope="col">1</th>
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