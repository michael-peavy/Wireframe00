import React from 'react'
import './Paycheck.css'


class Paycheck extends React.Component  {
  render() {
    return (
      <>
      <div className='center1'>

      <table className = 'customers' style={{width:'100%'}}>

  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Hours </th>
    <th>Rate</th>

    <th>Pay </th>
  </tr>



  <tr>

    <td>Michael</td>
    <td>Peavy</td>
    <td>50</td>
    <td>$0.00</td>
    <td>$0.00</td>

  </tr>

  


</table>
</div> 


</>
    
    )
  }

}


export default Paycheck