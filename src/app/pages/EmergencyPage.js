import React from "react";
import {  Table } from "react-bootstrap";
import {useSubheader} from "../../_metronic/layout";




export const EmergencyPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Emergency Page");
 const numbers = [
  {no: 1, Department: "Emergency helpline", Number: "15"},
  {no: 2, Department: "Police", Number: "9100008"},
  {no: 3, Department: "Fire brigade", Number: "9100008"},
  {no: 4, Department: "National Counter Terrorism Authority (NACTA) Helpline", Number: "1717"},
  {no: 5, Department: "Bomb Disposal Squad", Number: "1332"},
  {no: 6, Department: "Islamabad Traffic Police", Number: "915"},
  {no: 7, Department: "Terror related Helpline", Number: "1717"}
   


 ]
 
  return (<div >
    <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
            Emergency Contacts
          </span>
         
        </h3>
        
        
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Sr. No</th>
      <th>Department</th>
      <th>Phone Number</th>
      
    </tr>
  </thead>
  <tbody>
    {numbers && numbers.map(Number =>{
      return (
        <tr key={Number.no}>
      <td>{Number.no}</td>
      <td>{Number.Department}</td>
      <td>{Number.Number}</td>
      
    </tr>
      )
    })}
    
    
  </tbody>
</Table>


  </div>);
};
