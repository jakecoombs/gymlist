import React from "react";
import { useColorScheme } from "react-native";
import { StyleSheet } from "react-native";
import { Exercise } from "@/types";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Colors } from "@/constants/Colors";
import Checkbox from "expo-checkbox";
import SetCheckboxes from "./SetCheckboxes";

interface IExerciseItemProps {
  item: Exercise;
  parentWorkoutId: number;
}

const ExerciseItem = ({ item, parentWorkoutId }: IExerciseItemProps) => {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <ThemedView
      style={[styles.container, { borderColor: Colors[colorScheme].text }]}
    >
      <ThemedText type="defaultSemiBold">{item.name}</ThemedText>
      <ThemedText type="subtext">{item.description}</ThemedText>
      <SetCheckboxes workoutId={parentWorkoutId} exercise={item} />
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
