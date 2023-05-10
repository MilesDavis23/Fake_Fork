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
      }
    },
  
    redirectToLastCompletedPhase: () => {
      if (!storage.user.name || !storage.user.email || !storage.user.birthdate) {
        window.location.href = '/phase1/index.html';
      } else if (!storage.user.city || !storage.user.street) { 
        window.location.href = '/phase2/index.html';
      } else if (!storage.user.image || !storage.user.hobbies) {
        window.location.href = '/phase3/index.html';
      }
    }
  };
  
  //export default storage;
  