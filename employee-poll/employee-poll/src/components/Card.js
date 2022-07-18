import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import  './card.css'
import Row from 'react-bootstrap/Row';


import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
const Card1 = ({ question, author }) => {
  return (
   
     <Link to={'questions/' + question.id}>
  
          {/* <Row xs={1} md={2}> */}
    <div class="row" md={2} style= {{  alignItems: 'center',
            justifyContent: 'center',
            display:'flex'}}>
  <div class="column">
    <div class="card">
    <MDBCard style={{ maxWidth: '22rem' }}    >
         <MDBCardImage src={author?.avatarURL} style={{ width: '50px' }} position='top' alt='...' />
         <MDBCardBody>
           <MDBCardTitle>   {question.author}</MDBCardTitle>
           <MDBCardText>
             {new Date(question.timestamp).toDateString()}        </MDBCardText>
           <button> Show </button>
         </MDBCardBody>
       </MDBCard>
    </div>
  </div>
  </div>
  
 
   </Link>
  );
}
export default connect()(Card1);
