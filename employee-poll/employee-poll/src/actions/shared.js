import {receiveUsers} from "./users";
import {receiveQuestions} from "./questions";
import {getInitialData} from "../Services/Data"

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
        });
    };
}


