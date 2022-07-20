import { connect } from "react-redux";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { handleAddAnswer } from "../actions/questions";
import "./Poll.css";

const Poll = ({ dispatch, authedUser, questions,users }) => {
    const navigate = useNavigate();
  const id = useParams().id;
  const [textOne, setTextOne] = useState(" ");
  const [textTwo, setTextTwo] = useState(" ")
  
        const question = Object.values(questions).find((question) => question.id === id);
        if(!question)
        {
            return <Navigate to = {"*/"}/>
        }
        const author = Object.values(users).find((user) => user.id === question.author);
 
   
   
    

    const voteForOptionOne = question.optionOne.votes.includes(authedUser.id);
    const numberVotesTotal = question.optionOne.votes.length + question.optionTwo.votes.length +1;
    const ques1 = question.optionOne.text;
    const quest2 = question.optionTwo.text;
    const voteForOptionTwo = question.optionTwo.votes.includes(authedUser.id);
    const voted = voteForOptionOne || voteForOptionTwo;

    const optionOne = (e) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id, "optionOne"));
        const voteOneInfo = question.optionOne.votes.length + 1;
        const voteTwoInfo = question.optionTwo.votes.length  
        const finalVoteOne = "selected:  " + ques1 + "\n" +   "Vote for selected: "  + voteOneInfo + "/" + numberVotesTotal + "\n" + "Not Selected " + quest2 + "\n" + "Votes for Not Selected: "   + voteTwoInfo + "/" + numberVotesTotal;
        alert(finalVoteOne)
        setTextOne(finalVoteOne)
    };

    const optionTwo = (e) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id, "optionTwo"));
        const voteOneInfo = question.optionOne.votes.length;

        const voteTwoInfo = question.optionTwo.votes.length + 1;
        const voteTwoInfo_ = votedPercentage("optionTwo", question);
        const finalVoteTwo =  "selected:  " + quest2 + "\n" +   "Vote for selected: "  + voteTwoInfo + "/" + numberVotesTotal + "\n" + "Not Selected " + ques1 + "\n" + "Votes for Not Selected: "   + voteOneInfo + "/" + numberVotesTotal;
        setTextTwo(finalVoteTwo)
        alert(finalVoteTwo)
        // navigate("/");

    };

    const votedPercentage = (option, question) => {
        const numberVotesTotal = question.optionOne.votes.length + question.optionTwo.votes.length;
        switch (option) {
            case "optionOne":
                return question.optionOne.votes.length / numberVotesTotal * 100 + " %";
            case "optionTwo":
                return question.optionTwo.votes.length / numberVotesTotal * 100 + " %";
            default:
                return "";
        }
    };
    
 

    return (
        <div><h1>Poll by {author.id}</h1>
            <div>
                <img src={author.avatarURL} alt="author" style={{ width: '150px' }} />
            </div>
            <div >
                <h2 >Would you rather?</h2>
            </div>
            <div >
                <button onClick={optionOne} disabled={voted}
                    className={(voteForOptionOne ? "selected" : "")}>
                    <p >{question.optionOne.text}</p>
                    {!voted &&
                        <p >Click <br /> {textOne}</p>
                    }
                    {voted &&
                        <p >Votes: {question.optionOne.votes.length} ({votedPercentage("optionOne", question)}) </p>
                    }
                </button>

                <button onClick={optionTwo} disabled={voted} style={{ marginLeft: '5px' }}

                    className={voteForOptionTwo ? "selected" : ""}>
                    <p >{question.optionTwo.text}</p>
                    {!voted &&
                        <p >Click  <br /> {textTwo}</p>
                    }
                    {voted &&
                        <p >Votes: {question.optionTwo.votes.length} ({votedPercentage("optionTwo", question)})  </p>
                    }

                </button>


            </div>


        </div>
    );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
    // try {
    //     const question = Object.values(questions).find((question) => question.id === useParams().id);
    //     const author = Object.values(users).find((user) => user.id === question.author);
    //     return { authedUser, question, author };
    // } catch (e) {
    //     return <Navigate to="*" />;
    // }
    try{return {
        authedUser, 
        questions, 
        users
    }}
    catch (e) {
            return <Navigate to="/*" />;
        }
};

export default connect(mapStateToProps)(Poll);