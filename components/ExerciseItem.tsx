import React, { useState } from "react";
import { useColorScheme } from "react-native";
import { StyleSheet } from "react-native";
import { Exercise } from "@/data";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Colors } from "@/constants/Colors";
import Checkbox from "expo-checkbox";

const ExerciseItem = (item: Exercise) => {
  const colorScheme = useColorScheme() ?? "light";

  const [sets, setSets] = useState(Array(item.sets).fill(false));

  return (
    <ThemedView
      style={[styles.container, { borderColor: Colors[colorScheme].text }]}
    >
      <ThemedText type="defaultSemiBold">{item.name}</ThemedText>
      <ThemedText type="subtext">{item.description}</ThemedText>
      <ThemedView style={styles.checkboxContainer}>
        {sets.map((value, index) => (
          <Checkbox
            key={index}
            value={value}
            onValueChange={(newValue) => {
              sets[index] = newValue;
              setSets([...sets]);
            }}
          />
        ))}
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginVertical: 5,
    borderRadius: 12,
    borderWidth: 2,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginVertical: 10,
    width: "100%",
    justifyContent: "space-evenly",
  },
});

export default ExerciseItem;
