import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './card.css'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
  GridList
} from '@material-ui/core'
const Card1 = ({ question, author }) => {
  const navigate = useNavigate
  const handlePoll = () => {
    navigate("questions/" + question.id);
  };
  return (

    <>
<Link to = {"questions/" + question.id}>
      {/* <Row xs={1} md={2}> */}
      <div className="row" md={2} style={{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
      }}>
        
     


       
       
          <div className="card">
            <MDBCard     >
              <MDBCardImage src={author?.avatarURL} style={{ width: '50px' }} position='top' alt='...' />
              <MDBCardBody>
                <MDBCardTitle>   {question.author}</MDBCardTitle>
                <MDBCardText>
                  {new Date(question.timestamp).toDateString()}        </MDBCardText>
                <button > Show </button>
              </MDBCardBody>
            </MDBCard>
            </div>
           
            </div>
            
         
</Link>


  </>
  
  );
}
export default connect()(Card1);
