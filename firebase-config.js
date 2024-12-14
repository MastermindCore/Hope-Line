import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);

export { app, analytics };
