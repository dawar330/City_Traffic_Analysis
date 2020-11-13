import React, { Component } from "react";
import {Modal , Button, InputGroup, FormControl} from "react-bootstrap";
import { connect } from "react-redux";
import  {createDuty}  from "../../../redux/actions/DutiesActions"
import * as Yup from 'yup'
import {Form, Formik, Field, ErrorMessage} from 'formik'
import {MenuItem, TextField} from "@material-ui/core"
import { object } from "yup";

 export function AssignDutiesModal(propss){
  

        return(
          <Formik
          initialValues={{FirstName: '',LastName: '', StartTime: '', EndTime: '',Area: ''}}
          onSubmit={(values, formikHelpers)=>{
            console.log(values)
            propss.createDuty(values);
            propss.onHide()
          }}
          validationSchema={
            object({
              FirstName: Yup.string()
              
              .required("First Name is Required"),
              LastName: Yup.string()
              
              .required("Last Name is Required"),
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
<div classname="form-group">


<Field name="FirstName" as={TextField} label="First Name"/><br/>
<ErrorMessage name="FirstName"/><br/>
<Field name="LastName" as={TextField} label="Last Name"/><br/>
<ErrorMessage name="LastName"/><br/>
<Field name="StartTime" type="datetime-local" as={TextField} label="Start Time"/><br/>
<ErrorMessage name="StartTime"/><br/>
<Field name="EndTime" type="datetime-local" as={TextField} label="End Time"/><br/>
<ErrorMessage name="EndTime"/><br/>
<Field name="Area" as={TextField} select label="Area">

<MenuItem value={'F 11'}>F 11</MenuItem>
<MenuItem value={'F 10'}>F 10</MenuItem>
<MenuItem value={'F 9'}>F 9</MenuItem>
<MenuItem value={'F 8'}>F 8</MenuItem>
<MenuItem value={'F 7'}>F 7</MenuItem>
<MenuItem value={'F 6'}>F 6</MenuItem>
<MenuItem value={'G 10'}>G 11</MenuItem>
<MenuItem value={'G 10'}>G 10</MenuItem>
<MenuItem value={'G 10'}>G 9</MenuItem>
<MenuItem value={'G 10'}>G 8</MenuItem>
<MenuItem value={'G 10'}>G 7</MenuItem>
<MenuItem value={'G 10'}>G 6</MenuItem>
<MenuItem value={'E 11'}>E 11</MenuItem>
</Field><br/>
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
  
