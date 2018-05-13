import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBe2JJkdNsztj9apyLvhwYamZZpiZjl7Is",
  authDomain: "lunne-dc794.firebaseapp.com",
  databaseURL: "https://lunne-dc794.firebaseio.com",
  projectId: "lunne-dc794",
  storageBucket:"lunne-dc794.appspot.com",
  messagingSenderId: "336634609466",
};

if(!firebase.apps.length){
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
