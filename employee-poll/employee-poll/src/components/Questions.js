import React from 'react'
import Card1 from "./Card";
import { connect } from 'react-redux'

const Questions = ({ authedUser, questions, users }) => {
    const question = (question) => (!question.optionOne.votes.includes(authedUser.id)
        && !question.optionTwo.votes.includes(authedUser.id));
    return (
        <div >
            <h2 >Un Answered Questions</h2>
            <>
            
                {questions
                    .filter(question)
                    .map((question) => (
                        <div key={question.id}  style = {{marginBottom:'5px'}}>
                            <Card1 question={question} author={users[question.author]} />
                        </div>
                    ))}
            
            </>
        </div>
    )
}
const mapStateToProps = ({ authedUser, questions, users }) => ({
    authedUser,
    questions: Object.values(questions).sort(
        (a, b) => b.timestamp - a.timestamp
    ),
    users,
});
export default connect(mapStateToProps)(Questions);