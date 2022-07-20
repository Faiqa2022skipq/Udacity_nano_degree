import { connect } from "react-redux";
import Card1 from './Card'
import AnswerList from "./AnswerList";
import Questions from "./Questions";
import { useState } from "react";
import { Button } from "bootstrap";

const Home = () => {
   
    const[show,setShow]=useState(true);
    const[changeText,setChangeText]=useState(" Show Answer List");
    const handleChange=()=>{
        setShow(!show);
        if(show)
        {
            setChangeText("Show Answered List")
        }
        setChangeText("Show Un Answered List")
    }

    return (
        <>
            <div style={{
                alignItems: 'center',
                justifyContent: 'center',

            }}>
<h1  >Dashboard</h1>
               

    
   
         
      
  <button onClick={handleChange} style = {{
backgroundColor: 'gray',
  color: 'white',
  font: '20px',
  padding: '10px 60px',
  border: '5px',
  margin: '10px 0px',
  cursor: 'pointer'
}}>{changeText}</button>

                
  {show ? <Questions/ > : <AnswerList/>}
               

               
            </div>
        </>
    );
}
//

// return (
// <>



//                                 <button
//                                     onClick={setSwitchForm(false)}>
//                                     Recruiter
//                                 </button>

//                                 <button
//                                     onClick={setSwitchForm(true)}
//                                     type="button">
//                                   Candidate
//                                 </button>



//                          <div className="flex flex-row gap-8">

//                              {switchForm ? <Questions /> : <AnswerList />}

//                          </div>




//                 </>

// )};

export default connect()(Home);