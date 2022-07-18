import {_saveQuestion1, _saveQuestionAnswer1} from "../Services/Data";
import {addAnswerUser, addQuestionUser} from "./users";

export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER_QUESTION = "ADD_ANSWER_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    };
}

function addAnswerQuestion(author, qid, answer) {
    return {
        type: ADD_ANSWER_QUESTION,
        author,
        qid,
        answer,
    };
}

export function handleAddQuestion(firstOption, secondOption) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        return _saveQuestion1(firstOption, secondOption, authedUser)
            .then((question) => {
                dispatch(addQuestion(question));
                dispatch(addQuestionUser(question))
                alert("Successfully saved!")
            })
            .catch((error) =>{
                alert("error while saving ", error)
            })
    };
}

export function handleAddAnswer(questionId, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        return _saveQuestionAnswer1(authedUser.id, questionId, answer)
            .then(() => {
                dispatch(addAnswerQuestion(authedUser.id, questionId, answer));
                dispatch(addAnswerUser(authedUser.id, questionId, answer));
            });
    };
}
