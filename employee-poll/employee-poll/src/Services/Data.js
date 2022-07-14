  function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }
  
  export function _getUsers () {
    return new Promise((resolve) => {
      setTimeout(() => resolve({...users}), 1000)
    })
  }
  
  export function _getQuestions () {
    return new Promise((resolve) => {
      setTimeout(() => resolve({...questions}), 1000)
    })
  }
  
  function formatQuestion ({ optionOneText, optionTwoText, author }) {
    return {
      id: generateUID(),
      timestamp: Date.now(),
      author,
      optionOne: {
        votes: [],
        text: optionOneText,
      },
      optionTwo: {
        votes: [],
        text: optionTwoText,
      }
    }
  }
  
  export function _saveQuestion (question) {
    return new Promise((resolve, reject) => {
      if (!question.optionOneText || !question.optionTwoText || !question.author) {
        reject("Please provide optionOneText, optionTwoText, and author");
      }
  
      const formattedQuestion = formatQuestion(question)
      setTimeout(() => {
        questions = {
          ...questions,
          [formattedQuestion.id]: formattedQuestion
        }
  
        resolve(formattedQuestion)
      }, 1000)
    })
  }
  
  export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
    return new Promise((resolve, reject) => {
      if (!authedUser || !qid || !answer) {
        reject("Please provide authedUser, qid, and answer");
      }
  
      setTimeout(() => {
        users = {
          ...users,
          [authedUser]: {
            ...users[authedUser],
            answers: {
              ...users[authedUser].answers,
              [qid]: answer
            }
          }
        }
  
        questions = {
          ...questions,
          [qid]: {
            ...questions[qid],
            [answer]: {
              ...questions[qid][answer],
              votes: questions[qid][answer].votes.concat([authedUser])
            }
          }
        }
  
        resolve(true)
      }, 500)
    })
  }
  