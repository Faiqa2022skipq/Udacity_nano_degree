import {connect} from "react-redux";
import { useState } from "react";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {handleAddAnswer} from "../actions/questions";
const Poll = ({dispatch, authedUser, question, author}) => {
    const [isActiveOptionOne, setIsActiveOptionOne] = useState(false);
    const [isActiveOptionTwo, setIsActiveOptionTwp] = useState(false)
    const navigate = useNavigate();
    if (!authedUser || !question || !author) {
        alert("Not Authorized !")
        return <Navigate to="*"/>;
    }

    const voteForOptionOne = question.optionOne.votes.includes(authedUser.id);
    const voteForOptionTwo = question.optionTwo.votes.includes(authedUser.id);
    const voted = voteForOptionOne || voteForOptionTwo;

    const optionOne = (e) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id, "optionOne"));
        navigate("/");
        setIsActiveOptionOne(!isActiveOptionOne)
    };

    const optionTwo = (e) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id, "optionTwo"));
        navigate("/");
        setIsActiveOptionTwp(!isActiveOptionTwo)
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
                <img src={author.avatarURL} alt="author"  style = {{width:'150px'}}/>
            </div>
            <div >
                <h2 >Would you rather?</h2>
            </div>
            <div >
                <button onClick={optionOne} disabled={voted} 
                 style={{
                    backgroundColor: isActiveOptionOne ? 'salmon' : '',
                    color: isActiveOptionOne ? 'white' : '',
                  }}
                
               
                        className={ (voteForOptionOne ? "bg-lime-400" : "")}>
                    <div className={voteForOptionOne ? "chosen" : ""}>
                        <p >{question.optionOne.text}</p>
                        {!voted &&
                        <p >Click</p>
                        }
                        {voted &&
                        <p >Votes: {question.optionOne.votes.length} ({votedPercentage("optionOne", question)}) </p>
                        }
                    </div>
                </button>

                <button onClick={optionTwo} disabled={voted} style = {{marginLeft:'5px'}}
                
                        className={ (voteForOptionTwo ? "bg-lime-400" : "")}>
                    <p >{question.optionTwo.text}</p>
                    {!voted &&
                    <p >Click </p>
                    }
                    {voted &&
                    <p >Votes: {question.optionTwo.votes.length} ({votedPercentage("optionTwo", question)})  </p>
                    }
                </button>


            </div>


        </div>
    );
};

const mapStateToProps = ({authedUser, users, questions}) => {
    try {
        const question = Object.values(questions).find((question) => question.id === useParams().id);
        const author = Object.values(users).find((user) => user.id === question.author);
        return {authedUser, question, author};
    } catch (e) {
        return <Navigate to="*"/>;
    }
};

export default connect(mapStateToProps)(Poll);
