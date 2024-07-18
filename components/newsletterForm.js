// Import the functions you need from the SDKs you need
import { initializeApp } from "../node_modules/firebase/app";
import { getDatabase, ref, set } from "../node_modules/firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI1QZ8RTLkya5Z-QBDkdXB5BcdMrnl07g",
  authDomain: "building-tradition-24.firebaseapp.com",
  projectId: "building-tradition-24",
  storageBucket: "building-tradition-24.appspot.com",
  messagingSenderId: "102645288364",
  appId: "1:102645288364:web:2451b907a8a54ac44a3e09"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
const db = getDatabase(fireBaseApp);

// handleForm.js
export const newsletterForm = (event) => {
  console.log("Form submitted");
  // Add your form handling logic here
  event.preventDefault();

  const email = document.getElementById("email").value;

  const data = {
    email,
  };
  console.log(data);

  // Create a reference to the location in the database where you want to store the data
  const userRef = ref(db, "Newsletter Email/");

  // Write data to this reference
  set(userRef, data)
    .then(() => {
      alert("Email submitted successfully!");
      console.log("Email submitted successfully");
    })
    .catch((error) => {
      console.error("Error submitting Email: ", error);
      alert("Error submitting email: " + error.message);
    });

    event.target.reset();
};
