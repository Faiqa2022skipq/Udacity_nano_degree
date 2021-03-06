import { connect } from "react-redux";
import Card1 from "./Card";
const AnswerList = ({ authedUser, questions, users }) => {
    const answered = (question) => (question.optionOne.votes.includes(authedUser.id)
        || question.optionTwo.votes.includes(authedUser.id));
    return (
        <div>
            <hr />
         <h2 >Answered Questions</h2>
            <>
                {questions
                    .filter(answered)
                    .map((question) => (
                        <div key={question.id}  style = {{marginBottom:'5px'}}>
                          
                            <Card1 question={question} author={users[question.author]} />
                            
                        </div>
                    ))}
            </>
        </div>
    );
}

const mapStateToProps = ({ authedUser, questions, users }) => ({
    authedUser,
    questions: Object.values(questions).sort(
        (a, b) => b.timestamp - a.timestamp
    ),
    users,
});

export default connect(mapStateToProps)(AnswerList);
  

