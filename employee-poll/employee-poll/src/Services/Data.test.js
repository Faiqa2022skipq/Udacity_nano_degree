const {_saveQuestionAnswer} = require("./Data");
const {_saveQuestion} = require("./Data");

describe("_saveQuestionAnswer", () => {
    it("return true when find answer to question", async () => {
        const response = await _saveQuestionAnswer({
            authedUser: "mtsamis",
            qid: "6ni6ok3ym7mf1p33lnez",
            answer: "optionOne"
        });

        expect(response).toBeTruthy();
    });
})


describe("_saveQuestionAnswer", () => {
    it(' return true  when all  data is passed', async() => {
        const q = {
            optionOneText : 'select javascript', 
            optionTwoText: 'Select react js',
            author: 'sarahedo'
        }
     
        const result = await _saveQuestion(q)
        expect(result).toHaveProperty('id')
        expect(result).toHaveProperty('author')
        expect(result).toHaveProperty('timestamp')
        expect(result).toHaveProperty('optionOne')
        expect(result).toHaveProperty('optionTwo')
        expect(result).toBeTruthy();})
    })

describe("_saveQuestion", () => {
it(' return error when incorrect data is passed', async() => {
    const q = {
        optionOneText : 'select javascript', 
        author: 'sarahedo'
    }
    await expect(_saveQuestion(q)).rejects.toEqual('Please provide optionOneText, optionTwoText, and author')
})
})
describe("_saveQuestion", () => {
it(' return false   when incorrect  data is passed', async() => {
    const q = {
        author : 'sarahedo', 
        optionTwoText: 'Select react js',
        author: 'sarahedo'
    }
 
    await expect(_saveQuestion(q)).rejects.toEqual('Please provide optionOneText, optionTwoText, and author')

})})
