import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './card.css'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
const Card1 = ({ question, author }) => {
  const navigate = useNavigate();
  const handlePoll = () => {
    navigate("questions/" + question.id);
  };
  return (

    
      <div className="row" md={2} style={{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
      }}>
        
     


       
       
       
            <MDBCard     >
              <MDBCardImage src={author?.avatarURL} style={{ width: '50px' }} position='top' alt='...' />
              <MDBCardBody>
                <MDBCardTitle>   {question.author}</MDBCardTitle>
                <MDBCardText>
                  {new Date(question.timestamp).toDateString()}        </MDBCardText>
                <button onClick={handlePoll}> Show </button>
              </MDBCardBody>
            </MDBCard>
           
            </div>
            
         



  
  );
}
export default connect()(Card1);