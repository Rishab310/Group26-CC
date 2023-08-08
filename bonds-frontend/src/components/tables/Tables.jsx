import React from 'react'

function Tables() {
  return (
    <div className='container'>
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
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">1</td>
      <td scope="col">Id</td>
      <td scope="col">CounterPartyId</td>
      <td scope="col">SecurityId</td>
      <td scope="col">Quantity</td>
      <td scope="col">Status</td>
      <td scope="col">Price</td>
      <td scope="col">Buy_Sell</td>
      <td scope="col">TradeDate</td>
      <td scope="col">SettlementDate</td>
    </tr>
    <tr>
    <td scope="row">2</td>
      <td scope="col">Id</td>
      <td scope="col">CounterPartyId</td>
      <td scope="col">SecurityId</td>
      <td scope="col">Quantity</td>
      <td scope="col">Status</td>
      <td scope="col">Price</td>
      <td scope="col">Buy_Sell</td>
      <td scope="col">TradeDate</td>
      <td scope="col">SettlementDate</td>
    </tr>
    
  </tbody>
</table>
    </div>
    </div>
  )
}

export default Tables