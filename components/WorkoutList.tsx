import React from "react";
import { FlatList, Text, View } from "react-native";
import { WORKOUTS } from "@/data";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

const WorkoutList = () => {
  const workouts = WORKOUTS;

  return (
    <ThemedView>
      <FlatList
        data={workouts}
        renderItem={({ item }) => (
          <ThemedView>
            <ThemedText>{item.name}</ThemedText>
            <ThemedText>{item.description}</ThemedText>
          </ThemedView>
        )}
      />
    </ThemedView>
  );
};

export default WorkoutList;
