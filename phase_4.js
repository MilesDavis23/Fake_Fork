/* functions for phase 3 */
//import storage from "./common"

const thisSite = 'phase_4'

//check if stuff is there in the local Storage:
document.addEventListener('DOMContentLoaded', () => {
    storage.checksite(thisSite);
});

//get imgURL from  the input
const imgInputField = document.querySelector('#image-url');
function getImgURL(){
    const inputValue = imgInputField.value;
    if (inputValue) {
        storage.setItem('image', inputValue);
    };
};

//Function for checking the checkboxes, returning their value. 
function getQuestion(quary){
    const questionField = quary;
    const checkedHobbiesArr = [];
    for (let i = 0; i < questionField.length; i++){
        checkedHobbiesArr.push(questionField[i].value);
    };

    if (checkedHobbiesArr.length === 0) {
        return null;
    }

    hobbieString = ''
    for (let i = 0; i < checkedHobbiesArr.length; i++){
        hobbieString += `${checkedHobbiesArr[i]} `;
    };

    return hobbieString;
};

function getHappy(){
    const happyCheck = document.querySelectorAll('input[name="happy"]:checked');
    const skyDiveCheck = document.querySelectorAll('input[name="skydive"]:checked');
    const moneyCheck = document.querySelectorAll('input[name="dollar"]:checked');
    const answerOne = getQuestion(happyCheck);  // calling the function on each checkbox, corresponding to the question. 
    const answerTwo = getQuestion(skyDiveCheck);
    const answerThree = getQuestion(moneyCheck);

    if (answerOne) {
        storage.setItem('happy', answerOne);
    }
    if (answerTwo) {
        storage.setItem('skydive', answerTwo)
    } 
    if (answerThree) {
        storage.setItem('money', answerThree);
    };
};

//evenet listener for changing background on flipping:
document.querySelector('.card').addEventListener('mouseover', function() {
    document.body.style.backgroundColor = "black"; // replace with your color
});

document.querySelector('.card').addEventListener('mouseout', function() {
    document.body.style.backgroundColor = "white"; // replace with your color
});

