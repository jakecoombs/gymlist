import { Exercise } from "@/types";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";

interface ISetCheckboxesProps {
  exercise: Exercise;
  workoutId: number;
}

const SetCheckboxes = ({ exercise, workoutId }: ISetCheckboxesProps) => {
  const [completedSets, setCompletedSets] = useState(0);

  const sets = Array.from(
    { length: exercise.sets },
    (_, i) => i < completedSets
  );

  return (
    <ThemedView style={styles.checkboxContainer}>
      {sets.map((value, index) => (
        <Checkbox
          style={{ padding: 15 }}
          key={index}
          value={value}
          onValueChange={(newValue: boolean) => {
            newValue
              ? setCompletedSets(completedSets + 1)
              : setCompletedSets(completedSets - 1);
          }}
        />
      ))}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
});

export default SetCheckboxes;
