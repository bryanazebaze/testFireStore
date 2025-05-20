import { initializeApp } from "firebase/app";
import { collection, addDoc, initializeFirestore } from "firebase/firestore";

// 🔥 Configuration Firebase
const firebaseConfig = {
  apiKey: "TON_API_KEY", 
  authDomain: "testfirestore-85f51.firebaseapp.com", 
  projectId: "testfirestore-85f51", 
  storageBucket: "TON_STORAGE_BUCKET", 
  messagingSenderId: "675017547332", 
  appId: "1:675017547332:android:5030225e744764bd75a611", 
};

// ✅ Initialisation Firebase
const app = initializeApp(firebaseConfig);

// ✅ Firestore avec stabilité améliorée
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true, // 🔥 Force une connexion stable
});

console.log("✅ Firestore bien connecté :", db);

// 📌 Fonction pour ajouter un ingrédient avec tous les champs
export const addIngredient = async (nom: string, quantite: string, unite: string) => {
  try {
    const docRef = await addDoc(collection(db, "ingredients"), {
      nom,
      quantite,
      unite,
    });
    console.log("✅ Ingrédient ajouté avec ID :", docRef.id);
  } catch (error) {
    console.error("❌ Erreur lors de l'ajout :", error);
  }
};

export { db };
