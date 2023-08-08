import React from 'react'

function TableRow() {
  return (
    
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
    <td><button class="btn btn-primary">Settle</button></td>
      

  </tr>
  

  )
}

export default TableRow