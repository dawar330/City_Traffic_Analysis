import React from "react";
import {Modal , Button} from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import  {createvarden}  from "../../../redux/actions/VardenActions"
import * as Yup from 'yup'
import {Form, Formik, Field, ErrorMessage} from 'formik'
import {TextField} from "@material-ui/core"
import { object } from "yup";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

 export function CreateWardenModal(propss){
  const {Vardens} = propss 

        return(
          <Formik
          initialValues={{FirstName: '',LastName: '' , Email: '', Age: '', Rank: '',Designation: ''}}
          onSubmit={(values, formikHelpers)=>{
            console.log(values)
            propss.createvarden(values)
            propss.nofity(values)
            Vardens.push({})
            propss.onHide()
        
          }}
          validationSchema={
            object({
              FirstName: Yup.string()
              
              .required("First Name is Required"),
              LastName: Yup.string()
              
              .required("Last Name is Required"),
              Email: Yup.string()
              .email("Wrong email format")
              .min(3, "Minimum 3 symbols")
              .max(50, "Maximum 50 symbols")
              .required()
        ,
  
              Age: Yup.string()
              
              .required("Age is Required"),
              Rank: Yup.string()
              
              .required("Rank is Required"),
              Designation: Yup.string()
              
              .required("Designation is Required")
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
<div>


<Field name="FirstName" as={TextField} label="First Name"/><br/>
<ErrorMessage name="FirstName"/><br/>
<Field name="LastName" as={TextField} label="Last Name"/><br/>
<ErrorMessage name="LastName"/><br/>
<Field name="Email" as={TextField} label="Email"/><br/>
<ErrorMessage name="Email"/><br/>
<Field name="Age" type="number" as={TextField} label="Age"/><br/>
<ErrorMessage name="Age"/><br/>
<Field name="Rank" type="number" as={TextField} label="Rank"/><br/>
<ErrorMessage name="Rank"/><br/>
<Field name="Designation" as={TextField} label="Designation"/><br/>
<ErrorMessage name="Designation"/><br/><br/>
<Button onClick={propss.onHide}>Close</Button>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Button type='submit' >ADD</Button>

</div>

</Form>


</Modal.Body>
<Modal.Footer>
  
</Modal.Footer>

</Modal>
          )}
    
         
        </Formik>
        );
        
      }
    
    
 
      const mapdispatchtoprops =(dispatch) => {
        return {
          createvarden: (Varden) => dispatch(createvarden(Varden))
        }
      }
      export default connect(null, mapdispatchtoprops)(CreateWardenModal)
  
