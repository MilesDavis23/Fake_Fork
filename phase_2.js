const thisSite = 'phase_2'

document.addEventListener('DOMContentLoaded', () => {
  const phase2Form = document.getElementById('phase2-form');
  const backButton = document.getElementById('back-button');

  storage.checksite(thisSite);

  phase2Form.addEventListener('submit', (event) => {


    event.preventDefault(thisSite);

    const city = document.getElementById('city').value;
    const street = document.getElementById('street').value;
    const number = document.getElementById('number').value;

    storage.setItem('city', city);
    storage.setItem('street', street);
    if (number) {
      storage.setItem('number', number);
    } else {
      storage.removeItem('number');
    }
    
    if (!storage.isDataStored(['city', 'street', 'number'])) {
      alert("Please fill in all fields before proceeding.");
      event.preventDefault();
      return;
    };
  });

  backButton.addEventListener('click', () => {
    window.location.href = './phase_1.html';
  });
});

//event listener for the card fillping:
document.querySelector('.card').addEventListener('mouseover', function() {
  document.body.style.backgroundColor = "black"; // replace with your color
});

document.querySelector('.card').addEventListener('mouseout', function() {
  document.body.style.backgroundColor = "white"; // replace with your color
});
