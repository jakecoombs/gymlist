import React from "react";
import { FlatList, Pressable, useColorScheme } from "react-native";
import { StyleSheet } from "react-native";
import { WORKOUTS } from "@/data";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";

const WorkoutList = () => {
  // TODO: Convert to local store
  const workouts = WORKOUTS;
  const colorScheme = useColorScheme() ?? "light";

  return (
    <ThemedView>
      <FlatList
        data={workouts}
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: "/workout/[id]",
              params: { id: item.id },
            }}
            style={[
              styles.container,
              { borderColor: Colors[colorScheme].text },
            ]}
          >
            <ThemedView>
              <ThemedText type="defaultSemiBold">{item.name}</ThemedText>
              <ThemedText type="subtext">{item.description}</ThemedText>
              <ThemedText type="subtext">
                Last workout: {item.lastWorkout?.split("T")[0] ?? "N/A"}
              </ThemedText>
            </ThemedView>
          </Link>
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
