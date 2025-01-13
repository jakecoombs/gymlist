import React from "react";
import { FlatList } from "react-native";
import { Exercise, EXERCISES } from "@/data";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import ExerciseItem from "./ExerciseItem";

interface IExerciseListProps {
  exercises?: Exercise[];
}

const ExerciseList = ({ exercises }: IExerciseListProps) => {
  const exerciseData = exercises ?? EXERCISES;

  return (
    <ThemedView>
      <ThemedText type="subtitle">Exercises ({exerciseData.length})</ThemedText>
      <FlatList
        data={exerciseData}
        renderItem={({ item }) => <ExerciseItem {...item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </ThemedView>
  );
};

export default ExerciseList;
