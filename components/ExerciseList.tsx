import React from "react";
import { FlatList } from "react-native";
import { Exercise } from "@/types";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import ExerciseItem from "./ExerciseItem";

interface IExerciseListProps {
  exercises: Exercise[];
  parentWorkoutId: number;
}

const ExerciseList = ({ exercises, parentWorkoutId }: IExerciseListProps) => {
  return (
    <ThemedView>
      <ThemedText type="subtitle">Exercises ({exercises.length})</ThemedText>
      <FlatList
        data={exercises}
        renderItem={({ item }) => (
          <ExerciseItem item={item} parentWorkoutId={parentWorkoutId} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </ThemedView>
  );
};

export default ExerciseList;
