import React, { useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";

const conspiracies = [
  "The moon landing was staged to distract us from time-travel experiments in Area 51.",
  "Birds aren't real - they're government surveillance drones.",
  "The pyramids were built by aliens using 5G energy beams.",
  "Sharks are secretly employed by the government to patrol international waters.",
  "The Internet is a simulation run by sentient dolphins.",
  "Finland doesn't exist; it's a fabricated landmass to increase fish exports.",
  "Your toaster is listening to your conversations.",
  "The Titanic never sank - it was swapped with its sister ship in an insurance scam.",
  "Clouds are manufactured by corporations to manipulate weather and emotions.",
  "Time zones are a lie created to control the population's sleep cycle."
];

export default function App() {
  const [conspiracy, setConspiracy] = useState("");

  const generateConspiracy = () => {
    const randomIndex = Math.floor(Math.random() * conspiracies.length);
    setConspiracy(conspiracies[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Random Conspiracy Generator</Text>
      <ScrollView style={styles.scroll}>
        <Text style={styles.conspiracy}>
          {conspiracy || "Press the button to reveal a hidden truth..."}
        </Text>
      </ScrollView>
      <Button title="Generate Conspiracy" onPress={generateConspiracy} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  scroll: {
    maxHeight: 200,
    marginBottom: 20,
  },
  conspiracy: {
    fontSize: 18,
    textAlign: "center",
    color: "#333",
  },
});
