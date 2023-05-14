// localStorageHandler.js

const storage = {
    setItem: (key, value) => {
      localStorage.setItem(key, value);
    },
  
    getItem: (key) => {
      return localStorage.getItem(key);
    },
  
    removeItem: (key) => {
      localStorage.removeItem(key);
    },
  
    user: {
      get name() {
        return localStorage.getItem('name');
      },
      get email() {
        return localStorage.getItem('email');
      },
      get birthdate() {
        return localStorage.getItem('birthdate');
      },
      get city() {
        return localStorage.getItem('city');
      },
      get street() {
        return localStorage.getItem('street');
      },
      get number() {
        return localStorage.getItem('number');
      },
      get image() { //this
        return localStorage.getItem('image');
      },
      get hobbies() { //this
        return localStorage.getItem('hobbies');
      },
      get happy() {
        return localStorage.getItem('happy');
      },
      get skydive(){
        return localStorage.getItem('skydive');
      },
      get money() {
        return localStorage.getItem('money');
      }

    },


    checksite: (site) => {
      if (site === 'phase_2' && (!storage.user.name || !storage.user.email || !storage.user.birthdate)) {
          window.location.href = './phase_1.html';
      } else if (site === 'phase_3' && (!storage.user.city || !storage.user.street)) {
          window.location.href = './phase_2.html';
      } else if (site === 'phase_4' && (!storage.user.image || !storage.user.hobbies))  {
        window.location.href = './phase_3.html';
      } else if (site === 'summary' && (!storage.user.happy || !storage.user.skydive || !storage.user.money)) {
          window.location.href = './phase_4.html';
      };
  },


    isDataStored: (keys) => {
      for (const key of keys) {
        if (!localStorage.getItem(key)) {
          return false;
        }
      }
      return true;
    },

    reset: () => {
      localStorage.clear()
      // pageManager.redirectToPhase1()
      window.location.href = './phase_1.html'
    }
  };
  
  //export default storage;
  
//buttons:
function toPhase1(){
  window.location.href = './phase_1.html'
};

function toPhase2(){
  window.location.href = "./phase_2.html"
};

function toPhase3(){
  window.location.href = "./phase_3.html"
};

function toPhase4(){
  window.location.href = './phase_4.html'
}

function goToSummary(){
  window.location.href = './summary.html'
};



