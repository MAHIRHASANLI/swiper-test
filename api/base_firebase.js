const firebaseConfig = {
    apiKey: "AIzaSyA0mEMERPghvJI0ecCEQZhlpSRMYPCqGvY",
    authDomain: "azerbaijan-energy-engine-94f70.firebaseapp.com",
    projectId: "azerbaijan-energy-engine-94f70",
    storageBucket: "azerbaijan-energy-engine-94f70.appspot.com",
    messagingSenderId: "939394426453",
    appId: "1:939394426453:web:8b4c7121ac7004384296dc"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
// Firestore referansı
const firestore = firebase.firestore();

const Collection_Partners = firestore.collection('partners');



//GET-ALL-DATA
export const getAllData = async () => {
    const querySnapshot = await Collection_Partners.get();
    return querySnapshot
}