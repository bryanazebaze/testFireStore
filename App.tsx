import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { addIngredient } from "./src/config/FirestoreConfig"; 

const App = () => {
  const [nom, setNom] = useState("");
  const [quantite, setQuantite] = useState("");
  const [unite, setUnite] = useState("");

  const handleAddIngredient = () => {
    console.log("🟢 Bouton Ajouter cliqué, tentative d'ajout :", nom, quantite, unite);
    if (nom.trim() !== "" && quantite.trim() !== "" && unite.trim() !== "") {
      addIngredient(nom, quantite, unite);
      setNom("");
      setQuantite("");
      setUnite("");
    } else {
      console.log("⚠️ Veuillez remplir tous les champs !");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter un Ingrédient 🥗</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Nom de l'ingrédient" 
        value={nom} 
        onChangeText={setNom} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Quantité" 
        value={quantite} 
        onChangeText={setQuantite} 
        keyboardType="numeric"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Unité (ex: kg, g, ml)" 
        value={unite} 
        onChangeText={setUnite} 
      />
      <Button title="Ajouter" onPress={handleAddIngredient} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    padding: 20 
  },
  title: { 
    fontSize: 24, 
    marginBottom: 20 
  },
  input: { 
    width: "100%", 
    padding: 10, 
    borderWidth: 1, 
    marginBottom: 10 
  },
});

export default App;
