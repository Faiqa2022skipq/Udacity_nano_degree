import {_saveQuestion, _saveQuestionAnswer} from "../Services/Data";
import {addAnswerUser, addQuestionUser} from "./users";

export const NEW_QUESTION = "NEW_QUESTION";
export const NEW_ANSWER_QUESTION = "NEW_ANSWER_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}

function addQuestion(question) {
    return {
        type: NEW_QUESTION,
        question,
    };
}

function addAnswerQuestion(author, qid, answer) {
    return {
        type: NEW_ANSWER_QUESTION,
        author,
        qid,
        answer,
    };
}

export function handleAddQuestion(firstOption, secondOption) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        return _saveQuestion(firstOption, secondOption, authedUser)
            .then((question) => {
                dispatch(addQuestion(question));
                dispatch(addQuestionUser(question))
            })
            .catch((error) =>
            {
               
                alert("error while inserting new question " , error)
            })
    };
}

export function handleAddAnswer(questionId, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        return _saveQuestionAnswer(authedUser.id, questionId, answer)
            .then(() => {
                dispatch(addAnswerQuestion(authedUser.id, questionId, answer));
                dispatch(addAnswerUser(authedUser.id, questionId, answer));
             
            })
            .catch((error) =>
            {
               
                alert("Error while answering to taht question" , error)
            }

            )
    };
}
