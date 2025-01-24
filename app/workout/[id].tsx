import NotFoundScreen from "@/components/NotFound";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { WORKOUTS } from "@/data";
import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";
import React from "react";
import ExerciseList from "@/components/ExerciseList";

export default function Page() {
  const { id } = useLocalSearchParams();

  const workout = WORKOUTS.find(
    (workout) => workout.id === parseInt(id as string)
  );

  if (!workout) {
    return <NotFoundScreen />;
  }

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: workout.name }} />
      <ThemedText style={{ marginVertical: 10 }} type="defaultSemiBold">
        {workout.description}
      </ThemedText>
      <ExerciseList
        exercises={workout.exercises}
        parentWorkoutId={workout.id}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
