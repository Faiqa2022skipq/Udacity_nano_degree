import { connect } from "react-redux";
import Card1 from './Card'
import AnswerList from "./AnswerList";
import Questions from "./Questions";
import { useState } from "react";

const Home = () => {
   

    return (
        <>
            <div style={{
                alignItems: 'center',
                justifyContent: 'center',

            }}>



                <h1  >Dashboard</h1>
                <hr />

                <Questions />
<AnswerList/>

               
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