
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnFpHmsIQPczb3dO8fMmoE7Doz8IsopvE",
  authDomain: "hope-line-4c207.firebaseapp.com",
  projectId: "hope-line-4c207",
  storageBucket: "hope-line-4c207.firebasestorage.app",
  messagingSenderId: "459565190820",
  appId: "1:459565190820:web:10b561e8da4a5761d0a031",
  measurementId: "G-B9MNC3X4B5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('request-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const requestType = document.getElementById('request-type').value;
    const description = document.getElementById('description').value;

    try {
        await addDoc(collection(db, "requests"), {
            name: name,
            requestType: requestType,
            description: description,
            timestamp: new Date()
        });
        alert("Request Submitted!");
        document.getElementById('request-form').reset();
    } catch (error) {
        console.error("Error adding document: ", error);
    }
});
