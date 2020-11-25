import React from "react";
import {Modal , Button} from "react-bootstrap";
import { connect } from "react-redux";
import  {createDuty}  from "../../../redux/actions/DutiesActions"
import * as Yup from 'yup'
import {Form, Formik, Field, ErrorMessage} from 'formik'
import {MenuItem, TextField} from "@material-ui/core"
import { object } from "yup";

 export function AssignDutiesModal(propss){
  const {Vardens} = propss

        return(
          <Formik
          initialValues={{Varden: '', StartTime: '', EndTime: '',Area: ''}}
          onSubmit={(values, formikHelpers)=>{
            values.FullName = 
            console.log(values)
            propss.createDuty(values);
            propss.onHide()
          }}
          validationSchema={
            object({
              Varden: Yup.string()
              
              .required("Varden is Required"),
              
              StartTime: Yup.date()
              
              .required("Start Time is Required"),
              EndTime: Yup.date()
              
              .required("End Time is Required"),
              Area: Yup.string()
              
              .required("Area is Required")
            })
          }
          > 
          {({values, errors, touched})=>(
 <Modal show={propss.show} onHide={propss.onHide}>
            
 <Modal.Header closeButton>
<Modal.Title id="contained-modal-title-vcenter">
Add Warden
</Modal.Title>
</Modal.Header>
<Modal.Body>

<Form >
<div >


<select name="Varden" className="browser-default custom-select" Label="Varden">
<option  value={0}>Select a Varden</option>
{Vardens && Vardens.map((Varden)=>{
  return(
<option key={Varden.id} value={Varden.id}>{Varden.Name}</option>
  )
})}
          
        </select><br/>
<Field name="LastName" as={TextField} label="Last Name"/><br/>
<ErrorMessage name="LastName"/><br/>
<Field name="StartTime" type="datetime-local" as={TextField} label="Start Time"/><br/>
<ErrorMessage name="StartTime"/><br/>
<Field name="EndTime" type="datetime-local" as={TextField} label="End Time"/><br/>
<ErrorMessage name="EndTime"/><br/>
<select name="Area" className="browser-default custom-select" label="Area">
<option value={'F 11'}>F 11</option>
<option value={'F 10'}>F 10</option>
<option value={'F 9'}>F 9</option>
<option value={'F 8'}>F 8</option>
<option value={'F 7'}>F 7</option>
<option value={'F 6'}>F 6</option>
<option value={'G 10'}>G 11</option>
<option value={'G 10'}>G 10</option>
<option value={'G 10'}>G 9</option>
<option value={'G 10'}>G 8</option>
<option value={'G 10'}>G 7</option>
<option value={'G 10'}>G 6</option>
<option value={'E 11'}>E 11</option>
</select><br/>
<ErrorMessage name="Area"/><br/>
<Button onClick={propss.onHide}>Close</Button>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Button type='submit' >ADD</Button>

</div>

</Form>


</Modal.Body>

</Modal>
          )}
    
         
        </Formik>
        );
        
      }
    
    
 
      const mapdispatchtoprops =(dispatch) => {
        return {
          createDuty: (Duty) => dispatch(createDuty(Duty))
        }
      }
      export default connect(null, mapdispatchtoprops)(AssignDutiesModal)
  
