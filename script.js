// Import Firebase functions
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDcztKpnfAF40k-RooznO2E8slP-Vww_Y",
    authDomain: "user-registration-d9125.firebaseapp.com",
    projectId: "user-registration-d9125",
    storageBucket: "user-registration-d9125.appspot.com",
    messagingSenderId: "162171537537",
    appId: "1:162171537537:web:7e1dda6a946b16b4122580"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Handle form submission
document.getElementById('UserRegistration').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = getElementVal('email');
    const password = getElementVal('password');

    try {
        await addDoc(collection(db, 'users'), {
            email: email,
            password: password
        });
        alert('User registered successfully!'); // Success prompt
        document.getElementById('UserRegistration').reset();
    } catch (error) {
        console.error('Error registering user:', error);
        alert('Error registering user. Please try again.'); // Error prompt
    }
});

// Function to get input values
const getElementVal = (id) => {
    return document.getElementById(id).value;
}
