import React from 'react'

function TableRow(props) {
  
  
  return (
    
    <tr>
   
    <td scope="col" style={{textAlign:'center'}}>{props.trade._id}</td>
    <td scope="col" style={{textAlign:'center'}}>{props.trade.counterpartyId}</td>
    <td scope="col"style={{textAlign:'center'}}>{props.trade.securityId}</td>
    <td scope="col"style={{textAlign:'center'}}>{props.trade.quantity}</td>
    <td scope="col"style={{textAlign:'center'}}>{props.trade.status}</td>
    <td scope="col"style={{textAlign:'center'}}>{props.trade.price}</td>
    <td scope="col"style={{textAlign:'center'}}>{props.trade.buy_sell}</td>
    <td scope="col"style={{textAlign:'center'}}>{props.trade.tradeDate}</td>
    <td scope="col"style={{textAlign:'center'}}>{props.trade.settlementDate}</td>
    <td><button class="btn btn-primary">Settle</button></td>
      

  </tr>
  

  )
}

export default TableRow