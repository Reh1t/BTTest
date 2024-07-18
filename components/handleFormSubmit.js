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
export const handleFormSubmit = (event) => {
  console.log("Form submitted");
  // Add your form handling logic here
  event.preventDefault();

  const first_name = document.getElementById("first_name").value;
  const last_name = document.getElementById("last_name").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const phone = "+1"+document.getElementById("phone").value;
  const project_details = document.getElementById("project_details").value;

  const data = {
    first_name,
    last_name,
    city,
    email,
    phone,
    project_details,
  };
  console.log(data);

  // Create a reference to the location in the database where you want to store the data
  const userRef = ref(db, "Contact Form/" + first_name + " " + last_name);

  // Write data to this reference
  set(userRef, data)
    .then(() => {
      alert("Form submitted successfully!");
      console.log("Form submitted successfully");
    })
    .catch((error) => {
      console.error("Error submitting form: ", error);
      alert("Error submitting form: " + error.message);
    });

    event.target.reset();
};
