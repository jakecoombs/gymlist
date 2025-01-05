import React from "react";
import { FlatList, useColorScheme } from "react-native";
import { StyleSheet } from "react-native";
import { Exercise, EXERCISES } from "@/data";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Colors } from "@/constants/Colors";

interface IExerciseListProps {
  exercises?: Exercise[];
}

const ExerciseList = ({ exercises }: IExerciseListProps) => {
  const exerciseData = exercises ?? EXERCISES;
  const colorScheme = useColorScheme() ?? "light";

  return (
    <ThemedView>
      <ThemedText type="subtitle">Exercises ({exerciseData.length})</ThemedText>
      <FlatList
        data={exerciseData}
        renderItem={({ item }) => (
          <ThemedView
            style={[
              styles.container,
              { borderColor: Colors[colorScheme].text },
            ]}
          >
            <ThemedText type="defaultSemiBold">{item.name}</ThemedText>
            <ThemedText type="subtext">{item.description}</ThemedText>
          </ThemedView>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
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
});

export default ExerciseList;
