
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js';


const firebaseConfig = {
apiKey: "AIzaSyBd9P1vAq6v_DP43W6sZiPn0dWubD6Wgl0",
authDomain: "vaultpredict.firebaseapp.com",
projectId: "vaultpredict",
storageBucket: "vaultpredict.firebasestorage.app",
messagingSenderId: "929618756943",
appId: "1:929618756943:web:394996465541ec5193f13a",
measurementId: "G-SETVDNNTE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// async function getDocuments(collectionName) {
//       try {
//         // console.log(`Fetching documents from '${collectionName}'...`);
        
//         const querySnapshot = await getDocs(collection(db, collectionName));
        
//         // console.log(`Documents in '${collectionName}':`);
//         querySnapshot.forEach((doc) => {
//           console.log(`${doc.id} =>`, doc.data());
//         });
        
//         return querySnapshot;
//       } catch (error) {
//         console.error("Error getting documents:", error);
//         throw error;
//       }
// }

// // Example usage
// getDocuments('executives'); // Replace with your collection name

// async function addDocument(collectionName, documentData) {
//       try {
//         const docRef = await addDoc(collection(db, collectionName), documentData);
//         console.log(`Document added with ID: ${docRef.id}`);
//         return docRef;
//       } catch (error) {
//         console.error("Error adding document: ", error);
//         throw error;
//       }
//     }

// const addAdminForm = document.querySelector('.add-user-form')

// addAdminForm.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const formData = {
//     codeName: addAdminForm.elements.codename.value,
//     personalKey: addAdminForm.elements.personalkey.value,
//     name: addAdminForm.elements.name.value,
//   }
//   console.log("Form submitted", formData);
// })

