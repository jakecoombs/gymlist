import React from "react";
import { FlatList, useColorScheme } from "react-native";
import { StyleSheet } from "react-native";
import { WORKOUTS } from "@/data";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Colors } from "@/constants/Colors";

const WorkoutList = () => {
  const workouts = WORKOUTS;
  const colorScheme = useColorScheme() ?? "light";

  return (
    <ThemedView>
      <FlatList
        data={workouts}
        renderItem={({ item }) => (
          <ThemedView
            style={[
              styles.container,
              { borderColor: Colors[colorScheme].text },
            ]}
          >
            <ThemedText type="defaultSemiBold">{item.name}</ThemedText>
            <ThemedText type="subtext">{item.description}</ThemedText>
            <ThemedText type="subtext">
              Last workout: {item.lastWorkout?.split("T")[0] ?? "N/A"}
            </ThemedText>
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

export default WorkoutList;
