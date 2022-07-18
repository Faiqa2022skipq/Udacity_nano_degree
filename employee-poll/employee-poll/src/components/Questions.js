import React from 'react'
import Card1 from "./Card";
import { connect } from 'react-redux'

const Questions = ({ authedUser, questions, users }) => {
    const question = (question) => (!question.optionOne.votes.includes(authedUser.id)
        && !question.optionTwo.votes.includes(authedUser.id));
    return (
        <div >
            <h2 >New Questions</h2>
            <>
                {questions
                    .filter(question)
                    .map((question) => (
                        <p key={question.id}>
                            <Card1 question={question} author={users[question.author]} />
                        </p>
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
