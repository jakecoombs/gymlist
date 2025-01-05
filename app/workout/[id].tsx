import NotFoundScreen from "@/components/NotFound";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { WORKOUTS } from "@/data";
import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";
import React from "react";

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
      <ThemedText type="defaultSemiBold">{workout.description}</ThemedText>
      <ThemedText>Exercises: {workout.exercises.length}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
