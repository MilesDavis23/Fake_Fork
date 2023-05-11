/* functions for phase 3 */
//import storage from "./common"

//check if stuff is there in the local Storage:
document.addEventListener('DOMContentLoaded', () => {
    storage.redirectToLastCompletedPhase();
});

//get imgURL from  the input
const imgInputField = document.querySelector('#image-url');
function getImgURL(){
    const inputValue = imgInputField.value;
    if (inputValue) {
        storage.setItem('image', inputValue);
    };
};

//get hobbies array
function trueHobbies(){
    const hobbiesField = document.querySelectorAll('input[name="hobby"]:checked');
    const checkedHobbiesArr = [];
    for (let i = 0; i < hobbiesField.length; i++){
        checkedHobbiesArr.push(hobbiesField[i].value);
    };

    if (checkedHobbiesArr.length === 0) {
        return null;
    }

    hobbieString = ''
    for (let i = 0; i < checkedHobbiesArr.length; i++){
        hobbieString += `${checkedHobbiesArr[i]}, `;
    };

    return hobbieString;
};

function getHobbies(){
    const hobbies = trueHobbies();
    if (hobbies) {
        storage.setItem('hobbies', hobbies);
    }
};

