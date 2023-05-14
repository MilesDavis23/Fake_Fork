/* functions for phase 3 */
//import storage from "./common"

const thisSite = 'phase_3'

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

//evenet listener for changing background on flipping:
document.querySelector('.card').addEventListener('mouseover', function() {
    document.body.style.backgroundColor = "black"; // replace with your color
});

document.querySelector('.card').addEventListener('mouseout', function() {
    document.body.style.backgroundColor = "white"; // replace with your color
});

